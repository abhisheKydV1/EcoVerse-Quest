import { Calculator, Car, Home, Utensils, Plane, TrendingDown } from 'lucide-react';
import { useState } from 'react';

const CarbonCalculator = () => {
  const [transport, setTransport] = useState(50);
  const [energy, setEnergy] = useState(100);
  const [food, setFood] = useState(30);
  const [flights, setFlights] = useState(2);

  const calculateTotal = () => {
    return (transport * 0.2) + (energy * 0.5) + (food * 0.3) + (flights * 200);
  };

  const total = calculateTotal();
  const avgIndian = 1800;
  const comparison = ((total / avgIndian) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Carbon Footprint Calculator</h1>
          <p className="text-lg text-gray-600">Calculate your annual carbon emissions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Transportation */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Transportation</h3>
                  <p className="text-sm text-gray-600">Weekly km traveled by car/bike</p>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={transport}
                onChange={(e) => setTransport(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">0 km</span>
                <span className="text-lg font-bold text-primary-600">{transport} km</span>
                <span className="text-sm text-gray-600">500 km</span>
              </div>
            </div>

            {/* Home Energy */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Home className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Home Energy</h3>
                  <p className="text-sm text-gray-600">Monthly electricity usage (kWh)</p>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">0 kWh</span>
                <span className="text-lg font-bold text-primary-600">{energy} kWh</span>
                <span className="text-sm text-gray-600">500 kWh</span>
              </div>
            </div>

            {/* Food */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Utensils className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Food</h3>
                  <p className="text-sm text-gray-600">Weekly meat consumption (meals)</p>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="21"
                value={food}
                onChange={(e) => setFood(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">0 meals</span>
                <span className="text-lg font-bold text-primary-600">{food} meals</span>
                <span className="text-sm text-gray-600">21 meals</span>
              </div>
            </div>

            {/* Flights */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Plane className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Air Travel</h3>
                  <p className="text-sm text-gray-600">Annual flights taken</p>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={flights}
                onChange={(e) => setFlights(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">0 flights</span>
                <span className="text-lg font-bold text-primary-600">{flights} flights</span>
                <span className="text-sm text-gray-600">20 flights</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-primary-500 to-green-500 text-white">
              <div className="text-center">
                <Calculator className="h-12 w-12 mx-auto mb-4" />
                <p className="text-sm opacity-90 mb-2">Your Annual Carbon Footprint</p>
                <p className="text-5xl font-bold mb-2">{total.toFixed(0)}</p>
                <p className="text-lg">kg CO₂/year</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Comparison</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">vs Average Indian</span>
                    <span className="font-bold text-gray-900">{comparison}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        comparison < 100 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(comparison, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {comparison < 100 ? (
                    <span className="text-green-600 font-semibold">Great job! You're below average.</span>
                  ) : (
                    <span className="text-red-600 font-semibold">You're above average. Let's reduce it!</span>
                  )}
                </p>
              </div>
            </div>

            <div className="card bg-green-50">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingDown className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Quick Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use public transport or carpool</li>
                <li>• Switch to LED bulbs</li>
                <li>• Reduce meat consumption</li>
                <li>• Choose train over plane when possible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;