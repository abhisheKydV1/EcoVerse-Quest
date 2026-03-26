import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Leaf, User, LogOut, Search, Bell, Home, Target, BookOpen, 
  Trophy, Award, Users, Info, Settings, HelpCircle, Mail, Phone,
  Facebook, Twitter, Instagram, Linkedin, ChevronDown, Globe, 
  GraduationCap, Calendar, BarChart3, Lightbulb, MessageCircle, Video, FileText, Recycle,
  Gamepad2, Calculator, Sprout, Camera, Share2, Gift, Map, Newspaper, Zap, 
  Briefcase, Heart, Shield, TrendingUp, Users2, Sparkles, Star, Clock
} from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ isAuthenticated = false, userRole = 'student', userName = 'Alex Johnson' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const notifications = [
    { id: 1, title: 'New Challenge Available', message: 'Zero Waste Week challenge is now live!', time: '5 min ago', unread: true },
    { id: 2, title: 'Achievement Unlocked', message: 'You earned the Tree Planter badge!', time: '1 hour ago', unread: true },
    { id: 3, title: 'Leaderboard Update', message: 'You moved up to rank #3!', time: '2 hours ago', unread: false },
  ];

  const mainLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/dashboard', label: 'My Dashboard', icon: <Target className="h-5 w-5" />, auth: true },
    { path: '/challenges', label: 'Eco Challenges', icon: <Target className="h-5 w-5" />, auth: true },
    { path: '/quizzes', label: 'Interactive Quizzes', icon: <BookOpen className="h-5 w-5" />, auth: true },
    { path: '/learning-modules', label: 'Learning Modules', icon: <GraduationCap className="h-5 w-5" />, auth: true },
    { path: '/leaderboard', label: 'Global Leaderboard', icon: <Trophy className="h-5 w-5" />, auth: true },
    { path: '/achievements', label: 'Achievements & Badges', icon: <Award className="h-5 w-5" />, auth: true },
    { path: '/impact-tracker', label: 'My Impact Tracker', icon: <BarChart3 className="h-5 w-5" />, auth: true },
    { path: '/eco-news', label: 'Eco News & Updates', icon: <Newspaper className="h-5 w-5" /> },
    { path: '/teacher-dashboard', label: 'Teacher Dashboard', icon: <Users className="h-5 w-5" />, auth: true, role: 'teacher' },
  ];

  const quickLinks = [
    { path: '/about', label: 'About EcoVerse Quest', icon: <Info className="h-5 w-5" /> },
    { path: '/daily-challenges', label: 'Daily Challenges', icon: <Zap className="h-5 w-5" />, auth: true },
    { path: '/eco-games', label: 'Eco Games Hub', icon: <Gamepad2 className="h-5 w-5" />, auth: true },
    { path: '/carbon-calculator', label: 'Carbon Calculator', icon: <Calculator className="h-5 w-5" /> },
    { path: '/virtual-garden', label: 'My Virtual Garden', icon: <Sprout className="h-5 w-5" />, auth: true },
    { path: '/photo-challenges', label: 'Photo Challenges', icon: <Camera className="h-5 w-5" />, auth: true },
    { path: '/eco-map', label: 'Eco Action Map', icon: <Map className="h-5 w-5" /> },
    { path: '/community', label: 'Community Forum', icon: <MessageCircle className="h-5 w-5" />, auth: true },
    { path: '/teams', label: 'Join Eco Teams', icon: <Users2 className="h-5 w-5" />, auth: true },
    { path: '/events', label: 'Upcoming Events', icon: <Calendar className="h-5 w-5" /> },
    { path: '/eco-tips', label: 'Daily Eco Tips', icon: <Lightbulb className="h-5 w-5" /> },
    { path: '/success-stories', label: 'Success Stories', icon: <Star className="h-5 w-5" /> },
    { path: '/rewards-store', label: 'Rewards Store', icon: <Gift className="h-5 w-5" />, auth: true },
    { path: '/share-impact', label: 'Share My Impact', icon: <Share2 className="h-5 w-5" />, auth: true },
    { path: '/streaks', label: 'My Streaks', icon: <TrendingUp className="h-5 w-5" />, auth: true },
    { path: '/profile', label: 'My Profile', icon: <User className="h-5 w-5" />, auth: true },
    { path: '/settings', label: 'Account Settings', icon: <Settings className="h-5 w-5" />, auth: true },
  ];

  const supportLinks = [
    { path: '/help', label: 'Help Center', icon: <HelpCircle className="h-5 w-5" /> },
    { path: '/contact', label: 'Contact Us', icon: <Mail className="h-5 w-5" /> },
  ];

  const resourceLinks = [
    { path: '/sdg-goals', label: 'UN SDG Goals', icon: <Globe className="h-5 w-5" /> },
    { path: '/nep-2020', label: 'NEP 2020 Compliance', icon: <FileText className="h-5 w-5" /> },
    { path: '/video-library', label: 'Video Library', icon: <Video className="h-5 w-5" /> },
    { path: '/eco-library', label: 'Eco Library', icon: <BookOpen className="h-5 w-5" /> },
    { path: '/recycling-guide', label: 'Recycling Guide', icon: <Recycle className="h-5 w-5" /> },
    { path: '/climate-data', label: 'Climate Data', icon: <BarChart3 className="h-5 w-5" /> },
    { path: '/green-careers', label: 'Green Careers', icon: <Briefcase className="h-5 w-5" /> },
    { path: '/partnerships', label: 'Partnerships', icon: <Heart className="h-5 w-5" /> },
    { path: '/privacy', label: 'Privacy & Safety', icon: <Shield className="h-5 w-5" /> },
  ];

  const filteredMainLinks = mainLinks.filter(link => {
    if (!link.auth) return true;
    if (!isAuthenticated) return false;
    if (link.role && link.role !== userRole) return false;
    return true;
  });

  const filteredQuickLinks = quickLinks.filter(link => !link.auth || isAuthenticated);

  return (
    <>
      {/* Top Header Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Menu Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-primary-700 hidden sm:block">EcoVerse Quest</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search challenges, quizzes, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              {isAuthenticated && (
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
                  >
                    <Bell className="h-6 w-6 text-gray-700" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notif) => (
                          <div key={notif.id} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-blue-50' : ''}`}>
                            <p className="font-semibold text-sm text-gray-900">{notif.title}</p>
                            <p className="text-sm text-gray-600">{notif.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200 text-center">
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">View All</button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* User Profile */}
              {isAuthenticated ? (
                <Link to="/profile" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {userName.charAt(0)}
                  </div>
                  <span className="hidden lg:block text-sm font-medium text-gray-700">{userName}</span>
                </Link>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary text-sm">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 top-16 z-30 transition-opacity duration-300">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
            role="presentation"
          ></div>

          {/* Sidebar Content */}
          <aside className="absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            {/* Sidebar Header */}
            <div className="p-6 bg-gradient-to-r from-primary-600 to-green-600 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <Leaf className="h-7 w-7 text-primary-600" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white block">EcoVerse Quest</span>
                  <span className="text-xs text-primary-100">Environmental Education</span>
                </div>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg hover:bg-white/20 transition-colors">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="p-4">
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Menu</h3>
                <div className="space-y-1">
                  {filteredMainLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-primary-500 to-green-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700 hover:translate-x-1'
                      }`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</h3>
                <div className="space-y-1">
                  {filteredQuickLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:translate-x-1'
                      }`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
                <div className="space-y-1">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700 hover:translate-x-1'
                      }`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Support</h3>
                <div className="space-y-1">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:translate-x-1'
                      }`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Connect With Us</h3>
                <div className="grid grid-cols-4 gap-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* User Stats (if authenticated) */}
              {isAuthenticated && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {userName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{userName}</p>
                        <p className="text-xs text-gray-600">Level 8 Eco Warrior</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-lg font-bold text-primary-600">2450</p>
                        <p className="text-xs text-gray-600">Points</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-lg font-bold text-yellow-600">12</p>
                        <p className="text-xs text-gray-600">Badges</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-lg font-bold text-green-600">#3</p>
                        <p className="text-xs text-gray-600">Rank</p>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-200 w-full">
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              )}
            </nav>
          </aside>
        </div>
      )}

    </>
  );
};

export default Navbar;