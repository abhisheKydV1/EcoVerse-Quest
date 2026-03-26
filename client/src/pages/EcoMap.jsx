import { Map, MapPin, Recycle, Leaf, Droplet, Zap } from 'lucide-react';

const EcoMap = () => {
  const locations = [
    { id: 1, name: 'Green Recycling Center', type: 'Recycling', icon: '♻️', distance: '0.5 km', rating: 4.5 },
    { id: 2, name: 'Organic Farmers Market', type: 'Market', icon: '🥬', distance: '1.2 km', rating: 4.8 },
    { id: 3, name: 'Solar Panel Store', type: 'Energy', icon: '☀️', distance: '2.3 km', rating: 4.3 },
    { id: 4, name: 'Water Refill Station', type: 'Water', icon: '💧', distance: '0.8 km', rating: 4.6 },
    { id: 5, name: 'E-Waste Collection', type: 'E-Waste', icon: '📱', distance: '1.5 km', rating: 4.4 },
    { id: 6, name: 'Community Garden', type: 'Garden', icon: '🌻', distance: '1.0 km', rating: 4.9 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco Action Map</h1>
          <p className="text-lg text-gray-600">Find eco-friendly locations near you</p>
        </div>

        {/* Map Placeholder */}
        <div className="card mb-8 bg-gradient-to-br from-green-100 to-blue-100 h-96 flex items-center justify-center">
          <div className="text-center">
            <Map className="h-24 w-24 text-primary-600 mx-auto mb-4" />
            <p className="text-xl font-bold text-gray-900">Interactive Map</p>
            <p className="text-gray-600">Map integration coming soon</p>
          </div>
        </div>

        {/* Locations List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Eco Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="card hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{location.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{location.name}</h3>
                    <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-2">
                      {location.type}
                    </span>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{location.distance}</span>
                      </div>
                      <span className="text-yellow-600 font-semibold">★ {location.rating}</span>
                    </div>
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

export default EcoMap;