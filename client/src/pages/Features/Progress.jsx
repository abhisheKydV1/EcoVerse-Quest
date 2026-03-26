import { TrendingUp, Calendar, Activity, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Progress = () => {
  const analytics = [
    {
      title: 'Personal Analytics',
      description: 'Weekly trends, streak trackers, and achievement timelines keep you focused on growth.',
      icon: <TrendingUp className="h-5 w-5 text-orange-600" />,
    },
    {
      title: 'Skill Growth Radar',
      description: 'Visualise leadership, empathy, innovation, and other core competencies over time.',
      icon: <Activity className="h-5 w-5 text-orange-600" />,
    },
    {
      title: 'Smart Alerts',
      description: 'Get reminders when streaks need attention or when new missions match your skills.',
      icon: <AlertCircle className="h-5 w-5 text-orange-600" />,
    },
  ];

  const actions = [
    {
      label: 'Update Impact Journal',
      description: 'Log reflections, upload evidence, and share mentor feedback.',
      link: '/impact-tracker',
    },
    {
      label: 'Plan Weekly Goals',
      description: 'Set target challenges, quizzes, and community engagements for the week ahead.',
      link: '/challenges',
    },
    {
      label: 'Celebrate Wins',
      description: 'Download certificates, showcase badges, and shout-out teammates.',
      link: '/achievements',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Track Progress</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See impact at a glance—Eco Points, SDG alignment, streaks, skill growth, and verified missions all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard" className="btn-primary">Back to Dashboard</Link>
            <Link to="/impact-tracker" className="btn-secondary">Open Impact Tracker</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {analytics.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Make every week count</h2>
          <div className="space-y-4">
            {actions.map(({ label, description, link }) => (
              <div key={label} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border border-orange-100 rounded-xl px-4 py-3">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{label}</p>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
                <Link to={link} className="btn-primary px-4 py-2">Go</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-gradient-to-r from-orange-500 to-rose-600 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Plan your next breakthrough</h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Schedule a mentor check-in, refresh your goals, and spotlight your progress with parents or school leaders.
            </p>
          </div>
          <Link to="/calendar" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Open Calendar
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Progress;