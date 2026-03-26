import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import LeaderboardTable from '../components/LeaderboardTable';

const Leaderboard = () => {
  const [filter, setFilter] = useState('global');
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 1, name: 'Sarah Chen', school: 'Green Valley High', class: 'Class 10', points: 3200, badges: ['Gold Star', 'Eco Warrior', 'Tree Planter'] },
    { id: 2, name: 'Mike Ross', school: 'Riverside Academy', class: 'Class 11', points: 2890, badges: ['Silver Star', 'Water Saver'] },
    { id: 3, name: 'Alex Johnson', school: 'Green Valley High', class: 'Class 10', points: 2450, badges: ['Bronze Star', 'Recycler'] },
    { id: 4, name: 'Emma Wilson', school: 'Sunshine School', class: 'Class 9', points: 2340, badges: ['Eco Warrior', 'Energy Saver'] },
    { id: 5, name: 'David Kim', school: 'Green Valley High', class: 'Class 10', points: 2100, badges: ['Tree Planter'] },
    { id: 6, name: 'Lisa Anderson', school: 'Riverside Academy', class: 'Class 11', points: 1980, badges: ['Water Saver', 'Recycler'] },
    { id: 7, name: 'James Brown', school: 'Sunshine School', class: 'Class 12', points: 1850, badges: ['Gold Star'] },
    { id: 8, name: 'Sophie Taylor', school: 'Green Valley High', class: 'Class 9', points: 1720, badges: ['Silver Star', 'Eco Warrior'] },
    { id: 9, name: 'Ryan Martinez', school: 'Riverside Academy', class: 'Class 10', points: 1650, badges: ['Bronze Star'] },
    { id: 10, name: 'Olivia Garcia', school: 'Sunshine School', class: 'Class 11', points: 1540, badges: ['Tree Planter', 'Energy Saver'] },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'global' || 
                         (filter === 'school' && student.school === 'Green Valley High') ||
                         (filter === 'class' && student.class === 'Class 10');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏆 Leaderboard</h1>
          <p className="text-gray-600">See how you rank against other eco-warriors!</p>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or school..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input-field">
                <option value="global">Global</option>
                <option value="school">My School</option>
                <option value="class">My Class</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="card">
          <LeaderboardTable students={filteredStudents} currentUserId={3} />
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No students found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;