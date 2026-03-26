import { Recycle, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const RecyclingGuide = () => {
  const categories = [
    {
      name: 'Paper & Cardboard',
      icon: '📄',
      recyclable: ['Newspapers', 'Magazines', 'Cardboard boxes', 'Office paper'],
      notRecyclable: ['Tissue paper', 'Wax-coated paper', 'Dirty pizza boxes']
    },
    {
      name: 'Plastic',
      icon: '🥤',
      recyclable: ['PET bottles', 'HDPE containers', 'Clean plastic bags'],
      notRecyclable: ['Styrofoam', 'Plastic wrap', 'Dirty containers']
    },
    {
      name: 'Glass',
      icon: '🍾',
      recyclable: ['Glass bottles', 'Glass jars', 'Glass containers'],
      notRecyclable: ['Mirrors', 'Light bulbs', 'Ceramics']
    },
    {
      name: 'Metal',
      icon: '🥫',
      recyclable: ['Aluminum cans', 'Steel cans', 'Clean foil'],
      notRecyclable: ['Aerosol cans', 'Paint cans', 'Batteries']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Recycling Guide</h1>
          <p className="text-lg text-gray-600">Learn what can and cannot be recycled</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <div className="flex items-center space-x-4">
            <Recycle className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Why Recycle?</h2>
              <p>Recycling reduces waste, conserves natural resources, saves energy, and reduces pollution.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-6xl">{category.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-green-900">Recyclable</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.recyclable.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <h3 className="font-bold text-red-900">Not Recyclable</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.notRecyclable.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-yellow-50 mt-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Tips</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Always clean containers before recycling</li>
                <li>• Remove caps and lids from bottles</li>
                <li>• Don't bag recyclables in plastic bags</li>
                <li>• Check local recycling guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingGuide;