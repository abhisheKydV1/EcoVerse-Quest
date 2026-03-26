import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: 'Nov 15, 2024',
      time: '9:00 AM - 12:00 PM',
      location: 'Juhu Beach, Mumbai',
      participants: 45,
      type: 'Cleanup',
      icon: '🏖️'
    },
    {
      id: 2,
      title: 'Tree Plantation Workshop',
      date: 'Nov 20, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Central Park, Delhi',
      participants: 67,
      type: 'Workshop',
      icon: '🌳'
    },
    {
      id: 3,
      title: 'Climate Change Webinar',
      date: 'Nov 25, 2024',
      time: '4:00 PM - 6:00 PM',
      location: 'Online',
      participants: 234,
      type: 'Webinar',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Recycling Workshop for Schools',
      date: 'Dec 1, 2024',
      time: '11:00 AM - 1:00 PM',
      location: 'Green School, Bangalore',
      participants: 89,
      type: 'Workshop',
      icon: '♻️'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
          <p className="text-lg text-gray-600">Join environmental events and make a difference</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-6xl">{event.icon}</div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary">Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;