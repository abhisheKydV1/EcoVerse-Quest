import { Globe, Target, CheckCircle } from 'lucide-react';

const SDGGoals = () => {
  const goals = [
    { id: 1, title: 'No Poverty', icon: '🤝', color: 'red' },
    { id: 2, title: 'Zero Hunger', icon: '🌾', color: 'yellow' },
    { id: 3, title: 'Good Health', icon: '❤️', color: 'green' },
    { id: 6, title: 'Clean Water', icon: '💧', color: 'blue' },
    { id: 7, title: 'Clean Energy', icon: '⚡', color: 'yellow' },
    { id: 11, title: 'Sustainable Cities', icon: '🏙️', color: 'orange' },
    { id: 12, title: 'Responsible Consumption', icon: '♻️', color: 'yellow' },
    { id: 13, title: 'Climate Action', icon: '🌍', color: 'green' },
    { id: 14, title: 'Life Below Water', icon: '🐠', color: 'blue' },
    { id: 15, title: 'Life on Land', icon: '🌳', color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">UN Sustainable Development Goals</h1>
          <p className="text-lg text-gray-600">Learn about the 17 global goals for a better future</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="flex items-center space-x-4">
            <Globe className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">What are SDGs?</h2>
              <p>The Sustainable Development Goals are a universal call to action to end poverty, protect the planet, and ensure prosperity for all by 2030.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div key={goal.id} className="card hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-7xl mb-4">{goal.icon}</div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary-600">#{goal.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                <button className="btn-primary w-full">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SDGGoals;