import { useState } from 'react';
import { User, Mail, School, Award, LogOut, Edit } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EcoHabitat from '../components/EcoHabitat';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@school.edu',
    school: 'Green Valley High School',
    class: 'Class 10',
    bio: 'Passionate about environmental conservation and sustainability.',
    ecoPoints: 2450,
    level: 8,
    badges: 12,
    joinedDate: 'January 2024'
  });

  const pointsHistory = [
    { month: 'Jan', points: 500 },
    { month: 'Feb', points: 800 },
    { month: 'Mar', points: 1200 },
    { month: 'Apr', points: 1600 },
    { month: 'May', points: 2000 },
    { month: 'Jun', points: 2450 }
  ];

  const completedChallenges = [
    { id: 1, title: 'Plant 5 Trees', date: '2024-06-15', points: 100 },
    { id: 2, title: 'Zero Waste Week', date: '2024-06-10', points: 250 },
    { id: 3, title: 'Water Conservation', date: '2024-06-05', points: 150 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                {userData.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{userData.name}</h2>
              <p className="text-gray-600 mb-4">Level {userData.level} Eco Warrior</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary-600">{userData.ecoPoints}</p>
                  <p className="text-xs text-gray-600">Points</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">{userData.badges}</p>
                  <p className="text-xs text-gray-600">Badges</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">{userData.level}</p>
                  <p className="text-xs text-gray-600">Level</p>
                </div>
              </div>

              <button onClick={() => setIsEditing(!isEditing)} className="btn-primary w-full mb-2">
                <Edit className="h-4 w-4 inline mr-2" />
                Edit Profile
              </button>
              <button className="btn-secondary w-full">
                <LogOut className="h-4 w-4 inline mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Details & Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Virtual Habitat */}
            <EcoHabitat ecoPoints={userData.ecoPoints} />

            {/* Info */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <School className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{userData.school} - {userData.class}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Member since {userData.joinedDate}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-700">{userData.bio}</p>
              </div>
            </div>

            {/* Points Chart */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco Points Progress</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={pointsHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="points" stroke="#16a34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Challenges</h3>
              <div className="space-y-3">
                {completedChallenges.map((challenge) => (
                  <div key={challenge.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{challenge.title}</p>
                      <p className="text-sm text-gray-600">{challenge.date}</p>
                    </div>
                    <span className="font-bold text-primary-600">+{challenge.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;