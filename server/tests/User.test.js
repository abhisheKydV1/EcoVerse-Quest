import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import User from '../models/User.js';

let mongoServer;

beforeAll(async () => {
  // Disconnect any existing mongoose connection
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  // Start in-memory MongoDB instance
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  // Close database connection and stop server
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  // Clear all collections before each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

describe('User Model', () => {
  it('should create a user successfully', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'hashedpassword123',
      role: 'student',
      school: 'Test School'
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.role).toBe(userData.role);
    expect(savedUser.school).toBe(userData.school);
    expect(savedUser.ecoPoints).toBe(0);
    expect(savedUser.ecoLevel).toBe(1);
  });

  it('should enforce unique email constraint', async () => {
    const userData1 = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    const userData2 = {
      name: 'Jane Doe',
      email: 'john@example.com', // Same email
      password: 'password456'
    };

    await new User(userData1).save();

    await expect(new User(userData2).save()).rejects.toThrow();
  });

  it('should set default values correctly', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser.role).toBe('student');
    expect(savedUser.school).toBe('');
    expect(savedUser.ecoLevel).toBe(1);
    expect(savedUser.ecoPoints).toBe(0);
    expect(savedUser.streak.current).toBe(0);
    expect(savedUser.streak.longest).toBe(0);
    expect(savedUser.achievements).toEqual([]);
    expect(savedUser.createdAt).toBeDefined();
  });

  it('should validate required fields', async () => {
    const userWithoutName = new User({
      email: 'test@example.com',
      password: 'password123'
    });

    const userWithoutEmail = new User({
      name: 'Test User',
      password: 'password123'
    });

    const userWithoutPassword = new User({
      name: 'Test User',
      email: 'test@example.com'
    });

    await expect(userWithoutName.save()).rejects.toThrow();
    await expect(userWithoutEmail.save()).rejects.toThrow();
    await expect(userWithoutPassword.save()).rejects.toThrow();
  });
});