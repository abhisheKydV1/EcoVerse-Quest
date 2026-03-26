import { Award, Target, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcoPoints = () => {
  const earnStrategies = [
    {
      title: 'Daily Missions',
      description: 'Complete bite-sized sustainability actions every day to maintain streaks and earn bonus points.',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
    },
    {
      title: 'Community Collaboration',
      description: 'Partner with classmates on weekend missions and upload verified evidence for multiplier bonuses.',
      icon: <Target className="h-5 w-5 text-primary-600" />,
    },
    {
      title: 'Knowledge Quests',
      description: 'Ace interactive quizzes to double your points for the week and unlock advanced challenge tiers.',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
    },
  ];

  const milestones = [
    {
      level: 'Explorer',
      points: '0 – 1,000 pts',
      perks: ['Starter badge & welcome kit', 'Eco journal templates to log your journey'],
    },
    {
      level: 'Trailblazer',
      points: '1,001 – 5,000 pts',
      perks: ['Access to collaborative mission arcs', 'Invites to mentor-led workshops'],
    },
    {
      level: 'Planet Champion',
      points: '5,001+ pts',
      perks: ['Feature in hall-of-fame stories', 'Nominate projects for national showcases'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
            <Award className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Earn Eco Points</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eco Points are your impact currency. Track every challenge, quiz, and real-world action to climb the leaderboard
            and unlock exclusive opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/challenges" className="btn-primary">Browse Challenges</Link>
            <Link to="/leaderboard" className="btn-secondary">View Leaderboard</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {earnStrategies.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Level Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map(({ level, points, perks }) => (
              <div key={level} className="rounded-xl border border-gray-100 p-5 bg-gray-50/50">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{points}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{level}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <span className="text-primary-500">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-gradient-to-r from-primary-600 to-emerald-600 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Ready to boost your score?</h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Join a mission arc, invite friends, and submit verified impact evidence to stack your points faster than ever.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg shadow">
              Join EcoVerse Quest
            </Link>
            <Link to="/community" className="bg-white/15 border border-white/40 px-6 py-3 rounded-lg font-semibold">
              Explore Community
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcoPoints;