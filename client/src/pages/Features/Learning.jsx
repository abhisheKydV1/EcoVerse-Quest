import { BookOpen, Lightbulb, Video, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learning = () => {
  const pathways = [
    {
      title: 'Modular Lesson Kits',
      description: 'Curriculum-aligned plans with classroom activities, assessments, and reflection prompts.',
      icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
    },
    {
      title: 'Immersive Media',
      description: 'Interactive videos, simulations, and infographics for flipped classrooms and self-paced learning.',
      icon: <Video className="h-5 w-5 text-indigo-600" />,
    },
    {
      title: 'Maker Challenges',
      description: 'Hands-on experiments and DIY missions that translate theory into real-world impact.',
      icon: <Lightbulb className="h-5 w-5 text-indigo-600" />,
    },
  ];

  const benefits = [
    'Adaptive quizzes give instant feedback and unlock new question banks.',
    'Teachers monitor progress with dashboards highlighting misconceptions.',
    'Students earn experience points for each completed learning sprint.',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100">
            <BookOpen className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Interactive Learning</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blend bite-sized lessons, quizzes, and collaborative maker challenges to master sustainability concepts with joy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/learning-modules" className="btn-primary">View Modules</Link>
            <Link to="/quizzes" className="btn-secondary">Take a Quiz</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pathways.map(({ title, description, icon }) => (
            <div key={title} className="card space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why students love it</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Launch a new learning sprint</h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Curate a playlist, invite a mentor for a live AMA, or co-create resources with your peers.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/teacher-dashboard" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow">
              Teacher Toolkit
            </Link>
            <Link to="/community" className="bg-white/15 border border-white/40 px-6 py-3 rounded-lg font-semibold">
              Host a Session
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Learning;