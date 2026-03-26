import { Award, Trophy, Star, Zap, Target, Leaf } from 'lucide-react';

const Achievements = () => {
  const badges = [
    { id: 1, name: 'Eco Warrior', icon: '🌟', description: 'Complete 10 eco-challenges', earned: true, earnedDate: '2024-10-15', color: 'from-yellow-400 to-yellow-600' },
    { id: 2, name: 'Tree Planter', icon: '🌳', description: 'Plant 20 trees', earned: true, earnedDate: '2024-10-20', color: 'from-green-400 to-green-600' },
    { id: 3, name: 'Water Saver', icon: '💧', description: 'Save 500L of water', earned: true, earnedDate: '2024-10-25', color: 'from-blue-400 to-blue-600' },
    { id: 4, name: 'Quiz Master', icon: '📚', description: 'Score 100% on 5 quizzes', earned: false, progress: 60, color: 'from-purple-400 to-purple-600' },
    { id: 5, name: 'Energy Saver', icon: '⚡', description: 'Complete all energy challenges', earned: false, progress: 40, color: 'from-orange-400 to-orange-600' },
    { id: 6, name: 'Recycling Champion', icon: '♻️', description: 'Recycle 100kg of waste', earned: false, progress: 75, color: 'from-teal-400 to-teal-600' },
    { id: 7, name: 'Climate Hero', icon: '🌍', description: 'Reduce carbon footprint by 50%', earned: false, progress: 30, color: 'from-indigo-400 to-indigo-600' },
    { id: 8, name: 'Biodiversity Guardian', icon: '🦋', description: 'Complete all biodiversity challenges', earned: false, progress: 20, color: 'from-pink-400 to-pink-600' },
  ];

  const stats = {
    totalBadges: badges.length,
    earnedBadges: badges.filter(b => b.earned).length,
    treesPlanted: 23,
    co2Reduced: '145 kg',
    waterSaved: '520 L',
    wasteRecycled: '78 kg'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏅 Achievements & Rewards</h1>
          <p className="text-gray-600">Track your badges and environmental impact</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="card text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.earnedBadges}/{stats.totalBadges}</p>
            <p className="text-sm text-gray-600">Badges</p>
          </div>
          <div className="card text-center">
            <Leaf className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.treesPlanted}</p>
            <p className="text-sm text-gray-600">Trees Planted</p>
          </div>
          <div className="card text-center">
            <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stats.co2Reduced}</p>
            <p className="text-sm text-gray-600">CO₂ Reduced</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl mx-auto mb-2">💧</div>
            <p className="text-2xl font-bold text-gray-900">{stats.waterSaved}</p>
            <p className="text-sm text-gray-600">Water Saved</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl mx-auto mb-2">♻️</div>
            <p className="text-2xl font-bold text-gray-900">{stats.wasteRecycled}</p>
            <p className="text-sm text-gray-600">Waste Recycled</p>
          </div>
          <div className="card text-center">
            <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">Level 8</p>
            <p className="text-sm text-gray-600">Current Level</p>
          </div>
        </div>

        {/* Badge Gallery */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badge Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <div key={badge.id} className={`relative p-6 rounded-xl ${badge.earned ? 'bg-gradient-to-br ' + badge.color : 'bg-gray-100'} ${badge.earned ? 'text-white' : 'text-gray-400'} text-center transition-transform hover:scale-105`}>
                <div className="text-6xl mb-3">{badge.icon}</div>
                <h3 className="font-bold text-lg mb-2">{badge.name}</h3>
                <p className={`text-sm mb-3 ${badge.earned ? 'text-white/90' : 'text-gray-500'}`}>{badge.description}</p>
                
                {badge.earned ? (
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg py-2 px-3">
                    <p className="text-xs font-semibold">Earned on {badge.earnedDate}</p>
                  </div>
                ) : (
                  <div>
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${badge.progress}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-600">{badge.progress}% Complete</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-primary-200 rounded-lg p-6 bg-gradient-to-br from-primary-50 to-green-50">
              <Award className="h-12 w-12 text-primary-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Champion</h3>
              <p className="text-gray-600 mb-4">Awarded for outstanding contribution to environmental conservation</p>
              <button className="btn-primary">Download Certificate</button>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50 opacity-60">
              <Trophy className="h-12 w-12 text-gray-400 mb-3" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">Eco Master</h3>
              <p className="text-gray-500 mb-4">Complete all challenges to unlock</p>
              <button className="btn-secondary" disabled>Locked</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;