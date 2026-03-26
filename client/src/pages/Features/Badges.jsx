import { Trophy, Medal, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Badges = () => {
  const collections = [
    {
      title: 'Earth Guardian',
      description: 'Celebrate consistent eco-action across clean-up drives, tree plantations, and recycling missions.',
      icon: <Shield className="h-5 w-5 text-rose-600" />,
    },
    {
      title: 'Innovation Architect',
      description: 'Reward prototypes, hackathon wins, and design-thinking challenges that spark new ideas.',
      icon: <Star className="h-5 w-5 text-rose-600" />,
    },
    {
      title: 'Community Builder',
      description: 'Recognise event hosts, peer mentors, and student leaders who rally teams around impact.',
      icon: <Medal className="h-5 w-5 text-rose-600" />,
    },
  ];

  const verificationSteps = [
    'Upload evidence and reflections for each badge submission.',
    'Get mentor approvals and community endorsements.',
    'Download QR-verified certificates for your portfolio.',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100">
            <Trophy className="h-8 w-8 text-rose-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Unlock Badges</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Badges recognise grit, creativity, and leadership. Earn classroom shout-outs, digital certificates, and hall-of-fame status.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/achievements" className="btn-primary">View Achievements</Link>
            <Link to="/share-impact" className="btn-secondary">Share Your Story</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {collections.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verification journey</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {verificationSteps.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="text-rose-500">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card bg-gradient-to-r from-rose-500 to-purple-600 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Claim your next badge</h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Check badge criteria, submit evidence, and celebrate your achievements with the entire community.
            </p>
          </div>
          <Link to="/rewards" className="bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg shadow">
            Browse Rewards
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Badges;