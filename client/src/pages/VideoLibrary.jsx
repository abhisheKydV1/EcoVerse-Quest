import { Video, Play, Clock, Eye } from 'lucide-react';

const VideoLibrary = () => {
  const videos = [
    {
      id: 1,
      title: 'Climate Change Explained',
      duration: '12:34',
      views: '1.2M',
      category: 'Climate',
      thumbnail: '🌡️'
    },
    {
      id: 2,
      title: 'How to Start Composting at Home',
      duration: '8:45',
      views: '856K',
      category: 'Waste',
      thumbnail: '🌱'
    },
    {
      id: 3,
      title: 'Renewable Energy Sources',
      duration: '15:20',
      views: '2.1M',
      category: 'Energy',
      thumbnail: '⚡'
    },
    {
      id: 4,
      title: 'Ocean Plastic Pollution Crisis',
      duration: '10:15',
      views: '1.5M',
      category: 'Ocean',
      thumbnail: '🌊'
    },
    {
      id: 5,
      title: 'Sustainable Living Tips',
      duration: '6:30',
      views: '678K',
      category: 'Lifestyle',
      thumbnail: '♻️'
    },
    {
      id: 6,
      title: 'Biodiversity and Conservation',
      duration: '14:50',
      views: '934K',
      category: 'Wildlife',
      thumbnail: '🦁'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Video Library</h1>
          <p className="text-lg text-gray-600">Educational videos on environmental topics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="card hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative bg-gradient-to-br from-primary-100 to-green-100 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-8xl">{video.thumbnail}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all rounded-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                {video.category}
              </span>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">{video.title}</h3>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;