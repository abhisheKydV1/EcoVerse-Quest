import { Share2, Download, Facebook, Twitter, Instagram, Linkedin, Copy } from 'lucide-react';

const ShareImpact = () => {
  const stats = {
    co2Saved: 245,
    waterSaved: 1250,
    treesPlanted: 12,
    points: 2450,
    rank: 3,
    badges: 12
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Share My Impact</h1>
          <p className="text-lg text-gray-600">Show the world your environmental achievements</p>
        </div>

        {/* Impact Card Preview */}
        <div className="card mb-8 bg-gradient-to-br from-primary-500 via-green-500 to-emerald-500 text-white">
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-6">My Environmental Impact 🌍</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-4xl font-bold">{stats.co2Saved}kg</p>
                <p className="text-sm opacity-90">CO₂ Saved</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{stats.waterSaved}L</p>
                <p className="text-sm opacity-90">Water Saved</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{stats.treesPlanted}</p>
                <p className="text-sm opacity-90">Trees Planted</p>
              </div>
              <div>
                <p className="text-4xl font-bold">#{stats.rank}</p>
                <p className="text-sm opacity-90">Global Rank</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{stats.badges}</p>
                <p className="text-sm opacity-90">Badges Earned</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{stats.points}</p>
                <p className="text-sm opacity-90">Eco Points</p>
              </div>
            </div>
            <p className="text-sm opacity-75">Join me on EcoVerse Quest! 🌱</p>
          </div>
        </div>

        {/* Share Options */}
        <div className="card mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Share On</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <Facebook className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Facebook</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
              <Twitter className="h-8 w-8 text-sky-500" />
              <span className="text-sm font-medium text-gray-900">Twitter</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
              <Instagram className="h-8 w-8 text-pink-600" />
              <span className="text-sm font-medium text-gray-900">Instagram</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <Linkedin className="h-8 w-8 text-blue-700" />
              <span className="text-sm font-medium text-gray-900">LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Download & Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="card hover:shadow-lg transition-shadow bg-primary-600 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Download className="h-6 w-6" />
              <span className="font-bold">Download Image</span>
            </div>
          </button>
          <button className="card hover:shadow-lg transition-shadow bg-green-600 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Copy className="h-6 w-6" />
              <span className="font-bold">Copy Link</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareImpact;