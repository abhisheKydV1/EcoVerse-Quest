import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard, { DashboardFeatureDetail } from './pages/Dashboard';
import EcoPoints from './pages/Features/EcoPoints';
import Impact from './pages/Features/Impact';
import Learning from './pages/Features/Learning';
import Collaboration from './pages/Features/Collaboration';
import Progress from './pages/Features/Progress';
import Badges from './pages/Features/Badges';
import Challenges from './pages/Challenges';
import Quizzes from './pages/Quizzes';
import Leaderboard from './pages/Leaderboard';
import Achievements from './pages/Achievements';
import TeacherDashboard from './pages/TeacherDashboard';
import About from './pages/About';
import Profile from './pages/Profile';
import LearningModules from './pages/LearningModules';
import ImpactTracker from './pages/ImpactTracker';
import EcoNews from './pages/EcoNews';
import DailyChallenges from './pages/DailyChallenges';
import EcoGames from './pages/EcoGames';
import CarbonCalculator from './pages/CarbonCalculator';
import VirtualGarden from './pages/VirtualGarden';
import PhotoChallenges from './pages/PhotoChallenges';
import EcoMap from './pages/EcoMap';
import Community from './pages/Community';
import Teams from './pages/Teams';
import Events from './pages/Events';
import EcoTips from './pages/EcoTips';
import SuccessStories from './pages/SuccessStories';
import RewardsStore from './pages/RewardsStore';
import ShareImpact from './pages/Impact';
import Streaks from './pages/Streaks';
import SDGGoals from './pages/SDGGoals';
import NEP2020 from './pages/NEP2020';
import VideoLibrary from './pages/VideoLibrary';
import EcoLibrary from './pages/EcoLibrary';
import RecyclingGuide from './pages/RecyclingGuide';
import ClimateData from './pages/ClimateData';
import GreenCareers from './pages/GreenCareers';
import Partnerships from './pages/Partnerships';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Privacy from './pages/privacy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={false} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:featureSlug" element={<DashboardFeatureDetail />} />
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
