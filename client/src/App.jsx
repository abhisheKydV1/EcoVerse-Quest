import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load all page components for better performance
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const EcoPoints = lazy(() => import('./pages/Features/EcoPoints'));
const Impact = lazy(() => import('./pages/Features/Impact'));
const Learning = lazy(() => import('./pages/Features/Learning'));
const Collaboration = lazy(() => import('./pages/Features/Collaboration'));
const Progress = lazy(() => import('./pages/Features/Progress'));
const Badges = lazy(() => import('./pages/Features/Badges'));
const Challenges = lazy(() => import('./pages/Challenges'));
const Quizzes = lazy(() => import('./pages/Quizzes'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Achievements = lazy(() => import('./pages/Achievements'));
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'));
const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));
const LearningModules = lazy(() => import('./pages/LearningModules'));
const ImpactTracker = lazy(() => import('./pages/ImpactTracker'));
const EcoNews = lazy(() => import('./pages/EcoNews'));
const DailyChallenges = lazy(() => import('./pages/DailyChallenges'));
const EcoGames = lazy(() => import('./pages/EcoGames'));
const CarbonCalculator = lazy(() => import('./pages/CarbonCalculator'));
const VirtualGarden = lazy(() => import('./pages/VirtualGarden'));
const PhotoChallenges = lazy(() => import('./pages/PhotoChallenges'));
const EcoMap = lazy(() => import('./pages/EcoMap'));
const Community = lazy(() => import('./pages/Community'));
const Teams = lazy(() => import('./pages/Teams'));
const Events = lazy(() => import('./pages/Events'));
const EcoTips = lazy(() => import('./pages/EcoTips'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const RewardsStore = lazy(() => import('./pages/RewardsStore'));
const ShareImpact = lazy(() => import('./pages/Impact'));
const Streaks = lazy(() => import('./pages/Streaks'));
const SDGGoals = lazy(() => import('./pages/SDGGoals'));
const NEP2020 = lazy(() => import('./pages/NEP2020'));
const VideoLibrary = lazy(() => import('./pages/VideoLibrary'));
const EcoLibrary = lazy(() => import('./pages/EcoLibrary'));
const RecyclingGuide = lazy(() => import('./pages/RecyclingGuide'));
const ClimateData = lazy(() => import('./pages/ClimateData'));
const GreenCareers = lazy(() => import('./pages/GreenCareers'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Settings = lazy(() => import('./pages/Settings'));
const Help = lazy(() => import('./pages/Help'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/privacy'));

// Loading component for lazy loading
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={false} />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:featureSlug" element={<Dashboard />} />
              <Route path="/features/eco-points" element={<EcoPoints />} />
              <Route path="/features/impact" element={<Impact />} />
              <Route path="/features/learning" element={<Learning />} />
              <Route path="/features/collaboration" element={<Collaboration />} />
              <Route path="/features/progress" element={<Progress />} />
              <Route path="/features/badges" element={<Badges />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/learning-modules" element={<LearningModules />} />
              <Route path="/impact-tracker" element={<ImpactTracker />} />
              <Route path="/eco-news" element={<EcoNews />} />
              <Route path="/daily-challenges" element={<DailyChallenges />} />
              <Route path="/eco-games" element={<EcoGames />} />
              <Route path="/carbon-calculator" element={<CarbonCalculator />} />
              <Route path="/virtual-garden" element={<VirtualGarden />} />
              <Route path="/photo-challenges" element={<PhotoChallenges />} />
              <Route path="/eco-map" element={<EcoMap />} />
              <Route path="/community" element={<Community />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/events" element={<Events />} />
              <Route path="/eco-tips" element={<EcoTips />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/rewards" element={<RewardsStore />} />
              <Route path="/share-impact" element={<ShareImpact />} />
              <Route path="/streaks" element={<Streaks />} />
              <Route path="/sdg-goals" element={<SDGGoals />} />
              <Route path="/nep-2020" element={<NEP2020 />} />
              <Route path="/video-library" element={<VideoLibrary />} />
              <Route path="/eco-library" element={<EcoLibrary />} />
              <Route path="/recycling-guide" element={<RecyclingGuide />} />
              <Route path="/climate-data" element={<ClimateData />} />
              <Route path="/green-careers" element={<GreenCareers />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Coming Soon</h1>
                    <p className="text-gray-600">This page is under construction</p>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;