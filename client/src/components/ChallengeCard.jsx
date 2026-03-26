import { Clock, Award, TrendingUp } from 'lucide-react';

const ChallengeCard = ({ challenge, onAccept }) => {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800',
  };

  const categoryColors = {
    Waste: 'bg-purple-100 text-purple-800',
    Energy: 'bg-blue-100 text-blue-800',
    Water: 'bg-cyan-100 text-cyan-800',
    Biodiversity: 'bg-green-100 text-green-800',
    Community: 'bg-amber-100 text-amber-800',
  };

  const isLocked = challenge.status === 'pending' || challenge.status === 'upcoming';
  const isCompleted = challenge.status === 'completed';
  const buttonLabel = isCompleted
    ? 'Completed ✓'
    : isLocked
      ? 'Coming Soon'
      : challenge.status === 'in-progress'
        ? 'Resume Challenge'
        : 'Accept Challenge';

  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      {/* Mission Context */}
      {challenge.missionArcTitle && (
        <div className="flex items-center justify-between mb-3 text-xs font-semibold uppercase">
          <span className="text-primary-600">{challenge.missionArcTitle}</span>
          <span className="text-gray-500">{challenge.missionChapterLabel}</span>
        </div>
      )}

      {/* Category Badge */}
      <div className="flex justify-between items-start mb-3">
        <span className={`badge ${categoryColors[challenge.category] || 'bg-gray-100 text-gray-800'}`}>
          {challenge.category}
        </span>
        <span className={`badge ${difficultyColors[challenge.difficulty] || 'bg-gray-100 text-gray-800'}`}>
          {challenge.difficulty}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{challenge.description}</p>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center space-x-1 text-primary-600">
          <Award className="h-4 w-4" />
          <span className="font-semibold">{challenge.points} pts</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{challenge.deadline}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <TrendingUp className="h-4 w-4" />
          <span>{challenge.participants} joined</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => !isLocked && onAccept && onAccept(challenge)}
        className={`w-full btn-primary ${
          isLocked ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        disabled={isCompleted || isLocked}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default ChallengeCard;