import { Newspaper, Clock, TrendingUp, Bookmark } from 'lucide-react';

const EcoNews = () => {
  const news = [
    {
      id: 1,
      title: 'Global Renewable Energy Capacity Reaches Record High',
      excerpt: 'Solar and wind power installations surpass fossil fuels for the first time in history...',
      category: 'Renewable Energy',
      date: '2 hours ago',
      image: '🌞',
      trending: true
    },
    {
      id: 2,
      title: 'New Study Shows Ocean Cleanup Progress',
      excerpt: 'Scientists report 50% reduction in plastic waste in targeted ocean areas...',
      category: 'Ocean Conservation',
      date: '5 hours ago',
      image: '🌊',
      trending: true
    },
    {
      id: 3,
      title: 'India Launches Massive Tree Planting Initiative',
      excerpt: 'Government announces plan to plant 1 billion trees by 2025...',
      category: 'Reforestation',
      date: '1 day ago',
      image: '🌳',
      trending: false
    },
    {
      id: 4,
      title: 'Electric Vehicle Sales Hit All-Time High',
      excerpt: 'EV adoption accelerates with new affordable models entering the market...',
      category: 'Clean Transport',
      date: '2 days ago',
      image: '⚡',
      trending: false
    },
    {
      id: 5,
      title: 'Schools Adopt Zero-Waste Policies Nationwide',
      excerpt: 'Educational institutions lead the way in sustainable practices...',
      category: 'Education',
      date: '3 days ago',
      image: '♻️',
      trending: false
    },
    {
      id: 6,
      title: 'Breakthrough in Carbon Capture Technology',
      excerpt: 'New method captures CO2 at 90% efficiency, scientists announce...',
      category: 'Climate Tech',
      date: '4 days ago',
      image: '🔬',
      trending: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco News & Updates</h1>
          <p className="text-lg text-gray-600">Stay informed about the latest environmental news</p>
        </div>

        {/* Trending Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.filter(item => item.trending).map((item) => (
              <div key={item.id} className="card hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="text-6xl">{item.image}</div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-2">
                      TRENDING
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded">{item.category}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.filter(item => !item.trending).map((item) => (
              <div key={item.id} className="card hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-6xl mb-4">{item.image}</div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    <Bookmark className="h-5 w-5" />
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

export default EcoNews;