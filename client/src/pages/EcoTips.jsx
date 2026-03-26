import { Lightbulb, Bookmark, Share2, ThumbsUp } from 'lucide-react';

const EcoTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Use Reusable Water Bottles',
      description: 'Carry a reusable water bottle instead of buying plastic bottles. This can save up to 156 plastic bottles per year!',
      category: 'Plastic Reduction',
      difficulty: 'Easy',
      impact: 'High',
      likes: 234,
      icon: '💧'
    },
    {
      id: 2,
      title: 'Switch to LED Bulbs',
      description: 'LED bulbs use 75% less energy and last 25 times longer than traditional incandescent bulbs.',
      category: 'Energy Saving',
      difficulty: 'Easy',
      impact: 'Medium',
      likes: 189,
      icon: '💡'
    },
    {
      id: 3,
      title: 'Start Composting',
      description: 'Turn your kitchen waste into nutrient-rich compost for plants. Reduces landfill waste by up to 30%.',
      category: 'Waste Management',
      difficulty: 'Medium',
      impact: 'High',
      likes: 312,
      icon: '🌱'
    },
    {
      id: 4,
      title: 'Use Public Transport',
      description: 'Taking public transport instead of driving alone can reduce your carbon footprint by 2.5 tons per year.',
      category: 'Transportation',
      difficulty: 'Easy',
      impact: 'High',
      likes: 267,
      icon: '🚌'
    },
    {
      id: 5,
      title: 'Meatless Mondays',
      description: 'Going meat-free one day a week can save 1,600 gallons of water and reduce CO2 emissions.',
      category: 'Food',
      difficulty: 'Medium',
      impact: 'High',
      likes: 198,
      icon: '🥗'
    },
    {
      id: 6,
      title: 'Unplug Electronics',
      description: 'Unplug devices when not in use. Phantom power can account for 10% of your electricity bill.',
      category: 'Energy Saving',
      difficulty: 'Easy',
      impact: 'Medium',
      likes: 145,
      icon: '🔌'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily Eco Tips</h1>
          <p className="text-lg text-gray-600">Simple actions for a sustainable lifestyle</p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.id} className="card hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{tip.icon}</div>
              
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  {tip.category}
                </span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  tip.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {tip.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tip.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">{tip.likes}</span>
                  </button>
                  <button className="text-gray-600 hover:text-primary-600">
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-primary-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded ${
                  tip.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {tip.impact} Impact
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoTips;