import { Heart, Handshake, Award, Users } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    { name: 'WWF India', type: 'Conservation', icon: '🐼' },
    { name: 'Greenpeace', type: 'Environmental Activism', icon: '🌿' },
    { name: 'The Energy and Resources Institute', type: 'Research', icon: '🔬' },
    { name: 'Centre for Science and Environment', type: 'Policy', icon: '📊' },
    { name: 'Wildlife Trust of India', type: 'Wildlife Protection', icon: '🐅' },
    { name: 'Swachh Bharat Mission', type: 'Government Initiative', icon: '🇮🇳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Partnerships</h1>
          <p className="text-lg text-gray-600">Collaborating for a sustainable future</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="flex items-center space-x-4">
            <Handshake className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Working Together</h2>
              <p>We partner with leading environmental organizations to bring you the best content and opportunities.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow text-center">
              <div className="text-7xl mb-4">{partner.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;