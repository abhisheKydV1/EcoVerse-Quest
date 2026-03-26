import { Users, Trophy, Handshake, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collaboration = () => {
  const features = [
    {
      title: 'Mission Squads',
      description: 'Form pods with rotating roles—strategist, storyteller, analyst, and field scout.',
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      title: 'Friendly Face-offs',
      description: 'Challenge other teams, unlock collaboration boosts, and celebrate collective wins.',
      icon: <Trophy className="h-5 w-5 text-blue-600" />,
    },
    {
      title: 'Community Exchange',
      description: 'Share playbooks, run AMAs with climate experts, and level up together.',
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />,
    },
  ];

  const teamworkTips = [
    'Kick off with a team charter and weekly retros.',
    'Rotate leadership roles to highlight every strength.',
    'Log feedback from mentors and celebrate milestones often.',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
            <Handshake className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Compete & Collaborate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build momentum with teams, houses, and inter-school alliances. Strategise together, mentor juniors, and celebrate every win.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/teams" className="btn-primary">Find a Team</Link>
            <Link to="/community" className="btn-secondary">Join Discussions</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Collaboration Playbook</h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Keep motivation high with shared dashboards, shout-outs, and mentor notes that track every contribution.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-700 mb-2">Teamwork tips</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              {teamworkTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card bg-gradient-to-r from-blue-500 to-cyan-600 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Launch your squad</h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Start a club, host cross-school meetups, or mentor a junior cohort to spread the impact.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/events" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow">
              Host an Event
            </Link>
            <Link to="/leaderboard" className="bg-white/15 border border-white/40 px-6 py-3 rounded-lg font-semibold">
              View Rankings
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaboration;