import { TrendingUp, Flame, Calendar, Award } from 'lucide-react';

const Streaks = () => {
  const currentStreak = 12;
  const longestStreak = 28;
  const totalDays = 45;

  const weeklyActivity = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: true },
    { day: 'Thu', active: true },
    { day: 'Fri', active: false },
    { day: 'Sat', active: false },
    { day: 'Sun', active: false },
  ];

  const milestones = [
    { days: 7, reward: '100 points', achieved: true },
    { days: 14, reward: '250 points', achieved: false },
    { days: 30, reward: '500 points + Badge', achieved: false },
    { days: 60, reward: '1000 points + Special Badge', achieved: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Streaks</h1>
          <p className="text-lg text-gray-600">Track your daily activity and maintain your streak</p>
        </div>

        {/* Current Streak */}
        <div className="card mb-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
          <Flame className="h-16 w-16 mx-auto mb-4" />
          <p className="text-sm opacity-90 mb-2">Current Streak</p>
          <p className="text-6xl font-bold mb-2">{currentStreak}</p>
          <p className="text-xl">Days in a row! 🔥</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Longest Streak</p>
                <p className="text-2xl font-bold text-gray-900">{longestStreak} days</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Active Days</p>
                <p className="text-2xl font-bold text-gray-900">{totalDays} days</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">4 / 7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Activity</h2>
          <div className="grid grid-cols-7 gap-4">
            {weeklyActivity.map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-600 mb-2">{day.day}</p>
                <div className={`w-full h-20 rounded-lg flex items-center justify-center ${
                  day.active ? 'bg-green-500' : 'bg-gray-200'
                }`}>
                  {day.active && <Flame className="h-8 w-8 text-white" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Streak Milestones</h2>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                milestone.achieved ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      milestone.achieved ? 'bg-green-100' : 'bg-gray-200'
                    }`}>
                      <Award className={`h-6 w-6 ${
                        milestone.achieved ? 'text-green-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{milestone.days} Day Streak</p>
                      <p className="text-sm text-gray-600">{milestone.reward}</p>
                    </div>
                  </div>
                  {milestone.achieved && (
                    <span className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold">
                      Achieved! ✓
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaks;