import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  status: { type: String, enum: ['available', 'active', 'completed', 'upcoming'], default: 'available' },
  points: { type: Number, required: true },
  description: { type: String, default: '' },
  missionArcId: { type: String, default: '' },
  chapterId: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge;