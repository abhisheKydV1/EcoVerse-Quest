import { Camera, Upload, Heart, MessageCircle, Award } from 'lucide-react';

const PhotoChallenges = () => {
  const challenges = [
    { id: 1, title: 'Zero Waste Lunch', active: true, submissions: 234, reward: 150 },
    { id: 2, title: 'Reusable Shopping Bags', active: true, submissions: 456, reward: 100 },
    { id: 3, title: 'Home Composting', active: false, submissions: 189, reward: 200 },
  ];

  const photos = [
    { id: 1, user: 'Priya S.', challenge: 'Zero Waste Lunch', image: '🥗', likes: 45, comments: 12 },
    { id: 2, user: 'Rahul K.', challenge: 'Reusable Bags', image: '🛍️', likes: 67, comments: 8 },
    { id: 3, user: 'Ananya M.', challenge: 'Home Composting', image: '🌱', likes: 89, comments: 15 },
    { id: 4, user: 'Arjun P.', challenge: 'Zero Waste Lunch', image: '🍱', likes: 34, comments: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Photo Challenges</h1>
          <p className="text-lg text-gray-600">Share your eco-actions and inspire others</p>
        </div>

        {/* Active Challenges */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className={`card ${challenge.active ? 'border-2 border-primary-500' : ''}`}>
                {challenge.active && (
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                    ACTIVE
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">{challenge.submissions} submissions</span>
                  <span className="text-sm font-semibold text-primary-600">+{challenge.reward} pts</span>
                </div>
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Photo</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Feed */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Feed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="card hover:shadow-xl transition-shadow">
                <div className="text-8xl text-center mb-4">{photo.image}</div>
                <div className="mb-3">
                  <p className="font-bold text-gray-900">{photo.user}</p>
                  <p className="text-sm text-gray-600">{photo.challenge}</p>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{photo.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{photo.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoChallenges;