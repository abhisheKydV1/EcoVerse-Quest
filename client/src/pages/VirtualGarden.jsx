import { Sprout, Droplet, Sun, Award } from 'lucide-react';

const VirtualGarden = () => {
  const plants = [
    { id: 1, name: 'Oak Tree', level: 5, health: 100, watered: true, emoji: '🌳', stage: 'Mature' },
    { id: 2, name: 'Rose Bush', level: 3, health: 85, watered: true, emoji: '🌹', stage: 'Blooming' },
    { id: 3, name: 'Sunflower', level: 4, health: 90, watered: false, emoji: '🌻', stage: 'Growing' },
    { id: 4, name: 'Cactus', level: 2, health: 95, watered: true, emoji: '🌵', stage: 'Young' },
    { id: 5, name: 'Bamboo', level: 6, health: 100, watered: true, emoji: '🎋', stage: 'Mature' },
    { id: 6, name: 'Tulip', level: 1, health: 60, watered: false, emoji: '🌷', stage: 'Seedling' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Virtual Garden</h1>
          <p className="text-lg text-gray-600">Grow plants as you complete eco-challenges</p>
        </div>

        {/* Garden Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-white">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Plants</p>
                <p className="text-2xl font-bold text-gray-900">{plants.length}</p>
              </div>
            </div>
          </div>
          <div className="card bg-white">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Water Level</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
            </div>
          </div>
          <div className="card bg-white">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Sun className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sunlight</p>
                <p className="text-2xl font-bold text-gray-900">Perfect</p>
              </div>
            </div>
          </div>
          <div className="card bg-white">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Garden Level</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garden Grid */}
        <div className="card bg-white/80 backdrop-blur mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Garden</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="relative bg-gradient-to-b from-green-50 to-green-100 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-green-200"
              >
                {!plant.watered && (
                  <div className="absolute top-2 right-2">
                    <Droplet className="h-5 w-5 text-blue-500 animate-bounce" />
                  </div>
                )}
                <div className="text-center">
                  <div className="text-6xl mb-2">{plant.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{plant.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{plant.stage}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Lvl {plant.level}</span>
                    <span className={`font-semibold ${
                      plant.health > 80 ? 'text-green-600' : plant.health > 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {plant.health}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className={`h-1.5 rounded-full ${
                        plant.health > 80 ? 'bg-green-500' : plant.health > 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${plant.health}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add New Plant */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
              <div className="text-center">
                <div className="text-4xl mb-2">➕</div>
                <p className="text-sm font-medium text-gray-600">Plant New</p>
                <p className="text-xs text-gray-500">500 points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl transition-all">
            <div className="flex items-center justify-center space-x-3">
              <Droplet className="h-6 w-6" />
              <span className="font-bold">Water All Plants</span>
            </div>
          </button>
          <button className="card bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-xl transition-all">
            <div className="flex items-center justify-center space-x-3">
              <Sprout className="h-6 w-6" />
              <span className="font-bold">Add Fertilizer</span>
            </div>
          </button>
          <button className="card bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-xl transition-all">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-6 w-6" />
              <span className="font-bold">View Achievements</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualGarden;