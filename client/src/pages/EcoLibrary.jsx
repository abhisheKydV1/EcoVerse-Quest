import { BookOpen, Download, Star } from 'lucide-react';

const EcoLibrary = () => {
  const books = [
    {
      id: 1,
      title: 'Introduction to Climate Science',
      author: 'Dr. Sarah Green',
      pages: 245,
      rating: 4.8,
      category: 'Climate',
      icon: '📘'
    },
    {
      id: 2,
      title: 'Sustainable Living Guide',
      author: 'John Eco',
      pages: 180,
      rating: 4.6,
      category: 'Lifestyle',
      icon: '📗'
    },
    {
      id: 3,
      title: 'Renewable Energy Handbook',
      author: 'Prof. Mike Power',
      pages: 320,
      rating: 4.9,
      category: 'Energy',
      icon: '📙'
    },
    {
      id: 4,
      title: 'Ocean Conservation',
      author: 'Dr. Blue Waters',
      pages: 210,
      rating: 4.7,
      category: 'Ocean',
      icon: '📕'
    },
    {
      id: 5,
      title: 'Zero Waste Living',
      author: 'Emma Green',
      pages: 156,
      rating: 4.5,
      category: 'Waste',
      icon: '📓'
    },
    {
      id: 6,
      title: 'Biodiversity Basics',
      author: 'Dr. Wild Life',
      pages: 280,
      rating: 4.8,
      category: 'Wildlife',
      icon: '📔'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco Library</h1>
          <p className="text-lg text-gray-600">Free environmental books and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-7xl">{book.icon}</div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                    {book.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>{book.pages} pages</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{book.rating}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoLibrary;