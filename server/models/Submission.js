import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  description: { type: String, default: '' },
  images: [{ type: String }], // URLs to uploaded images
  submittedAt: { type: Date, default: Date.now },
  reviewedAt: { type: Date },
  pointsAwarded: { type: Number, default: 0 }
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;