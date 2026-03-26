// Dashboard / profile essentials
export const dashboardSummary = {
  user: { id: 'user_1', name: 'Alex Johnson', role: 'student', ecoLevel: 8, ecoPoints: 2450, rank: 3 },
  streak: { current: 9, longest: 21 },
  spotlight: { mission: 'Guardians of the River', nextAction: 'Build Bio-Filter Crates', dueDate: '2025-11-15' },
};

export const missionArcs = [
  {
    id: 'river-arc',
    title: 'Guardians of the River',
    act: 'Act II • Rising Currents',
    focus: 'Water Stewardship',
    reward: '+250 pts · River Guardian badge',
    badge: '💧',
    status: 'active',
    chapters: [
      { id: 'river-1', title: 'Scout the Riverbanks', status: 'completed', points: 120 },
      { id: 'river-2', title: 'Community Cleanup Sprint', status: 'completed', points: 160 },
      { id: 'river-3', title: 'Build Bio-Filter Crates', status: 'active', points: 200 },
      { id: 'river-4', title: 'River Guardian Festival', status: 'upcoming', points: 250 },
    ],
  },
  {
    id: 'pollinator-arc',
    title: 'Pollinator Protectors',
    act: 'Act I • Awakening',
    focus: 'Biodiversity',
    reward: '+200 pts · Nectar Champion badge',
    badge: '🦋',
    status: 'available',
    chapters: [
      { id: 'pollinator-1', title: 'Map Pollinator Hotspots', status: 'available', points: 100 },
      { id: 'pollinator-2', title: 'Build Bee Hotels', status: 'locked', points: 140 },
      { id: 'pollinator-3', title: 'Host Pollinator Parade', status: 'locked', points: 180 },
    ],
  },
];

// Challenges / missions / submissions
export const challenges = [
  { id: 3, title: 'Build Bio-Filter Crates', category: 'Water', difficulty: 'Advanced', status: 'active', points: 200, missionArcId: 'river-arc', chapterId: 'river-3' },
  { id: 4, title: 'Neighborhood Waste Audit', category: 'Waste', difficulty: 'Intermediate', status: 'available', points: 160 },
  { id: 5, title: 'Host a No-Car Day', category: 'Air Quality', difficulty: 'Advanced', status: 'upcoming', points: 220 },
];

// Quizzes & learning
export const quizzes = [
  { id: 'quiz-1', title: 'Zero Waste Foundations', topic: 'Waste Management', difficulty: 'Intermediate', estimatedTime: 12 },
  { id: 'quiz-2', title: 'Climate Change Reality Check', topic: 'Climate Science', difficulty: 'Advanced', estimatedTime: 15 },
];

export const learningModules = [
  { id: 'module-1', title: 'Circular Economy 101', format: 'Video + Worksheet', duration: '45 min', sdgAlignment: [12, 13] },
  { id: 'module-2', title: 'Water Stewardship Labs', format: 'Interactive', duration: '60 min', sdgAlignment: [6, 14] },
];

// Leaderboard
export const leaderboard = {
  global: [
    { id: 'team-1', name: 'Green Guardians', score: 9860, members: 25 },
    { id: 'team-2', name: 'Solar Sprouts', score: 9320, members: 18 },
    { id: 'team-3', name: 'River Rangers', score: 9050, members: 21 },
  ],
  personal: { rank: 3, nextAdvantage: '+120 pts to reach #2' },
};

// Achievements
export const achievements = [
  { id: 'ach-1', title: 'Tree Planter', description: 'Plant 10 saplings', earnedOn: '2025-10-12' },
  { id: 'ach-2', title: 'Zero Waste Hero', description: 'Complete 3 zero-waste challenges', earnedOn: '2025-10-02' },
  { id: 'ach-3', title: 'Mission Architect', description: 'Lead a community mission arc', earnedOn: null },
];

// Daily challenges
export const dailyChallenges = [
  { id: 'daily-1', title: 'Refill Bottle Check-in', reward: '+15 pts', expiresAt: '2025-11-06T23:59:59Z' },
  { id: 'daily-2', title: 'Spot the Biodiversity Micro-habitat', reward: '+20 pts', expiresAt: '2025-11-06T23:59:59Z' },
];

// Games & virtual habitats
export const ecoGames = [
  { id: 'game-1', title: 'Habitat Builder', genre: 'Simulation', bestScore: 8700 },
  { id: 'game-2', title: 'Recycle Rush', genre: 'Arcade', bestScore: 12400 },
];

export const carbonCalculatorPresets = {
  defaults: { transport: 180, energy: 240, food: 310 },
  tips: [
    'Switch to two days of plant-based meals per week to cut 12kg CO₂ monthly.',
    'Bike or walk short trips under 3 km to save 18kg CO₂ monthly.',
  ],
};

export const virtualGarden = {
  stage: 'Blooming Meadow',
  nextMilestone: 'Invite 3 friends to water the garden',
  flora: [
    { name: 'Marigold', health: 82 },
    { name: 'Lavender', health: 75 },
    { name: 'Bamboo', health: 91 },
  ],
};

export const photoChallenges = [
  { id: 'photo-1', title: 'Before & After Cleanup Transformation', instructions: 'Showcase how your cleanup transformed the area', proofRequired: true },
  { id: 'photo-2', title: 'Biodiversity Macro Shot', instructions: 'Capture a pollinator in action', proofRequired: true },
];

// Maps & community
export const ecoMapMarkers = [
  { id: 'marker-1', type: 'cleanup', title: 'Riverside Litter Hotspot', coordinates: { lat: 28.61, lng: 77.23 } },
  { id: 'marker-2', type: 'mission', title: 'Community Compost Hub', coordinates: { lat: 28.64, lng: 77.21 } },
];

export const communityTopics = [
  { id: 'topic-1', title: 'How to convince your school to compost?', replies: 16 },
  { id: 'topic-2', title: 'Share your favorite eco memes!', replies: 42 },
];

export const teams = [
  { id: 'team-1', name: 'Eco Innovators', members: 12, focus: 'Energy Conservation' },
  { id: 'team-2', name: 'River Rangers', members: 15, focus: 'Water Stewardship' },
];

// Events / seasonal tournaments
export const events = [
  {
    id: 'event-1',
    title: 'Seasonal Sustainathon',
    startDate: '2025-12-01',
    endDate: '2025-12-21',
    sponsor: 'GreenGrid CSR',
    description: 'Team-based missions with special leaderboard and sponsor rewards.',
  },
  {
    id: 'event-2',
    title: 'Community Tree Drive',
    startDate: '2025-11-15',
    endDate: '2025-11-16',
    sponsor: null,
    description: 'Plant 500 saplings across partner schools in 48 hours.',
  },
];

export const ecoTips = [
  { id: 'tip-1', title: 'Switch off vampire appliances overnight', category: 'Energy' },
  { id: 'tip-2', title: 'Carry bamboo cutlery to avoid single-use plastics', category: 'Waste' },
];

export const successStories = [
  { id: 'story-1', title: 'How River Rangers Reduced Plastic by 60%', author: 'Priya Sharma', impact: 'Collected 1.2 tons of plastic debris in 4 weeks.' },
];

// Rewards marketplace
export const rewards = [
  { id: 'reward-1', title: 'EcoVerse Quest Hoodie', cost: 1200, type: 'physical' },
  { id: 'reward-2', title: 'Solar Workshop Pass', cost: 800, type: 'experience' },
  { id: 'reward-3', title: 'Organic Seed Kit', cost: 450, type: 'physical' },
];

export const shareImpactTemplates = [
  {
    id: 'share-1',
    platform: 'Instagram',
    copy: '🌱 Just completed the River Guardian mission on EcoVerse Quest! Join me in protecting our waterways. #EcoVerseQuest',
  },
];

export const streakSummary = { current: 9, longest: 21, bonusUnlocks: ['Exclusive avatar frame', 'Double points weekend pass'] };

export const sdgGoals = [
  { id: 6, title: 'Clean Water & Sanitation', alignment: '20 activities completed' },
  { id: 11, title: 'Sustainable Cities & Communities', alignment: '15 activities completed' },
  { id: 13, title: 'Climate Action', alignment: '32 activities completed' },
];

export const nepAlignment = {
  summary: 'EcoVerse Quest embeds experiential, interdisciplinary sustainability learning aligned with NEP 2020.',
  highlights: [
    'Project-based learning modules tied to local contexts',
    'Teacher toolkit with competency-mapped lesson plans',
    'Assessment ready rubrics for sustainability competencies',
  ],
};

export const videoLibrary = [
  { id: 'video-1', title: 'Wetlands Wonders', duration: '8:32', url: 'https://videos.ecoverse.quest/wetlands' },
  { id: 'video-2', title: 'Designing Circular Products', duration: '12:05', url: 'https://videos.ecoverse.quest/circular-products' },
];

export const ecoLibrary = [
  { id: 'read-1', title: 'Guide to Community Composting', format: 'PDF', length: '12 pages' },
  { id: 'read-2', title: 'Youth Climate Action Playbook', format: 'Interactive', length: '45 min' },
];

export const recyclingGuide = {
  overview: 'Step-by-step playbooks curated for Indian urban schools to launch zero-waste drives.',
  materials: [
    { type: 'Paper', bestPractice: 'Collect separately and partner with recycling co-ops' },
    { type: 'E-waste', bestPractice: 'Host quarterly collection drives with certified vendors' },
  ],
};

export const climateData = {
  campusFootprint: {
    energyUse: 18.2,
    waterUse: 12.4,
    emissions: 9.1,
    units: { energyUse: 'MWh/month', waterUse: 'KL/month', emissions: 'tCO₂e/month' },
  },
  projections: [
    { month: 'Jul', footprint: 9.8 },
    { month: 'Aug', footprint: 9.4 },
    { month: 'Sep', footprint: 8.9 },
    { month: 'Oct', footprint: 8.4 },
  ],
};

export const greenCareers = [
  { id: 'career-1', title: 'Sustainability Analyst', pathway: 'Environmental Science, Data Analytics', outlook: 'High demand in CSR & ESG teams' },
  { id: 'career-2', title: 'Urban Farmer', pathway: 'Agroecology, Business', outlook: 'Growing rooftop farming initiatives' },
];

export const partnerships = [
  { id: 'partner-1', name: 'GreenGrid CSR', focus: 'Renewable energy mentorship', region: 'National' },
  { id: 'partner-2', name: 'RiverWatch India', focus: 'Citizen science water monitoring', region: 'North India' },
];

export const settingsDefaults = {
  notificationPreferences: { email: true, push: true, sms: false },
  privacyControls: { showProfilePublic: false, shareAchievementsAutomatically: true },
};

export const helpFaqs = [
  { id: 'faq-1', question: 'How do I join a mission arc?', answer: 'Visit the Challenges section and filter by Active Missions.' },
  { id: 'faq-2', question: 'Can teachers track student submissions?', answer: 'Yes, use the Teacher Dashboard for verification insights.' },
];

export const contactInfo = {
  email: 'support@ecoverse.quest',
  phone: '+91-9876543210',
  address: 'EcoVerse Quest HQ, Bengaluru, India',
};

export const privacyPolicy = {
  lastUpdated: '2025-09-15',
  summary: 'We collect minimal personal data to power collaborative environmental missions.',
  sections: [
    { title: 'Data We Collect', points: ['Profile details', 'Mission submissions', 'Leaderboard metrics'] },
    { title: 'Your Rights', points: ['Access and download your data', 'Request deletion of submissions', 'Opt-out of analytics tracking'] },
  ],
};

// Teacher toolkit / achievements / analytics
export const teacherToolkit = {
  lessonPlans: [
    { id: 'lp-1', title: 'River Health Investigation', duration: '2 sessions', sdgAlignment: [6, 14], resources: ['Field notebook template', 'Water testing kit guide'] },
    { id: 'lp-2', title: 'Circular Design Sprint', duration: '3 sessions', sdgAlignment: [9, 12], resources: ['Student canvas', 'Presentation rubric'] },
  ],
  quickAssign: [
    { id: 'qa-1', title: '15-min Eco Starter', objective: 'Prime students for waste audit challenge', audience: 'Middle School' },
    { id: 'qa-2', title: 'Community Mission Broadcast', objective: 'Send mission briefing via school app', audience: 'Teachers + Parents' },
  ],
  resourceBundles: [
    { id: 'bundle-1', title: 'Hindi-English Bilingual Slides', description: 'Downloadable teaching deck covering SDG basics.' },
  ],
};

export const teacherAchievements = [
  { id: 'mod-1', moderator: 'Neha Verma', approvals: 148, qualityScore: '4.9/5', badges: ['Platinum Mentor', 'Bias Buster'], streak: '21 days' },
  { id: 'mod-2', moderator: 'Arjun Patel', approvals: 96, qualityScore: '4.7/5', badges: ['Gold Verifier'], streak: '12 days' },
];

export const analyticsSummary = {
  impactTrend: [
    { month: 'Jul', ecoPoints: 4200 },
    { month: 'Aug', ecoPoints: 5100 },
    { month: 'Sep', ecoPoints: 5900 },
    { month: 'Oct', ecoPoints: 6400 },
  ],
  participationByCampus: [
    { campus: 'North Wing', participants: 180, completionRate: 76 },
    { campus: 'South Wing', participants: 210, completionRate: 82 },
    { campus: 'Junior Block', participants: 140, completionRate: 69 },
  ],
  verificationInsights: { pending: 12, averageTurnaroundHours: 18, escalationRisk: 2 },
};