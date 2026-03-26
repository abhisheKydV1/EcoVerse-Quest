import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  school: { type: String, default: '' },
  ecoLevel: { type: Number, default: 1 },
  ecoPoints: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
  streak: {
    current: { type: Number, default: 0 },
    longest: { type: Number, default: 0 }
  },
  achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;