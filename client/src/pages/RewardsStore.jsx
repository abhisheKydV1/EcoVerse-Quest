import { Gift, ShoppingCart, Award, Star } from 'lucide-react';

const RewardsStore = () => {
  const rewards = [
    {
      id: 1,
      name: 'Eco-Friendly Water Bottle',
      points: 500,
      category: 'Products',
      stock: 25,
      icon: '🍶',
      description: 'Stainless steel reusable water bottle'
    },
    {
      id: 2,
      name: 'Bamboo Toothbrush Set',
      points: 300,
      category: 'Products',
      stock: 50,
      icon: '🪥',
      description: 'Set of 4 biodegradable bamboo toothbrushes'
    },
    {
      id: 3,
      name: 'Plant a Tree Certificate',
      points: 1000,
      category: 'Impact',
      stock: 100,
      icon: '🌳',
      description: 'We plant a tree in your name'
    },
    {
      id: 4,
      name: 'Reusable Shopping Bags',
      points: 400,
      category: 'Products',
      stock: 30,
      icon: '🛍️',
      description: 'Set of 3 cotton shopping bags'
    },
    {
      id: 5,
      name: 'Solar Power Bank',
      points: 1500,
      category: 'Products',
      stock: 15,
      icon: '🔋',
      description: '10000mAh solar-powered charger'
    },
    {
      id: 6,
      name: 'Eco Workshop Ticket',
      points: 800,
      category: 'Experience',
      stock: 20,
      icon: '🎓',
      description: 'Free entry to environmental workshop'
    },
  ];

  const myPoints = 2450;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Rewards Store</h1>
          <p className="text-lg text-gray-600">Redeem your eco-points for amazing rewards</p>
        </div>

        {/* Points Balance */}
        <div className="card mb-8 bg-gradient-to-r from-primary-500 to-green-500 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/20 rounded-lg">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm opacity-90">Your Available Points</p>
                <p className="text-4xl font-bold">{myPoints.toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Total Earned</p>
              <p className="text-2xl font-bold">5,670</p>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div key={reward.id} className="card hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-7xl mb-3">{reward.icon}</div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                  {reward.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reward.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Stock</span>
                  <span className="text-sm font-semibold text-gray-900">{reward.stock} left</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cost</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-lg font-bold text-primary-600">{reward.points}</span>
                  </div>
                </div>

                <button
                  disabled={myPoints < reward.points}
                  className={`w-full py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                    myPoints >= reward.points
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{myPoints >= reward.points ? 'Redeem Now' : 'Not Enough Points'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsStore;