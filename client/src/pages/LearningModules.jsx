import { GraduationCap, Clock, BookOpen, CheckCircle, Lock } from 'lucide-react';

const LearningModules = () => {
  const modules = [
    {
      id: 1,
      title: 'Climate Change Basics',
      description: 'Understanding global warming, greenhouse gases, and climate science',
      duration: '45 min',
      lessons: 8,
      completed: 8,
      locked: false,
      difficulty: 'Beginner',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Renewable Energy',
      description: 'Solar, wind, hydro, and other clean energy sources',
      duration: '60 min',
      lessons: 10,
      completed: 5,
      locked: false,
      difficulty: 'Intermediate',
      color: 'green'
    },
    {
      id: 3,
      title: 'Waste Management & Recycling',
      description: 'Reduce, reuse, recycle, and circular economy principles',
      duration: '40 min',
      lessons: 7,
      completed: 0,
      locked: false,
      difficulty: 'Beginner',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Biodiversity & Conservation',
      description: 'Protecting ecosystems, endangered species, and habitats',
      duration: '50 min',
      lessons: 9,
      completed: 0,
      locked: true,
      difficulty: 'Intermediate',
      color: 'purple'
    },
    {
      id: 5,
      title: 'Sustainable Living',
      description: 'Daily practices for an eco-friendly lifestyle',
      duration: '35 min',
      lessons: 6,
      completed: 0,
      locked: true,
      difficulty: 'Beginner',
      color: 'teal'
    },
    {
      id: 6,
      title: 'Water Conservation',
      description: 'Managing water resources and reducing water waste',
      duration: '30 min',
      lessons: 5,
      completed: 0,
      locked: true,
      difficulty: 'Beginner',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      teal: 'from-teal-500 to-teal-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learning Modules</h1>
          <p className="text-lg text-gray-600">Master environmental concepts through structured courses</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Modules Completed</p>
                <p className="text-2xl font-bold text-gray-900">1 / 6</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Lessons</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Learning Time</p>
                <p className="text-2xl font-bold text-gray-900">4.5 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div key={module.id} className={`card hover:shadow-xl transition-shadow ${
              module.locked ? 'opacity-60' : ''
            }`}>
              <div className={`h-2 rounded-t-lg bg-gradient-to-r ${getColorClasses(module.color)} mb-4`}></div>
              
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {module.difficulty}
                </span>
                {module.locked && <Lock className="h-5 w-5 text-gray-400" />}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                </div>

                {!module.locked && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-gray-900">
                        {module.completed} / {module.lessons}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(module.color)}`}
                        style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <button
                disabled={module.locked}
                className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  module.locked
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : module.completed === module.lessons
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {module.locked ? 'Locked' : module.completed === module.lessons ? 'Review' : 'Continue'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningModules;