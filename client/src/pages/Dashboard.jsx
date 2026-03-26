import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Award, Target, Trophy, TrendingUp, Zap, BookOpen, Compass, Sparkles, Flame, Loader2, AlertTriangle, Users } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import EcoHabitat from '../components/EcoHabitat';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const gradientPalette = [
  'from-sky-500 via-teal-500 to-emerald-500',
  'from-amber-500 via-orange-500 to-rose-500',
  'from-purple-500 via-indigo-500 to-blue-500',
  'from-primary-500 via-green-500 to-teal-600',
];

const FALLBACK_SUMMARY = {
  user: {
    name: 'Aarav',
    ecoPoints: 2450,
    nextLevelPoints: 3000,
    level: 8,
    badges: 12,
    challengesCompleted: 42,
  },
  streak: {
    current: 12,
    best: 21,
  },
  spotlight: {
    title: 'Community Compost Drive',
    description: 'Your team diverted 120kg of organic waste last week. Keep the momentum going!',
  },
};

const FALLBACK_MISSIONS = [
  {
    id: 'river-rescue',
    title: 'River Guardians',
    act: 'Act II · Restore the Flow',
    focus: 'Water stewardship & biodiversity',
    reward: 'Eco Hero badge + 400 pts',
    badge: '🌊',
    chapters: [
      { id: 'rr-1', title: 'Trash Audit', summary: 'Survey the riverbank and log pollution hotspots.', status: 'completed' },
      { id: 'rr-2', title: 'Community Clean-up', summary: 'Mobilise volunteers for a riverside clean-up.', status: 'active' },
      { id: 'rr-3', title: 'Awareness Drive', summary: 'Design posters to educate the neighbourhood.', status: 'upcoming' },
    ],
  },
  {
    id: 'solar-squad',
    title: 'Solar Squad',
    act: 'Act I · Spark the Future',
    focus: 'Clean energy adoption',
    reward: 'Innovation Architect badge + 350 pts',
    badge: '⚡',
    chapters: [
      { id: 'ss-1', title: 'Energy Audit', summary: 'Measure your campus energy footprint.', status: 'completed' },
      { id: 'ss-2', title: 'Prototype Build', summary: 'Design a mini solar tracker prototype.', status: 'upcoming' },
    ],
  },
];

const FALLBACK_CHALLENGES = [
  { id: 'c1', title: 'Plastic Free Week', status: 'completed', points: 150 },
  { id: 'c2', title: 'DIY Compost Setup', status: 'in-progress', points: 120 },
  { id: 'c3', title: 'Green Transport Log', status: 'not-started', points: 80 },
];

const FALLBACK_LEADERBOARD = {
  global: [
    { name: 'Aarav', score: 2450 },
    { name: 'Zara', score: 2310 },
    { name: 'Mohan', score: 1985 },
    { name: 'Li Wei', score: 1840 },
    { name: 'Isha', score: 1735 },
  ],
};

const FEATURE_CONFIG = [
  {
    slug: 'eco-points',
    title: 'Earn Eco Points',
    icon: Award,
    highlightDescription: 'Complete challenges and quizzes to earn points and climb the leaderboard.',
    accentBg: 'bg-amber-100',
    accentText: 'text-amber-600',
    detail: {
      heroDescription:
        'Eco Points are your universal score for consistent climate action. Earn, stack, and redeem them as you progress from curious explorer to planet champion.',
      sections: [
        {
          heading: 'Ways to earn Eco Points',
          body: 'Mix daily missions, weekend quests, and community events for steady points growth. Bonus multipliers trigger when you collaborate with your eco team.',
          bullets: [
            'Complete story missions and local impact quests (+150 to +300 pts)',
            'Ace weekly quizzes for streak-friendly quick wins (+40 pts)',
            'Log verified evidence—photos, reflections, or mentor notes for double credit',
          ],
        },
        {
          heading: 'Level-up milestones',
          body: 'Hit new tiers to unlock themed avatars, pro tips, and access to advanced sustainability projects.',
          bullets: [
            'Explorer → Trailblazer: personalised eco journal templates',
            'Trailblazer → Guardian: invite-only hackathons and bootcamps',
            'Guardian → Planet Champion: mentor younger eco-warriors and judge community events',
          ],
        },
        {
          heading: 'Tips to climb faster',
          body: 'Consistency beats intensity. Blend micro-actions with showcase missions and keep your streak alive.',
          bullets: [
            'Stack a daily micro challenge with one weekly mission',
            'Sync with your team to unlock collaboration multipliers',
            'Share learnings in the community hub for feedback and bonus points',
          ],
        },
      ],
    },
  },
  {
    slug: 'impact',
    title: 'Real-World Impact',
    icon: Sparkles,
    highlightDescription: 'Take on eco-challenges that make a real difference in your community.',
    accentBg: 'bg-emerald-100',
    accentText: 'text-emerald-600',
    detail: {
      heroDescription:
        'Every mission is aligned to UN SDGs and NEP priorities. Turn classrooms into launchpads for river clean-ups, energy audits, biodiversity surveys, and more.',
      sections: [
        {
          heading: 'Mission tracks you can launch',
          body: 'Pick from curated blueprints that match your school context and time availability.',
          bullets: [
            'Water stewardship: river rescues, grey-water recycling, rain gauges',
            'Clean energy: solar prototypes, energy footprint audits, awareness drives',
            'Circular economy: zero-waste carnivals, swap shops, compost accelerators',
          ],
        },
        {
          heading: 'Measure what matters',
          body: 'Log evidence and reflections with geo-tagged photos, before/after stats, and student journals.',
          bullets: [
            'Auto-generated impact reports for mentor review',
            'Verification dashboard that tracks approvals and quality scores',
            'Storytelling prompts to highlight community voices',
          ],
        },
        {
          heading: 'Share and celebrate',
          body: 'Publish success stories to inspire the wider EcoVerse network and attract collaboration invites.',
          bullets: [
            'Feature your mission on the global feed',
            'Nominate your team for monthly impact awards',
            'Earn badges for sustained community partnerships',
          ],
        },
      ],
    },
  },
  {
    slug: 'learning',
    title: 'Interactive Learning',
    icon: BookOpen,
    highlightDescription: 'Learn about the environment through engaging quizzes and lessons.',
    accentBg: 'bg-indigo-100',
    accentText: 'text-indigo-600',
    detail: {
      heroDescription:
        'Blend curriculum-aligned micro-lessons, immersive quizzes, and maker challenges to build climate literacy with joy.',
      sections: [
        {
          heading: 'Choose your learning path',
          body: 'From NEP 2020-aligned lesson kits to SDG explainer shorts, pick resources that match grade levels and learning styles.',
          bullets: [
            'Modular lesson plans with classroom activities and assessments',
            'Bite-sized videos, infographics, and simulations for flipped classrooms',
            'Reflection prompts that tie theory to local realities',
          ],
        },
        {
          heading: 'Assessment that feels like play',
          body: 'Adaptive quizzes and mystery missions keep curiosity high while giving mentors rapid insights.',
          bullets: [
            'Unlock new question banks as you master topics',
            'Earn experience points for each completed learning sprint',
            'Teacher dashboard surfaces misconceptions instantly',
          ],
        },
        {
          heading: 'Create & share resources',
          body: 'Turn learners into creators—co-design lesson add-ons, DIY experiments, and peer-to-peer explainers.',
          bullets: [
            'Publish your own quiz packs for the community',
            'Host live learning circles with mentor moderation',
            'Document projects in multimedia mission journals',
          ],
        },
      ],
    },
  },
  {
    slug: 'collaboration',
    title: 'Compete & Collaborate',
    icon: Users,
    highlightDescription: 'Join a community of eco-warriors and compete on leaderboards.',
    accentBg: 'bg-blue-100',
    accentText: 'text-blue-600',
    detail: {
      heroDescription:
        'Teams, houses, and inter-school alliances keep motivation high. Strategise together, mentor juniors, and celebrate collective wins.',
      sections: [
        {
          heading: 'Team dynamics',
          body: 'Form pods around missions or SDGs and assign rotating roles—strategist, storyteller, field scout, analyst.',
          bullets: [
            'Shared mission boards with live progress markers',
            'Role-based shout-outs to recognise every contribution',
            'Mentor notes to guide weekly retrospectives',
          ],
        },
        {
          heading: 'Friendly competition',
          body: 'Global, regional, and campus leaderboards showcase top impact makers and streak holders.',
          bullets: [
            'Filter leaderboards by mission, SDG, or time window',
            'Challenge other teams to themed face-offs',
            'Unlock collaboration boosts when allied teams co-host events',
          ],
        },
        {
          heading: 'Community exchange',
          body: 'Share playbooks, swap resources, and host cross-school AMAs to keep ideas flowing.',
          bullets: [
            'Community forum threads for each mission arc',
            'Template gallery for posters, pitches, and parent outreach',
            'Monthly live sessions with climate experts',
          ],
        },
      ],
    },
  },
  {
    slug: 'progress',
    title: 'Track Progress',
    icon: TrendingUp,
    highlightDescription: 'Monitor your environmental impact and personal growth.',
    accentBg: 'bg-orange-100',
    accentText: 'text-orange-600',
    detail: {
      heroDescription:
        'See impact at a glance—Eco Points, SDG alignment, streaks, skill growth, and verified missions all in one dashboard.',
      sections: [
        {
          heading: 'Personal analytics',
          body: 'Visualise your journey with weekly trends, streak trackers, and achievement timelines.',
          bullets: [
            'Heatmaps for mission activity and reflection frequency',
            'Skill growth radar comparing leadership, empathy, and innovation',
            'Alerts when streaks or missions need attention',
          ],
        },
        {
          heading: 'Team & mentor insights',
          body: 'Teachers and eco-mentors monitor class-wide progress, identify bottlenecks, and plan interventions.',
          bullets: [
            'Approval turnaround metrics and quality scores',
            'Participation breakdown by house, grade, or club',
            'Auto-generated summaries for parent or school leadership updates',
          ],
        },
        {
          heading: 'Celebrate milestones',
          body: 'Pin achievement badges, share recap reels, and publish end-of-term sustainability reports.',
          bullets: [
            'Downloadable certificates with QR-verified impact',
            'Story mode to stitch mission highlights into a reel',
            'Roadmaps that recommend your next challenge',
          ],
        },
      ],
    },
  },
  {
    slug: 'badges',
    title: 'Unlock Badges',
    icon: Trophy,
    highlightDescription: 'Earn badges and certificates for your achievements.',
    accentBg: 'bg-rose-100',
    accentText: 'text-rose-600',
    detail: {
      heroDescription:
        'Badges recognise grit, creativity, and leadership. Earn classroom shout-outs, digital certificates, and hall-of-fame status.',
      sections: [
        {
          heading: 'Badge collections',
          body: 'Progress through themed sets—Earth Guardian, Innovation Architect, Community Builder, and more.',
          bullets: [
            'Complete mini-series of missions to unlock set badges',
            'Collect limited-edition badges during national campaigns',
            'Showcase your cabinet on profile and teacher dashboards',
          ],
        },
        {
          heading: 'Verification & credibility',
          body: 'Each badge is backed by mentor-approved evidence and timestamps.',
          bullets: [
            'QR codes link to verified mission journals',
            'Endorsements from teachers, peers, and community partners',
            'Integration with digital portfolios and resume builders',
          ],
        },
        {
          heading: 'Rewards & recognition',
          body: 'Redeem badges for micro-scholarships, internship shadow days, or exclusive learning labs.',
          bullets: [
            'Priority invites to EcoVerse accelerator cohorts',
            'Exclusive merchandise and campus spotlight features',
            'Opportunity to mentor junior eco-warriors',
          ],
        },
      ],
    },
  },
];

const FeatureDetailTemplate = ({ title, icon: Icon, accentBg, accentText, heroDescription, sections }) => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <header className="space-y-4 text-center">
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${accentBg} ${accentText}`}>
          <Icon className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{heroDescription}</p>
        <div>
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="space-y-6">
        {sections.map(({ heading, body, bullets }) => (
          <section key={heading} className="card space-y-3">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{heading}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">{body}</p>
            </div>
            {bullets && (
              <ul className="space-y-2 text-sm text-gray-600">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-primary-500">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

export const FeatureDetailRenderer = ({ slug }) => {
  const feature = FEATURE_CONFIG.find((item) => item.slug === slug);

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card text-center space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">Feature coming soon</h1>
          <p className="text-gray-600">We are preparing this experience. Check back shortly!</p>
          <Link to="/dashboard" className="btn-primary inline-flex justify-center">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <FeatureDetailTemplate
      title={feature.title}
      icon={feature.icon}
      accentBg={feature.accentBg}
      accentText={feature.accentText}
      heroDescription={feature.detail.heroDescription}
      sections={feature.detail.sections}
    />
  );
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [summary, setSummary] = useState(FALLBACK_SUMMARY);
  const [missions, setMissions] = useState(FALLBACK_MISSIONS);
  const [challenges, setChallenges] = useState(FALLBACK_CHALLENGES);
  const [leaderboardData, setLeaderboardData] = useState(FALLBACK_LEADERBOARD);

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');

      const [summaryRes, missionsRes, challengesRes, leaderboardRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/dashboard/summary`),
        fetch(`${API_BASE_URL}/api/mission-arcs`),
        fetch(`${API_BASE_URL}/api/challenges`),
        fetch(`${API_BASE_URL}/api/leaderboard`),
      ]);

      if (!summaryRes.ok || !missionsRes.ok || !challengesRes.ok || !leaderboardRes.ok) {
        throw new Error('One or more dashboard resources failed to load.');
      }

      const [summaryJson, missionsJson, challengesJson, leaderboardJson] = await Promise.all([
        summaryRes.json(),
        missionsRes.json(),
        challengesRes.json(),
        leaderboardRes.json(),
      ]);

      setSummary(summaryJson || FALLBACK_SUMMARY);
      setMissions(missionsJson?.length ? missionsJson : FALLBACK_MISSIONS);
      setChallenges(challengesJson?.length ? challengesJson : FALLBACK_CHALLENGES);
      setLeaderboardData(leaderboardJson?.global ? leaderboardJson : FALLBACK_LEADERBOARD);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setSummary((prev) => prev || FALLBACK_SUMMARY);
      setMissions((prev) => (prev?.length ? prev : FALLBACK_MISSIONS));
      setChallenges((prev) => (prev?.length ? prev : FALLBACK_CHALLENGES));
      setLeaderboardData((prev) => (prev?.global?.length ? prev : FALLBACK_LEADERBOARD));
      setError('');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const userData = summary?.user;
  const streak = summary?.streak;
  const spotlight = summary?.spotlight;

  const quickActions = useMemo(() => ([
    { icon: <Target className="h-6 w-6" />, label: 'Start Challenge', link: '/challenges', color: 'bg-blue-500' },
    { icon: <BookOpen className="h-6 w-6" />, label: 'Take Quiz', link: '/quizzes', color: 'bg-purple-500' },
    { icon: <Trophy className="h-6 w-6" />, label: 'Leaderboard', link: '/leaderboard', color: 'bg-yellow-500' },
    { icon: <Award className="h-6 w-6" />, label: 'My Achievements', link: '/achievements', color: 'bg-green-500' },
  ]), []);

  const featureHighlights = useMemo(() => ([
    {
      title: 'Earn Eco Points',
      description: 'Complete challenges and quizzes to earn points and climb the leaderboard.',
      icon: Award,
      accentBg: 'bg-amber-100',
      accentText: 'text-amber-600',
      link: '/features/eco-points',
    },
    {
      title: 'Real-World Impact',
      description: 'Take on eco-challenges that make a real difference in your community.',
      icon: Sparkles,
      accentBg: 'bg-emerald-100',
      accentText: 'text-emerald-600',
      link: '/features/impact',
    },
    {
      title: 'Interactive Learning',
      description: 'Learn about the environment through engaging quizzes and lessons.',
      icon: BookOpen,
      accentBg: 'bg-indigo-100',
      accentText: 'text-indigo-600',
      link: '/features/learning',
    },
    {
      title: 'Compete & Collaborate',
      description: 'Join a community of eco-warriors and compete on leaderboards.',
      icon: Users,
      accentBg: 'bg-blue-100',
      accentText: 'text-blue-600',
      link: '/features/collaboration',
    },
    {
      title: 'Track Progress',
      description: 'Monitor your environmental impact and personal growth.',
      icon: TrendingUp,
      accentBg: 'bg-orange-100',
      accentText: 'text-orange-600',
      link: '/features/progress',
    },
    {
      title: 'Unlock Badges',
      description: 'Earn badges and certificates for your achievements.',
      icon: Trophy,
      accentBg: 'bg-rose-100',
      accentText: 'text-rose-600',
      link: '/features/badges',
    },
  ]), []);

  const missionArcs = useMemo(() => missions.map((arc, index) => ({
    ...arc,
    gradient: gradientPalette[index % gradientPalette.length],
  })), [missions]);

  const getArcStatus = (arc) => {
    const completed = arc.chapters?.filter((chapter) => chapter.status === 'completed').length || 0;
    if (completed === arc.chapters?.length) return 'completed';
    if (arc.chapters?.some((chapter) => chapter.status === 'active')) return 'active';
    return 'upcoming';
  };

  const statusStyles = {
    completed: 'bg-emerald-100 text-emerald-700',
    active: 'bg-orange-100 text-orange-700',
    upcoming: 'bg-slate-100 text-slate-600',
  };

  const [primaryArc, ...supportingArcs] = missionArcs;
  const completedChapters = primaryArc?.chapters?.filter((chapter) => chapter.status === 'completed').length || 0;
  const totalChapters = primaryArc?.chapters?.length || 0;
  const activeChapter = primaryArc?.chapters?.find((chapter) => chapter.status === 'active');
  const nextChapter = primaryArc?.chapters?.find((chapter) => chapter.status === 'upcoming');

  const recentChallenges = challenges.slice(0, 3).map((challenge) => ({
    id: challenge.id,
    title: challenge.title,
    status: challenge.status === 'active' ? 'in-progress' : challenge.status,
    points: challenge.points,
  }));

  const leaderboardPreview = leaderboardData?.global?.slice(0, 5)?.map((entry, index) => ({
    rank: index + 1,
    name: entry.name,
    points: entry.score,
    isCurrentUser: entry.name === userData?.name,
  })) || [];

  if (isLoading && !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3 text-primary-600">
          <Loader2 className="h-10 w-10 animate-spin" />
          <p className="font-medium">Loading your EcoVerse dashboard...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card max-w-md text-center">
          <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-gray-900 mb-2">Loading dashboard data…</h1>
          <p className="text-gray-600 mb-4">Please wait while we prepare your personalised insights.</p>
          <button onClick={fetchDashboard} className="btn-primary w-full">Retry Fetch</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userData.name}! 🌿</h1>
          <p className="text-gray-600 mt-2">Keep up the great work saving our planet!</p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {featureHighlights.map(({ title, description, icon: Icon, accentBg, accentText, link }) => (
            <Link
              key={title}
              to={link}
              className="card relative z-10 block cursor-pointer flex flex-col gap-3 transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${accentBg}`}>
                <Icon className={`h-6 w-6 ${accentText}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              <span className="text-sm font-semibold text-primary-600">Explore →</span>
            </Link>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            to="/features/eco-points"
            className="card relative z-10 block cursor-pointer bg-gradient-to-br from-primary-500 to-green-600 text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-100 text-sm">Eco Points</p>
                <p className="text-3xl font-bold mt-1">{userData.ecoPoints}</p>
              </div>
              <Award className="h-12 w-12 text-primary-200" />
            </div>
          </Link>

          <Link
            to="/features/progress"
            className="card relative z-10 block cursor-pointer bg-gradient-to-br from-blue-500 to-cyan-600 text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Current Level</p>
                <p className="text-3xl font-bold mt-1">{userData.level}</p>
              </div>
              <TrendingUp className="h-12 w-12 text-blue-200" />
            </div>
          </Link>

          <Link
            to="/achievements"
            className="card relative z-10 block cursor-pointer bg-gradient-to-br from-yellow-500 to-orange-600 text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Badges Earned</p>
                <p className="text-3xl font-bold mt-1">{userData.badges}</p>
              </div>
              <Trophy className="h-12 w-12 text-yellow-200" />
            </div>
          </Link>

          <Link
            to="/challenges"
            className="card relative z-10 block cursor-pointer bg-gradient-to-br from-purple-500 to-pink-600 text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Challenges Done</p>
                <p className="text-3xl font-bold mt-1">{userData.challengesCompleted}</p>
              </div>
              <Zap className="h-12 w-12 text-purple-200" />
            </div>
          </Link>
        </div>

        {/* Level Progress */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Level Progress</h2>
          <ProgressBar current={userData.ecoPoints} total={userData.nextLevelPoints} label={`Level ${userData.level} → Level ${userData.level + 1}`} />
          <p className="text-sm text-gray-600 mt-2">{userData.nextLevelPoints - userData.ecoPoints} points to next level!</p>
        </div>

        <EcoHabitat ecoPoints={userData.ecoPoints} className="mb-8" />

        {/* Story Missions */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className={`card xl:col-span-2 text-white bg-gradient-to-br ${primaryArc.gradient} relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_transparent_60%)]" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Story Mission</p>
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <span>{primaryArc.title}</span>
                    <span className="text-2xl">{primaryArc.badge}</span>
                  </h2>
                  <p className="text-white/90 font-medium mt-1">{primaryArc.act} · {primaryArc.focus}</p>
                  <p className="text-white/80 mt-3 max-w-2xl">
                    {activeChapter ? activeChapter.summary : 'Complete missions to keep your story arc alive.'}
                  </p>
                </div>
                <div className="bg-white/15 rounded-2xl px-5 py-4 flex flex-col gap-3 min-w-[220px]">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-white" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/70">Chapters Complete</p>
                      <p className="text-lg font-semibold">{completedChapters}/{totalChapters}</p>
                    </div>
                  </div>
                  <ProgressBar current={completedChapters} total={totalChapters} label={''} />
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>{activeChapter ? 'Current Chapter' : 'Awaiting Launch'}</span>
                    <span>{Math.round((completedChapters / totalChapters) * 100)}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/15 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-white/70 mb-2 flex items-center gap-2">
                    <Compass className="h-4 w-4" /> Mission focus
                  </p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {nextChapter ? `Next objective: ${nextChapter.title} — ${nextChapter.summary}` : primaryArc.reward}
                  </p>
                  {nextChapter && (
                    <p className="text-xs text-white/70 mt-3">Reward: {primaryArc.reward}</p>
                  )}
                </div>
                <div className="bg-white/15 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-white/70 mb-2 flex items-center gap-2">
                    <Flame className="h-4 w-4" /> Active objectives
                  </p>
                  <div className="space-y-3">
                    {primaryArc.chapters.map((chapter) => {
                      const indicatorStyles = {
                        completed: 'border-emerald-200 bg-emerald-50/20 text-emerald-100',
                        active: 'border-white bg-white/20 text-white',
                        upcoming: 'border-white/40 bg-white/10 text-white/70',
                      };
                      return (
                        <div
                          key={chapter.id}
                          className={`rounded-lg border px-3 py-2 text-sm ${indicatorStyles[chapter.status]}`}
                        >
                          <p className="font-semibold">{chapter.title}</p>
                          <p className="text-xs mt-1 opacity-80">{chapter.summary}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-white/80">
                  Ready to tackle the next chapter? Gather your squad and log progress under Eco Challenges.
                </p>
                <a href="/challenges" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg shadow-sm hover:shadow transition">
                  Continue Story
                </a>
              </div>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Mission Journal</h3>
            <p className="text-sm text-gray-600">Track where each story-driven arc stands and what it unlocks next.</p>
            <div className="space-y-3">
              {missionArcs.map((arc) => {
                const status = getArcStatus(arc);
                return (
                  <div key={arc.id} className="rounded-xl border border-gray-200 p-4 hover:border-primary-300 transition">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-semibold text-gray-900">{arc.title}</h4>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[status]}`}>
                            {status === 'completed' ? 'Completed' : status === 'active' ? 'In Progress' : 'Upcoming'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{arc.act}</p>
                        <p className="text-xs text-gray-500 mt-2">Reward: {arc.reward}</p>
                      </div>
                      <div className="text-3xl" aria-hidden="true">{arc.badge}</div>
                    </div>
                    <div className="mt-3 space-y-2">
                      {arc.chapters.map((chapter) => (
                        <div key={chapter.id} className="flex items-start gap-3 text-sm">
                          <div className={`mt-1 h-2.5 w-2.5 rounded-full ${
                            chapter.status === 'completed'
                              ? 'bg-emerald-500'
                              : chapter.status === 'active'
                                ? 'bg-orange-500 animate-pulse'
                                : 'bg-gray-300'
                          }`} />
                          <div>
                            <p className="font-medium text-gray-800">{chapter.title}</p>
                            <p className="text-xs text-gray-500">{chapter.summary}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link} className={`flex items-center space-x-3 p-3 rounded-lg ${action.color} text-white hover:opacity-90 transition-opacity`}>
                    {action.icon}
                    <span className="font-medium">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Challenges */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">My Challenges</h2>
                <Link to="/challenges" className="text-primary-600 hover:text-primary-700 font-medium text-sm">View All →</Link>
              </div>
              <div className="space-y-3">
                {recentChallenges.map((challenge) => (
                  <div key={challenge.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                      <p className="text-sm text-gray-600 capitalize">{challenge.status.replace('-', ' ')}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-600">{challenge.points} pts</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        challenge.status === 'completed' ? 'bg-green-100 text-green-800' :
                        challenge.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {challenge.status === 'completed' ? '✓ Done' : challenge.status === 'in-progress' ? 'In Progress' : 'Start'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Preview */}
        <div className="card mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Leaderboard</h2>
            <Link to="/leaderboard" className="text-primary-600 hover:text-primary-700 font-medium text-sm">View Full →</Link>
          </div>
          <div className="space-y-2">
            {leaderboardPreview.map((user) => (
              <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${user.isCurrentUser ? 'bg-primary-50 border-2 border-primary-600' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-lg text-gray-600 w-6">#{user.rank}</span>
                  <span className="font-medium text-gray-900">{user.name} {user.isCurrentUser && <span className="text-primary-600 text-sm">(You)</span>}</span>
                </div>
                <span className="font-bold text-primary-600">{user.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardFeatureDetail = () => {
  const { featureSlug } = useParams();
  return <FeatureDetailRenderer slug={featureSlug} />;
};

export default Dashboard;