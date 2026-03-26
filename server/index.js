import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from './db.js';
import User from './models/User.js';
import Challenge from './models/Challenge.js';
import authenticateToken from './middleware/auth.js';
import {
  dashboardSummary,
  missionArcs,
  challenges,
  quizzes,
  learningModules,
  leaderboard,
  achievements,
  dailyChallenges,
  ecoGames,
  carbonCalculatorPresets,
  virtualGarden,
  photoChallenges,
  ecoMapMarkers,
  communityTopics,
  teams,
  events,
  ecoTips,
  successStories,
  rewards,
  shareImpactTemplates,
  streakSummary,
  sdgGoals,
  nepAlignment,
  videoLibrary,
  ecoLibrary,
  recyclingGuide,
  climateData,
  greenCareers,
  partnerships,
  settingsDefaults,
  helpFaqs,
  contactInfo,
  privacyPolicy,
  teacherToolkit,
  teacherAchievements,
  analyticsSummary,
} from './mockData.js';

dotenv.config();
connectDB();

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Temporary in-memory store (replace with a real database later)
const users = new Map();

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  school: user.school,
});

app.get('/', (_req, res) => {
  res.json({ status: 'EcoVerse Quest API active' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, role = 'student', school = '' } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role,
      school,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, role }, JWT_SECRET, { expiresIn: '12h' });

    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        school: newUser.school,
      },
      token,
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Failed to create account. Please try again.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '12h' });

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        school: user.school,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Unable to login. Please try again.' });
  }
});

app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid authorization header.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const { userId } = payload;
    const user = [...users.values()].find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ user: sanitizeUser(user) });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
});

// Prototyping endpoints for frontend sidebar features
const simpleGetRoutes = [
  ['/api/dashboard/summary', dashboardSummary],
  ['/api/mission-arcs', missionArcs],
  // ['/api/challenges', challenges], // Now handled by database
  ['/api/quizzes', quizzes],
  ['/api/learning-modules', learningModules],
  ['/api/leaderboard', leaderboard],
  ['/api/achievements', achievements],
  ['/api/daily-challenges', dailyChallenges],
  ['/api/eco-games', ecoGames],
  ['/api/carbon-calculator', carbonCalculatorPresets],
  ['/api/virtual-garden', virtualGarden],
  ['/api/photo-challenges', photoChallenges],
  ['/api/eco-map', ecoMapMarkers],
  ['/api/community/topics', communityTopics],
  ['/api/teams', teams],
  ['/api/events', events],
  ['/api/eco-tips', ecoTips],
  ['/api/success-stories', successStories],
  ['/api/rewards', rewards],
  ['/api/share-impact/templates', shareImpactTemplates],
  ['/api/streak', streakSummary],
  ['/api/sdg-goals', sdgGoals],
  ['/api/nep-alignment', nepAlignment],
  ['/api/video-library', videoLibrary],
  ['/api/eco-library', ecoLibrary],
  ['/api/recycling-guide', recyclingGuide],
  ['/api/climate-data', climateData],
  ['/api/green-careers', greenCareers],
  ['/api/partnerships', partnerships],
  ['/api/settings/defaults', settingsDefaults],
  ['/api/help/faqs', helpFaqs],
  ['/api/contact', contactInfo],
  ['/api/privacy', privacyPolicy],
  ['/api/teacher/toolkit', teacherToolkit],
  ['/api/teacher/achievements', teacherAchievements],
  ['/api/teacher/analytics', analyticsSummary],
];

simpleGetRoutes.forEach(([path, payload]) => {
  app.get(path, (_req, res) => {
    res.json(payload);
  });
});

app.get('/api/mission-arcs/:id', (req, res) => {
  const arc = missionArcs.find((item) => item.id === req.params.id);

  if (!arc) {
    return res.status(404).json({ message: 'Mission arc not found.' });
  }

  res.json(arc);
});

app.post('/api/challenges/:id/submit', authenticateToken, async (req, res) => {
  try {
    const { description, images } = req.body;
    const challengeId = req.params.id;
    const userId = req.user.userId;

    const submission = new Submission({
      userId,
      challengeId,
      description,
      images: images || [],
    });

    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    console.error('Error submitting challenge:', error);
    res.status(500).json({ message: 'Failed to submit challenge' });
  }
});

app.get('/api/challenges/:id', async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found.' });
    }
    res.json(challenge);
  } catch (error) {
    console.error('Error fetching challenge:', error);
    res.status(500).json({ message: 'Failed to fetch challenge' });
  }
});

const initialPort = parseInt(process.env.PORT) || 5000;

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  Port ${port} occupied. Trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
}

export default app;

startServer(initialPort);