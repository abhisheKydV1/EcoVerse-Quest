# EcoVerse Quest

A full-stack eco-education platform built with React, Node.js, Express, and MongoDB. This application helps users learn about environmental sustainability through interactive challenges, quizzes, and community features.

## Features

- **User Authentication**: Secure signup/login with JWT tokens
- **Eco Challenges**: Real-world environmental challenges with point system
- **Progress Tracking**: Monitor eco-points, streaks, and achievements
- **Community Features**: Leaderboards, teams, and social sharing
- **Educational Content**: Quizzes, learning modules, and eco-tips
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd major
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Copy the `.env` file in the server directory and update the values:
   ```env
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key
   MONGODB_URI=mongodb://localhost:27017/ecoverse-quest
   CLIENT_ORIGIN=http://localhost:5173
   ```

5. **Start MongoDB**

   Make sure MongoDB is running on your system:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb/brew/mongodb-community

   # Or use MongoDB Atlas for cloud database
   ```

6. **Seed the database**
   ```bash
   cd server
   npm run seed
   ```

7. **Start the development servers**

   **Terminal 1: Start the backend**
   ```bash
   cd server
   npm start
   ```

   **Terminal 2: Start the frontend**
   ```bash
   cd client
   npm run dev
   ```

8. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Challenges
- `GET /api/challenges` - Get all challenges
- `GET /api/challenges/:id` - Get specific challenge
- `POST /api/challenges/:id/submit` - Submit challenge (requires auth)

## Project Structure

```
major/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── middleware/        # Express middleware
│   ├── db.js              # Database connection
│   ├── index.js           # Main server file
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please open an issue on GitHub.