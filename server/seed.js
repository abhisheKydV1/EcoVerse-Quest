import connectDB from './db.js';
import Challenge from './models/Challenge.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const seedChallenges = [
  { title: 'Build Bio-Filter Crates', category: 'Water', difficulty: 'Advanced', status: 'active', points: 200, description: 'Create bio-filter crates to improve water quality in local rivers.' },
  { title: 'Neighborhood Waste Audit', category: 'Waste', difficulty: 'Intermediate', status: 'available', points: 160, description: 'Conduct a waste audit in your neighborhood to identify recycling opportunities.' },
  { title: 'Host a No-Car Day', category: 'Air Quality', difficulty: 'Advanced', status: 'upcoming', points: 220, description: 'Organize a community event promoting sustainable transportation.' },
];

const seedDB = async () => {
  try {
    await Challenge.deleteMany(); // Clear existing
    await Challenge.insertMany(seedChallenges);
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();