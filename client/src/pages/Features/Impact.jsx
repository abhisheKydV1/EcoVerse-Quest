import { Leaf, Target, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impact = () => {
  const missionTracks = [
    {
      title: 'Water Stewardship',
      description: 'River clean-ups, rain-harvesting audits, and grey-water recycling pilots.',
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
    },
    {
      title: 'Clean Energy',
      description: 'Conduct energy footprint audits and build solar prototypes for your campus.',
      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
    },
    {
      title: 'Circular Economy',
      description: 'Run zero-waste carnivals, swap events, and compost accelerators.',
      icon: <Users className="h-5 w-5 text-emerald-600" />,
    },
  ];

  const impactTips = [
    'Document evidence with geo-tagged photos and short reflections.',
    'Track before/after stats to tell a measurable impact story.',
    'Invite mentors or community partners to authenticate outcomes.',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
            <Target className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Real-World Impact</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Launch mission arcs that drive tangible change in your school and community—each aligned with UN SDGs and NEP priorities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/mission-ideas" className="btn-primary">Browse Mission Ideas</Link>
            <Link to="/community" className="btn-secondary">Share Success Stories</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {missionTracks.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Design with Impact</h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Mix investigation, implementation, and storytelling to capture the full journey of your project.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-emerald-700 mb-2">Top tips</h3>
            <ul className="space-y-2 text-sm text-emerald-800">
              {impactTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Submit your story</h2>
              <p className="text-white/80 mt-2 max-w-xl">
                Turn your mission into a spotlight feature—publish highlight reels, download impact reports, and inspire other eco-warriors.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/impact-tracker" className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg shadow">
                Open Impact Tracker
              </Link>
              <Link to="/share-impact" className="bg-white/15 border border-white/40 px-6 py-3 rounded-lg font-semibold">
                Share a Story
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;