import { Users2, Trophy, TrendingUp, UserPlus } from 'lucide-react';

const Teams = () => {
  const teams = [
    { id: 1, name: 'Green Warriors', members: 45, points: 12450, rank: 1, icon: '🌿' },
    { id: 2, name: 'Eco Champions', members: 38, points: 11200, rank: 2, icon: '🏆' },
    { id: 3, name: 'Planet Savers', members: 52, points: 10800, rank: 3, icon: '🌍' },
    { id: 4, name: 'Climate Heroes', members: 41, points: 9500, rank: 4, icon: '⚡' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco Teams</h1>
          <p className="text-lg text-gray-600">Join a team and compete together</p>
        </div>

        {/* My Team */}
        <div className="card mb-8 bg-gradient-to-r from-primary-50 to-green-50 border-2 border-primary-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl">🌿</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Green Warriors</h2>
                <p className="text-gray-600">Your Team • Rank #1</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary-600">12,450</p>
              <p className="text-sm text-gray-600">Team Points</p>
            </div>
          </div>
        </div>

        {/* All Teams */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">All Teams</h2>
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-5xl">{team.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                        {team.rank <= 3 && (
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            team.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                            team.rank === 2 ? 'bg-gray-100 text-gray-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            #{team.rank}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users2 className="h-4 w-4" />
                          <span>{team.members} members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Trophy className="h-4 w-4" />
                          <span>{team.points.toLocaleString()} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <UserPlus className="h-4 w-4" />
                    <span>Join Team</span>
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

export default Teams;