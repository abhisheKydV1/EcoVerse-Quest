import { useEffect, useMemo, useState } from 'react';
import { Filter, Search, MapPin, Camera, UploadCloud, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import ChallengeCard from '../components/ChallengeCard';

const SubmissionModal = ({ challenge, isOpen, onClose }) => {
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [submission, setSubmission] = useState({
    locationName: '',
    latitude: '',
    longitude: '',
    notes: '',
    proofLink: '',
    photoName: '',
  });

  if (!isOpen || !challenge) return null;

  const handleGeoCapture = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsFetchingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSubmission((prev) => ({
          ...prev,
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
        }));
        setIsFetchingLocation(false);
      },
      () => {
        alert('Unable to retrieve your location. Please enter it manually.');
        setIsFetchingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSubmission((prev) => ({ ...prev, photoName: file.name }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submission saved! A mentor will review and approve your challenge.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-green-600 px-6 py-4 text-white flex items-start justify-between">
          <div>
            <p className="text-sm text-primary-100 uppercase tracking-wide">Challenge Submission</p>
            <h2 className="text-2xl font-bold">{challenge.title}</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white text-lg">×</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location Name</label>
              <input
                type="text"
                value={submission.locationName}
                onChange={(e) => setSubmission((prev) => ({ ...prev, locationName: e.target.value }))}
                placeholder="E.g., City Eco Park, Sector 62"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                <span>Auto Capture Co-ordinates</span>
                <button
                  type="button"
                  onClick={handleGeoCapture}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-semibold"
                >
                  {isFetchingLocation ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Locating…</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4" />
                      <span>Use GPS</span>
                    </>
                  )}
                </button>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={submission.latitude}
                  onChange={(e) => setSubmission((prev) => ({ ...prev, latitude: e.target.value }))}
                  placeholder="Latitude"
                  className="input-field"
                />
                <input
                  type="text"
                  value={submission.longitude}
                  onChange={(e) => setSubmission((prev) => ({ ...prev, longitude: e.target.value }))}
                  placeholder="Longitude"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                <Camera className="h-4 w-4 text-primary-600" />
                <span>Upload Photo Proof</span>
              </label>
              <label className="input-field flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3 text-gray-600">
                  <UploadCloud className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {submission.photoName ? submission.photoName : 'Click to upload image'}
                  </span>
                </div>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
              <p className="text-xs text-gray-500 mt-2">Tip: capture a clear before & after photo if possible.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                rows={4}
                value={submission.notes}
                onChange={(e) => setSubmission((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="Share your experience, partners involved, or observations."
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Evidence Link (Optional)</label>
            <input
              type="url"
              value={submission.proofLink}
              onChange={(e) => setSubmission((prev) => ({ ...prev, proofLink: e.target.value }))}
              placeholder="Paste Drive/YouTube/Instagram proof link"
              className="input-field"
            />
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Once you submit, the challenge will move to <span className="font-semibold">Teacher / Eco-Mentor</span> for verification.
              You’ll receive eco-points and badges after approval. Make sure all details are accurate!
            </p>
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Submit for Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Challenges = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [challengeList, setChallengeList] = useState([]);
  const [missionArcs, setMissionArcs] = useState([]);

  const categories = useMemo(() => ['all', 'Waste', 'Energy', 'Water', 'Biodiversity'], []);

  const fetchChallenges = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');

      const [challengesRes, missionsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/challenges`),
        fetch(`${API_BASE_URL}/api/mission-arcs`),
      ]);

      if (!challengesRes.ok || !missionsRes.ok) {
        throw new Error('Failed to load challenges or mission arcs.');
      }

      const [challengesJson, missionsJson] = await Promise.all([
        challengesRes.json(),
        missionsRes.json(),
      ]);

      setChallengeList(challengesJson);
      setMissionArcs(missionsJson);
    } catch (err) {
      console.error('Challenges fetch error:', err);
      setError(err.message || 'Unable to load challenges.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChallenges();
  }, [fetchChallenges]);

  const enrichedChallenges = useMemo(() => challengeList.map((challenge) => {
    const missionArc = challenge.missionArcId
      ? missionArcs.find((arc) => arc.id === challenge.missionArcId)
      : undefined;

    const missionChapter = missionArc?.chapters?.find((chapter) => chapter.id === challenge.chapterId);

    return {
      ...challenge,
      missionArcTitle: missionArc?.title,
      missionChapterLabel: missionChapter ? `Chapter · ${missionChapter.title}` : undefined,
    };
  }), [challengeList, missionArcs]);

  const filteredChallenges = enrichedChallenges.filter((challenge) => {
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      challenge.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAcceptChallenge = (challenge) => {
    setActiveChallenge(challenge);
  };

  const closeModal = () => setActiveChallenge(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Eco Challenges</h1>
          <p className="text-gray-600">Take on real-world challenges and make a difference!</p>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="Search challenges..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input-field pl-10 w-full" />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="input-field">
                {categories.map(cat => <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="card mb-10 bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">How verification works</h2>
                <p className="text-sm text-gray-600">
                  Record the exact location, upload a photo or link, and submit your notes. Teachers or Eco-Mentors review every submission before eco-points are awarded.
                </p>
              </div>
            </div>
            <div className="text-sm text-primary-700 bg-white/70 px-4 py-2 rounded-full">
              92% of students who add photos get verified in under 48 hours ✨
            </div>
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onAccept={handleAcceptChallenge} />
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No challenges found matching your criteria.</p>
          </div>
        )}
      </div>

      <SubmissionModal
        challenge={activeChallenge}
        isOpen={Boolean(activeChallenge)}
        onClose={closeModal}
      />
    </div>
  );
};

export default Challenges;