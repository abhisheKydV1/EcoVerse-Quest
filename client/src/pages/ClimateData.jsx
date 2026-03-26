import { BarChart3, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const ClimateData = () => {
  const stats = [
    { label: 'Global Temperature Rise', value: '+1.1°C', trend: 'up', icon: '🌡️' },
    { label: 'CO₂ Concentration', value: '419 ppm', trend: 'up', icon: '💨' },
    { label: 'Arctic Ice Decline', value: '-13%', trend: 'down', icon: '🧊' },
    { label: 'Sea Level Rise', value: '+3.4mm/year', trend: 'up', icon: '🌊' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Climate Data</h1>
          <p className="text-lg text-gray-600">Real-time climate statistics and trends</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Climate Emergency</h2>
              <p>Global temperatures continue to rise. Immediate action is needed to prevent catastrophic climate change.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <div className="flex items-center justify-center space-x-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-red-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm text-red-500 font-semibold">Critical</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Climate Indicators</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Global Temperature</h3>
              <p className="text-sm text-gray-600">Earth's average temperature has increased by 1.1°C since pre-industrial times.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Carbon Dioxide</h3>
              <p className="text-sm text-gray-600">Atmospheric CO₂ levels are at their highest in 800,000 years.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Sea Level</h3>
              <p className="text-sm text-gray-600">Global sea levels are rising at an accelerating rate of 3.4mm per year.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateData;