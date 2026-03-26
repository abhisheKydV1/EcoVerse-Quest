import { Briefcase, TrendingUp, DollarSign, GraduationCap } from 'lucide-react';

const GreenCareers = () => {
  const careers = [
    {
      title: 'Environmental Scientist',
      salary: '₹6-12 LPA',
      growth: 'High',
      education: 'B.Sc/M.Sc Environmental Science',
      icon: '🔬'
    },
    {
      title: 'Renewable Energy Engineer',
      salary: '₹8-15 LPA',
      growth: 'Very High',
      education: 'B.Tech/M.Tech in Energy Engineering',
      icon: '⚡'
    },
    {
      title: 'Sustainability Consultant',
      salary: '₹7-14 LPA',
      growth: 'High',
      education: 'MBA/Masters in Sustainability',
      icon: '💼'
    },
    {
      title: 'Conservation Biologist',
      salary: '₹5-10 LPA',
      growth: 'Medium',
      education: 'M.Sc in Wildlife/Conservation Biology',
      icon: '🦁'
    },
    {
      title: 'Green Building Architect',
      salary: '₹6-13 LPA',
      growth: 'High',
      education: 'B.Arch with sustainability focus',
      icon: '🏢'
    },
    {
      title: 'Environmental Lawyer',
      salary: '₹8-18 LPA',
      growth: 'High',
      education: 'LLB with environmental law specialization',
      icon: '⚖️'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Green Careers</h1>
          <p className="text-lg text-gray-600">Explore environmental career opportunities</p>
        </div>

        <div className="card mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <div className="flex items-center space-x-4">
            <Briefcase className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Why Choose a Green Career?</h2>
              <p>Make a positive impact on the planet while building a rewarding career in the fastest-growing sector.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careers.map((career, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-6xl">{career.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{career.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700"><strong>Salary:</strong> {career.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700"><strong>Growth:</strong> {career.growth}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700"><strong>Education:</strong> {career.education}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenCareers;