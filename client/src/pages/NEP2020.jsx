import { FileText, BookOpen, Award, Target } from 'lucide-react';

const NEP2020 = () => {
  const features = [
    {
      title: 'Holistic Education',
      description: 'Focus on overall development including environmental awareness',
      icon: '🎓'
    },
    {
      title: 'Experiential Learning',
      description: 'Hands-on activities and real-world environmental projects',
      icon: '🔬'
    },
    {
      title: 'Skill Development',
      description: 'Building practical skills for sustainable living',
      icon: '🛠️'
    },
    {
      title: 'Value-Based Education',
      description: 'Instilling environmental ethics and responsibility',
      icon: '💚'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">NEP 2020 Compliance</h1>
          <p className="text-lg text-gray-600">Aligned with National Education Policy 2020</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="flex items-center space-x-4">
            <FileText className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">About NEP 2020</h2>
              <p>The National Education Policy 2020 emphasizes environmental education, experiential learning, and holistic development of students.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-6xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How EcoVerse Quest Aligns with NEP 2020</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Gamified learning promotes engagement and experiential education</span>
            </li>
            <li className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Challenges and projects develop practical environmental skills</span>
            </li>
            <li className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Community features encourage collaborative learning</span>
            </li>
            <li className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Impact tracking builds accountability and values</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NEP2020;