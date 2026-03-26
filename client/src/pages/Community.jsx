import { MessageCircle, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react';

const Community = () => {
  const topics = [
    { id: 1, title: 'Best ways to reduce plastic at home?', author: 'Priya S.', replies: 23, likes: 45, category: 'Tips', time: '2h ago' },
    { id: 2, title: 'Starting a school composting program', author: 'Rahul K.', replies: 15, likes: 67, category: 'Projects', time: '5h ago' },
    { id: 3, title: 'Solar panel installation experiences?', author: 'Ananya M.', replies: 31, likes: 89, category: 'Energy', time: '1d ago' },
    { id: 4, title: 'Organizing a beach cleanup event', author: 'Arjun P.', replies: 12, likes: 34, category: 'Events', time: '2d ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Community Forum</h1>
          <p className="text-lg text-gray-600">Connect with fellow eco-warriors</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Topics</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Posts</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <ThumbsUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Likes Received</p>
                <p className="text-2xl font-bold text-gray-900">256</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Reputation</p>
                <p className="text-2xl font-bold text-gray-900">1,450</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Topic Button */}
        <div className="mb-6">
          <button className="btn-primary">+ Start New Discussion</button>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      {topic.category}
                    </span>
                    <span className="text-sm text-gray-500">{topic.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600">by {topic.author}</p>
                </div>
                <div className="flex flex-col items-end space-y-2 ml-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm font-semibold">{topic.replies}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm font-semibold">{topic.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;