import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, CheckCircle, TrendingUp, Award, BookOpen, FileDown, Building, Leaf, BarChart3, ClipboardList, ClipboardCheck, ShieldCheck, Medal, Loader2, AlertTriangle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const TeacherDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [analytics, setAnalytics] = useState(null);
  const [toolkit, setToolkit] = useState(null);
  const [achievements, setAchievements] = useState([]);

  const recentActivity = useMemo(() => ([
    { id: 1, student: 'Sarah Chen', action: 'Completed "Plant 5 Trees" challenge', time: '2 hours ago', points: 100 },
    { id: 2, student: 'Mike Ross', action: 'Scored 95% on Climate Quiz', time: '4 hours ago', points: 75 },
    { id: 3, student: 'Emma Wilson', action: 'Submitted Water Conservation task', time: '5 hours ago', points: 80 },
    { id: 4, student: 'David Kim', action: 'Completed Recycling Drive', time: '1 day ago', points: 120 },
  ]), []);

  const pendingApprovals = useMemo(() => ([
    { id: 1, student: 'Alex Johnson', challenge: 'Zero Waste Week', submitted: '1 hour ago', proof: 'photo_evidence.jpg' },
    { id: 2, student: 'Lisa Anderson', challenge: 'Solar Energy Day', submitted: '3 hours ago', proof: 'report.pdf' },
    { id: 3, student: 'James Brown', challenge: 'Compost Creation', submitted: '5 hours ago', proof: 'video.mp4' },
  ]), []);

  const topPerformers = useMemo(() => ([
    { rank: 1, name: 'Sarah Chen', points: 3200, challenges: 28 },
    { rank: 2, name: 'Mike Ross', points: 2890, challenges: 25 },
    { rank: 3, name: 'Alex Johnson', points: 2450, challenges: 22 },
  ]), []);

  const fetchTeacherData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');

      const [analyticsRes, toolkitRes, achievementsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/teacher/analytics`),
        fetch(`${API_BASE_URL}/api/teacher/toolkit`),
        fetch(`${API_BASE_URL}/api/teacher/achievements`),
      ]);

      if (!analyticsRes.ok || !toolkitRes.ok || !achievementsRes.ok) {
        throw new Error('Failed to load teacher dashboard data.');
      }

      const [analyticsJson, toolkitJson, achievementsJson] = await Promise.all([
        analyticsRes.json(),
        toolkitRes.json(),
        achievementsRes.json(),
      ]);

      setAnalytics(analyticsJson);
      setToolkit(toolkitJson);
      setAchievements(achievementsJson);
    } catch (err) {
      console.error('Teacher dashboard fetch error:', err);
      setError(err.message || 'Unable to load teacher dashboard data.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeacherData();
  }, [fetchTeacherData]);

  const stats = useMemo(() => {
    if (!analytics) {
      return {
        totalStudents: 0,
        activeChallenges: 0,
        completedTasks: 0,
        averageScore: 0,
      };
    }

    const totalStudents = analytics.participationByCampus?.reduce((sum, campus) => sum + (campus.participants ?? 0), 0) ?? 0;
    const averageCompletionRate = analytics.participationByCampus?.length
      ? analytics.participationByCampus.reduce((sum, campus) => sum + (campus.completionRate ?? 0), 0) /
        analytics.participationByCampus.length
      : 0;

    const completedTasks = Math.round(totalStudents * (averageCompletionRate / 100));
    const activeChallenges = analytics.verificationInsights?.pending ?? 0;
    const averageScore = Math.round(averageCompletionRate);

    return {
      totalStudents,
      activeChallenges,
      completedTasks,
      averageScore,
    };
  }, [analytics]);

  const lessonPlanLibrary = toolkit?.lessonPlans ?? [];
  const quickAssignTemplates = toolkit?.quickAssign ?? [];
  const resourceBundles = toolkit?.resourceBundles ?? [];
  const moderatorAchievements = achievements ?? [];
  const verificationInsights = analytics?.verificationInsights;
  const participationByCampus = analytics?.participationByCampus ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3 text-primary-600">
          <Loader2 className="h-10 w-10 animate-spin" />
          <p className="font-medium">Loading teacher insights...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card max-w-md text-center">
          <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-gray-900 mb-2">Unable to load teacher data</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button onClick={fetchTeacherData} className="btn-primary w-full">Try again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard 👨‍🏫</h1>
          <p className="text-gray-600 mt-2">Manage students, challenges, and track progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Students</p>
                <p className="text-3xl font-bold mt-1">{stats.totalStudents}</p>
              </div>
              <Users className="h-12 w-12 text-blue-200" />
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Challenges</p>
                <p className="text-3xl font-bold mt-1">{stats.activeChallenges}</p>
              </div>
              <Target className="h-12 w-12 text-green-200" />
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Completed Tasks</p>
                <p className="text-3xl font-bold mt-1">{stats.completedTasks}</p>
              </div>
              <CheckCircle className="h-12 w-12 text-purple-200" />
            </div>
          </div>

          <div className="card bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Average Score</p>
                <p className="text-3xl font-bold mt-1">{stats.averageScore}%</p>
              </div>
              <TrendingUp className="h-12 w-12 text-orange-200" />
            </div>
          </div>
        </div>

        {/* Participation overview */}
        {participationByCampus.length > 0 && (
          <div className="card mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary-600" /> Participation Snapshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {participationByCampus.map((campus) => (
                <div key={campus.campus} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900">{campus.campus}</p>
                  <p className="text-3xl font-bold text-primary-600 mt-2">{campus.participants}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Participants</p>
                  <p className="text-sm text-gray-600 mt-3">Completion rate: <span className="font-semibold text-primary-600">{campus.completionRate}%</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teacher Toolkit */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="card xl:col-span-2 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary-600" /> Lesson Plan Library
                </h2>
                <p className="text-sm text-gray-600">Curated, classroom-ready modules aligned to missions and NEP 2020 outcomes.</p>
              </div>
              <Link to="/learning-modules" className="text-sm font-semibold text-primary-600 hover:text-primary-700">Browse all →</Link>
            </div>
            <div className="space-y-4">
              {lessonPlanLibrary.length > 0 ? (
                lessonPlanLibrary.map((plan) => (
                  <div key={plan.id} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{plan.title}</p>
                        <p className="text-sm text-gray-500">{plan.duration}</p>
                        {plan.focus && <p className="text-sm text-primary-600 mt-2">Focus: {plan.focus}</p>}
                        {plan.resources?.length > 0 && (
                          <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
                            {plan.resources.map((resource) => (
                              <li key={resource}>{resource}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <button
                        onClick={() => alert(`Shared “${plan.title}” with your classes!`)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition"
                      >
                        <ClipboardCheck className="h-4 w-4" /> Share plan
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No lesson plans available yet. Check back soon!</p>
              )}
            </div>
          </div>
          <div className="card space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary-600" /> Quick Assign Templates
              </h2>
              <p className="text-sm text-gray-600">Launch scaffolded missions in minutes—customisable and ready to send to cohorts.</p>
            </div>
            <div className="space-y-3">
              {quickAssignTemplates.length > 0 ? (
                quickAssignTemplates.map((template) => (
                  <div key={template.id} className="rounded-xl border border-gray-200 p-3">
                    <p className="font-semibold text-gray-900">{template.title || template.label}</p>
                    {template.audience && <p className="text-xs text-gray-500 mt-1">Audience: {template.audience}</p>}
                    {template.objective && <p className="text-sm text-gray-600 mt-1">{template.objective}</p>}
                    {template.deliverable && <p className="text-sm text-gray-600 mt-1">{template.deliverable}</p>}
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{template.estTime || template.duration || '15 min'}</span>
                      <button
                        onClick={() => alert(`Template “${template.title || template.label}” queued for distribution!`)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-700"
                      >
                        <ClipboardCheck className="h-4 w-4" /> Assign now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No quick assign templates available at the moment.</p>
              )}
            </div>

            {resourceBundles.length > 0 && (
              <div className="rounded-xl border border-dashed border-primary-200 p-4 bg-primary-50/40">
                <h3 className="text-sm font-semibold text-primary-700 mb-2 flex items-center gap-2">
                  <FileDown className="h-4 w-4" /> Resource Bundles
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {resourceBundles.map((bundle) => (
                    <li key={bundle.id} className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-primary-500" />
                      <span>{bundle.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="card mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary-600" /> Moderator Achievements
              </h2>
              <p className="text-sm text-gray-600">Celebrate and incentivise mentors verifying community impact with quality and speed.</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50">
              <Medal className="h-4 w-4" /> Manage badges
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Moderator</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Approvals (30d)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Quality score</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Badges</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {moderatorAchievements.length > 0 ? (
                  moderatorAchievements.map((mod) => (
                    <tr key={mod.id}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{mod.moderator}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{mod.approvals}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{mod.qualityScore}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {mod.badges.map((badge) => (
                            <span key={badge} className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-primary-50 text-primary-600 rounded-full border border-primary-100">
                              <Medal className="h-3 w-3" /> {badge}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{mod.streak}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-sm text-gray-600">No moderator achievements recorded yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {verificationInsights && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-primary-200 bg-primary-50/40 p-3">
                <p className="text-xs uppercase tracking-wide text-primary-700">Pending verifications</p>
                <p className="text-2xl font-bold text-primary-700">{verificationInsights.pending}</p>
              </div>
              <div className="rounded-lg border border-primary-200 bg-primary-50/40 p-3">
                <p className="text-xs uppercase tracking-wide text-primary-700">Avg turnaround</p>
                <p className="text-2xl font-bold text-primary-700">{verificationInsights.averageTurnaroundHours} hrs</p>
              </div>
              <div className="rounded-lg border border-primary-200 bg-primary-50/40 p-3">
                <p className="text-xs uppercase tracking-wide text-primary-700">Escalation risk</p>
                <p className="text-2xl font-bold text-primary-700">{verificationInsights.escalationRisk}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Pending Approvals */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Approvals</h2>
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.student}</h3>
                      <p className="text-sm text-gray-600">{item.challenge}</p>
                      <p className="text-xs text-gray-500 mt-1">Submitted {item.submitted}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div>
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performers</h2>
              <div className="space-y-3">
                {topPerformers.map((student) => (
                  <div key={student.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-lg text-primary-600">#{student.rank}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{student.name}</p>
                        <p className="text-xs text-gray-600">{student.challenges} challenges</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary-600">{student.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{activity.student}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="font-bold text-primary-600">+{activity.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/challenges" className="card hover:scale-105 transition-transform bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <Target className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Create Challenge</h3>
            <p className="text-gray-600 text-sm">Add new eco-challenges for students</p>
          </Link>

          <Link to="/quizzes" className="card hover:scale-105 transition-transform bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <BookOpen className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Create Quiz</h3>
            <p className="text-gray-600 text-sm">Design new environmental quizzes</p>
          </Link>

          <Link to="/leaderboard" className="card hover:scale-105 transition-transform bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <Users className="h-10 w-10 text-green-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-gray-600 text-sm">Track student performance metrics</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;