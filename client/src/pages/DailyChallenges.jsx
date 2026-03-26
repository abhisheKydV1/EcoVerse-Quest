import { Zap, CheckCircle, Clock, Award, TrendingUp } from 'lucide-react';

const DailyChallenges = () => {
  const todaysChallenges = [
    { id: 1, title: 'Use Reusable Water Bottle', points: 50, completed: true, difficulty: 'Easy' },
    { id: 2, title: 'Turn Off Lights When Leaving Room', points: 30, completed: true, difficulty: 'Easy' },
    { id: 3, title: 'Take Stairs Instead of Elevator', points: 40, completed: false, difficulty: 'Easy' },
    { id: 4, title: 'Bring Your Own Shopping Bag', points: 60, completed: false, difficulty: 'Medium' },
    { id: 5, title: 'Eat a Plant-Based Meal', points: 80, completed: false, difficulty: 'Medium' },
  ];

  const weeklyChallenge = {
    title: 'Zero Waste Week',
    description: 'Produce no single-use plastic waste for 7 days',
    progress: 3,
    total: 7,
    reward: 500
  };

  const completedCount = todaysChallenges.filter(c => c.completed).length;
  const totalPoints = todaysChallenges.filter(c => c.completed).reduce((sum, c) => sum + c.points, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily Challenges</h1>
          <p className="text-lg text-gray-600">Complete daily tasks to earn eco-points and build sustainable habits</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Today</p>
                <p className="text-2xl font-bold text-gray-900">{completedCount} / {todaysChallenges.length}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Points Earned</p>
                <p className="text-2xl font-bold text-gray-900">{totalPoints}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">12 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Challenge */}
        <div className="card mb-8 bg-gradient-to-r from-primary-50 to-green-50 border-2 border-primary-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-6 w-6 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600 uppercase">Weekly Challenge</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{weeklyChallenge.title}</h2>
              <p className="text-gray-600">{weeklyChallenge.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Reward</p>
              <p className="text-3xl font-bold text-primary-600">{weeklyChallenge.reward}</p>
              <p className="text-sm text-gray-600">points</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-gray-900">{weeklyChallenge.progress} / {weeklyChallenge.total} days</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-green-500"
                style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Today's Challenges */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Today's Challenges</h2>
          <div className="space-y-4">
            {todaysChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`card hover:shadow-lg transition-all ${
                  challenge.completed ? 'bg-green-50 border-2 border-green-200' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`p-3 rounded-lg ${
                      challenge.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {challenge.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Clock className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold ${
                        challenge.completed ? 'text-green-900' : 'text-gray-900'
                      }`}>
                        {challenge.title}
                      </h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className={`text-sm px-2 py-1 rounded ${
                          challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {challenge.difficulty}
                        </span>
                        <span className="text-sm text-gray-600">+{challenge.points} points</span>
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={challenge.completed}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      challenge.completed
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {challenge.completed ? 'Completed' : 'Complete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;