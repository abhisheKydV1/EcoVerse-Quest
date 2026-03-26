const habitatStages = [
  {
    id: 1,
    min: 0,
    max: 500,
    name: 'Seedling Sanctuary',
    description: 'Your eco-journey has begun. Tender sprouts are emerging as you collect your first eco-points.',
    icon: '🌱',
  },
  {
    id: 2,
    min: 500,
    max: 1200,
    name: 'Blooming Meadow',
    description: 'Pollinators dance across a meadow of wildflowers thanks to your consistent actions.',
    icon: '🌼',
  },
  {
    id: 3,
    min: 1200,
    max: 2000,
    name: 'Thriving Grove',
    description: 'Trees stretch toward the sky and wildlife finds refuge in your flourishing grove.',
    icon: '🌳',
  },
  {
    id: 4,
    min: 2000,
    max: 3000,
    name: 'Enchanted Forest',
    description: 'A lush forest ecosystem hums with life. Rivers run clear and the canopy is vibrant.',
    icon: '🌲',
  },
  {
    id: 5,
    min: 3000,
    max: Infinity,
    name: 'Planet Protector Haven',
    description: 'You steward a resilient ecosystem where every species thrives—a beacon for EcoVerse Quest!',
    icon: '🌍',
  },
];

const getStageDetails = (points) => {
  const stage = habitatStages.find((item) => points < item.max) || habitatStages[habitatStages.length - 1];
  return stage;
};

const StageMilestone = ({ stage, isCurrent, isCompleted }) => {
  const badgeText = isCurrent ? 'Current stage' : isCompleted ? 'Completed' : `${stage.min}+ pts`;
  const badgeStyles = isCurrent
    ? 'bg-primary-100 text-primary-700'
    : isCompleted
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-gray-100 text-gray-600';

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
        isCurrent
          ? 'border-primary-500 bg-primary-50/60 shadow-sm'
          : isCompleted
            ? 'border-emerald-200 bg-emerald-50'
            : 'border-gray-200 bg-white'
      }`}
    >
      <div className="text-3xl">{stage.icon}</div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{stage.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles}`}>{badgeText}</span>
        </div>
      </div>
    </div>
  );
};

const EcoHabitat = ({ ecoPoints = 0, className = '' }) => {
  const currentStage = getStageDetails(ecoPoints);
  const currentIndex = habitatStages.findIndex((stage) => stage.id === currentStage.id);
  const nextStage = habitatStages[currentIndex + 1];
  const stageMin = currentStage.min;
  const stageMax = Number.isFinite(currentStage.max) ? currentStage.max : stageMin + 500;
  const stageProgress = Number.isFinite(currentStage.max)
    ? Math.min(100, Math.round(((ecoPoints - stageMin) / (stageMax - stageMin)) * 100))
    : 100;
  const pointsToNext = nextStage ? Math.max(0, nextStage.min - ecoPoints) : 0;

  return (
    <section className={`card ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Virtual Eco-Habitat</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{currentStage.name}</h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">{currentStage.description}</p>
          </div>
          <div className="flex items-center gap-4 bg-primary-50 rounded-xl px-4 py-3 border border-primary-100">
            <div className="text-3xl">{currentStage.icon}</div>
            <div>
              <p className="text-xs font-semibold text-primary-600 uppercase">Eco Points</p>
              <p className="text-2xl font-bold text-gray-900">{ecoPoints.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>{stageMin.toLocaleString()} pts</span>
            <span>{Number.isFinite(currentStage.max) ? stageMax.toLocaleString() : '∞'} pts</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 via-green-500 to-emerald-500"
              style={{ width: `${stageProgress}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <span>Progress in current habitat</span>
            <span>{stageProgress}%</span>
          </div>
        </div>

        {nextStage ? (
          <div className="p-4 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/70 text-emerald-700">
            <p className="font-semibold">
              {pointsToNext.toLocaleString()} more eco-points to unlock <span className="underline">{nextStage.name}</span> {nextStage.icon}
            </p>
            <p className="text-sm mt-1 text-emerald-800/80">Keep completing missions and challenges to evolve your habitat!</p>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-yellow-300 bg-yellow-50 text-yellow-700">
            <p className="font-semibold">You have reached the pinnacle habitat stage—Planet Protector Haven!</p>
            <p className="text-sm mt-1 text-yellow-800/80">Maintain streaks and mentor others to keep your ecosystem vibrant.</p>
          </div>
        )}

        <div className="space-y-3">
          {habitatStages.map((stage, index) => (
            <StageMilestone
              key={stage.id}
              stage={stage}
              isCurrent={index === currentIndex}
              isCompleted={index < currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoHabitat;
