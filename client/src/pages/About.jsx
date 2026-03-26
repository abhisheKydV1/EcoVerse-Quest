import { Leaf, Target, Users, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  const sdgs = [
    { number: 4, title: 'Quality Education', color: 'bg-red-500' },
    { number: 12, title: 'Responsible Consumption', color: 'bg-yellow-600' },
    { number: 13, title: 'Climate Action', color: 'bg-green-700' },
    { number: 14, title: 'Life Below Water', color: 'bg-blue-600' },
    { number: 15, title: 'Life on Land', color: 'bg-green-600' },
  ];

  const team = [
    {
      name: 'Chetan Thakur',
      role: 'Project Lead',
      photo: '/team/chetan.jpg',
      initials: 'CT',
    },
    {
      name: 'Abhishek Yadav',
      role: 'Technical Lead',
      photo: '/team/abhishek.jpg',
      initials: 'AY',
    },
    {
      name: 'Lokesh',
      role: 'Content Director',
      photo: '/team/lokesh.jpg',
      initials: 'L',
    },
    {
      name: 'Anil Yadav',
      role: 'UX Designer',
      photo: '/team/anil.jpg',
      initials: 'AY',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">About EcoVerse Quest</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Empowering the next generation to become environmental stewards through gamified learning and real-world action
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Target className="h-12 w-12 text-primary-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To create an engaging, gamified platform that makes environmental education accessible, fun, and impactful for students across India. We believe that by empowering young minds with knowledge and practical skills, we can create a sustainable future for our planet.
              </p>
            </div>

            <div className="card">
              <Globe className="h-12 w-12 text-primary-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To build a community of millions of eco-conscious students who actively participate in environmental conservation, making India a global leader in youth-driven sustainability initiatives by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aligned with UN SDGs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform directly contributes to achieving the United Nations Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className={`${sdg.color} text-white rounded-xl p-6 text-center hover:scale-105 transition-transform`}>
                <div className="text-4xl font-bold mb-2">{sdg.number}</div>
                <p className="text-sm font-medium">{sdg.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEP 2020 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <div className="flex items-start space-x-4">
              <Award className="h-12 w-12 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">NEP 2020 Compliant</h2>
                <p className="text-gray-700 mb-4">
                  EcoVerse Quest is designed in alignment with the National Education Policy 2020, focusing on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Experiential and hands-on learning through real-world challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Integration of environmental education across curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Development of critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Promotion of values-based education and social responsibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">Passionate educators and technologists working together for a greener future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="mx-auto h-24 w-24 rounded-full object-cover border-4 border-primary-100 shadow mb-4"
                  />
                ) : (
                  <div className="mx-auto h-24 w-24 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-3xl font-semibold mb-4">
                    {member.initials || member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;