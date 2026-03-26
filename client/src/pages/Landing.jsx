import heroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import { Leaf, Award, Users, TrendingUp, BookOpen, Target, Zap } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Earn Eco Points',
      description: 'Complete challenges and quizzes to earn points and climb the leaderboard',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Real-World Impact',
      description: 'Take on eco-challenges that make a real difference in your community',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Interactive Learning',
      description: 'Learn about environment through engaging quizzes and lessons',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Compete & Collaborate',
      description: 'Join a community of eco-warriors and compete on leaderboards',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Track Progress',
      description: 'Monitor your environmental impact and personal growth',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Unlock Badges',
      description: 'Earn badges and certificates for your achievements',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Active Students' },
    { value: '500+', label: 'Schools' },
    { value: '50,000+', label: 'Challenges Completed' },
    { value: '1M+', label: 'Trees Saved' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
                <Leaf className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">
                  Aligned with SDGs & NEP 2020
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn. Play. <span className="text-primary-600">Save the Planet.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join the gamified environmental education platform that empowers students to make a
                real difference through interactive challenges, quizzes, and community action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn-primary text-lg px-8 py-3 text-center">
                  Join Now - It's Free!
                </Link>
                <Link to="/login" className="btn-secondary text-lg px-8 py-3 text-center">
                  Login
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-green-600 rounded-3xl p-3 sm:p-4 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl h-[320px] sm:h-[360px] lg:h-[420px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-primary-500/15 to-blue-500/10" />
                  <div className="relative h-full flex items-end">
                    <div className="sr-only">Students collaborating on EcoVerse Quest environmental challenges</div>
                    <div className="w-full mx-auto px-4 sm:px-6 pb-4">
                      <div className="bg-white/95 backdrop-blur-sm border border-primary-100 rounded-2xl shadow-lg px-4 sm:px-6 py-4">
                        <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                          <div className="bg-primary-600/10 p-2 sm:p-3 rounded-full">
                            <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">Start Your Eco Journey</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                              Explore challenges, unlock badges, and measure your real-world impact with EcoVerse Quest.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EcoVerse Quest?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform designed to make environmental education engaging and impactful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of students already learning and taking action for our planet
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;