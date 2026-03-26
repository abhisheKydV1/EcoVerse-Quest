import { BarChart3, TrendingUp, Droplet, Zap, TreePine, Recycle, Award } from 'lucide-react';

const ImpactTracker = () => {
  const impactStats = [
    { label: 'CO₂ Saved', value: '245', unit: 'kg', icon: <BarChart3 className="h-6 w-6" />, color: 'green', trend: '+12%' },
    { label: 'Water Conserved', value: '1,250', unit: 'liters', icon: <Droplet className="h-6 w-6" />, color: 'blue', trend: '+8%' },
    { label: 'Energy Saved', value: '180', unit: 'kWh', icon: <Zap className="h-6 w-6" />, color: 'yellow', trend: '+15%' },
    { label: 'Trees Planted', value: '12', unit: 'trees', icon: <TreePine className="h-6 w-6" />, color: 'emerald', trend: '+3' },
    { label: 'Waste Recycled', value: '85', unit: 'kg', icon: <Recycle className="h-6 w-6" />, color: 'orange', trend: '+10%' },
    { label: 'Eco Points', value: '2,450', unit: 'points', icon: <Award className="h-6 w-6" />, color: 'purple', trend: '+250' },
  ];

  const monthlyData = [
    { month: 'Jan', co2: 15, water: 800, energy: 120 },
    { month: 'Feb', co2: 25, water: 950, energy: 140 },
    { month: 'Mar', co2: 35, water: 1100, energy: 160 },
    { month: 'Apr', co2: 50, water: 1250, energy: 180 },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600',
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Impact Tracker</h1>
          <p className="text-lg text-gray-600">Track your positive environmental impact over time</p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <span className="text-sm text-gray-500">{stat.unit}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">{stat.trend}</span>
                    <span className="text-xs text-gray-500">this month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Progress Chart */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Progress</h2>
          <div className="space-y-6">
            {monthlyData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{data.month}</span>
                  <span className="text-sm text-gray-500">CO₂: {data.co2}kg | Water: {data.water}L | Energy: {data.energy}kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                    style={{ width: `${(data.co2 / 50) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="p-3 bg-green-100 rounded-full">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Eco Warrior Level 8</p>
                <p className="text-sm text-gray-600">Reached by saving 200kg of CO₂</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="p-3 bg-blue-100 rounded-full">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Water Saver Badge</p>
                <p className="text-sm text-gray-600">Conserved 1,000 liters of water</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTracker;