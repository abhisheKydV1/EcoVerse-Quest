import { Gamepad2, Users, Trophy, Play } from 'lucide-react';

const EcoGames = () => {
  const games = [
    {
      id: 1,
      title: 'Recycling Sorter',
      description: 'Sort waste into correct bins before time runs out!',
      players: '1,234',
      difficulty: 'Easy',
      points: 100,
      icon: '♻️',
      color: 'green'
    },
    {
      id: 2,
      title: 'Climate Quiz Master',
      description: 'Test your knowledge about climate change',
      players: '2,456',
      difficulty: 'Medium',
      points: 150,
      icon: '🌍',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Energy Saver Challenge',
      description: 'Manage a virtual home to minimize energy use',
      players: '987',
      difficulty: 'Medium',
      points: 200,
      icon: '⚡',
      color: 'yellow'
    },
    {
      id: 4,
      title: 'Ocean Cleanup',
      description: 'Remove plastic waste from the ocean',
      players: '1,567',
      difficulty: 'Easy',
      points: 120,
      icon: '🌊',
      color: 'cyan'
    },
    {
      id: 5,
      title: 'Forest Guardian',
      description: 'Protect the forest from threats and plant trees',
      players: '3,421',
      difficulty: 'Hard',
      points: 250,
      icon: '🌳',
      color: 'emerald'
    },
    {
      id: 6,
      title: 'Carbon Footprint Race',
      description: 'Compete to reduce your carbon footprint the fastest',
      players: '876',
      difficulty: 'Medium',
      points: 180,
      icon: '👣',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco Games Hub</h1>
          <p className="text-lg text-gray-600">Learn about the environment through fun, interactive games</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Games Played</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">High Score</p>
                <p className="text-2xl font-bold text-gray-900">8,450</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Global Rank</p>
                <p className="text-2xl font-bold text-gray-900">#127</p>
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="card hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="text-center mb-4">
                <div className="text-7xl mb-3">{game.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
                <p className="text-gray-600 text-sm">{game.description}</p>
              </div>

              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{game.players} players</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  game.difficulty === 'Medium' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {game.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary-600">+{game.points} points</span>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors group-hover:scale-105">
                  <Play className="h-4 w-4" />
                  <span>Play Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoGames;