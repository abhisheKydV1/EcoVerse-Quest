import { useState } from 'react';
import { BookOpen, Clock, Award, CheckCircle } from 'lucide-react';

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizzes = [
    { id: 1, title: 'Climate Change Basics', category: 'Climate', questions: 10, points: 50, difficulty: 'easy', duration: '10 min', completed: false },
    { id: 2, title: 'Waste Management', category: 'Waste', questions: 15, points: 75, difficulty: 'medium', duration: '15 min', completed: true },
    { id: 3, title: 'Renewable Energy', category: 'Energy', questions: 12, points: 60, difficulty: 'medium', duration: '12 min', completed: false },
    { id: 4, title: 'Water Conservation', category: 'Water', questions: 10, points: 50, difficulty: 'easy', duration: '10 min', completed: false },
    { id: 5, title: 'Biodiversity & Ecosystems', category: 'Biodiversity', questions: 20, points: 100, difficulty: 'hard', duration: '20 min', completed: false },
  ];

  const sampleQuestions = [
    { question: 'What is the main cause of climate change?', options: ['Deforestation', 'Greenhouse gas emissions', 'Ocean pollution', 'Overpopulation'], correct: 1, explanation: 'Greenhouse gas emissions from burning fossil fuels are the primary cause of climate change.' },
    { question: 'Which gas is most responsible for global warming?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correct: 2, explanation: 'Carbon dioxide (CO2) is the primary greenhouse gas driving global warming.' },
    { question: 'What percentage of Earth\'s water is freshwater?', options: ['2.5%', '10%', '25%', '50%'], correct: 0, explanation: 'Only about 2.5% of Earth\'s water is freshwater, and most of that is frozen in glaciers.' },
  ];

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (selectedQuiz && !showResult) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h2>
              <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {sampleQuestions.length}</span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(index)} disabled={selectedAnswer !== null} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === null ? 'border-gray-200 hover:border-primary-500 hover:bg-primary-50' :
                      index === question.correct ? 'border-green-500 bg-green-50' :
                      selectedAnswer === index ? 'border-red-500 bg-red-50' :
                      'border-gray-200 opacity-50'
                    }`}>
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedAnswer !== null && (
              <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === question.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <p className="font-semibold mb-2">{selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}</p>
                <p className="text-sm text-gray-700">{question.explanation}</p>
              </div>
            )}

            <div className="flex justify-between">
              <button onClick={resetQuiz} className="btn-secondary">Exit Quiz</button>
              {selectedAnswer !== null && (
                <button onClick={nextQuestion} className="btn-primary">{currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / sampleQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-gray-600 mb-8">Great job on completing the quiz</p>

            <div className="bg-gradient-to-br from-primary-500 to-green-600 text-white rounded-xl p-8 mb-8">
              <p className="text-lg mb-2">Your Score</p>
              <p className="text-6xl font-bold mb-2">{score}/{sampleQuestions.length}</p>
              <p className="text-2xl">{percentage.toFixed(0)}%</p>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <Award className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-semibold text-gray-900">+{selectedQuiz.points} Eco Points Earned!</span>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={resetQuiz} className="btn-secondary">Back to Quizzes</button>
              <button onClick={() => startQuiz(selectedQuiz)} className="btn-primary">Retry Quiz</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Interactive Quizzes</h1>
          <p className="text-gray-600">Test your environmental knowledge and earn points!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map(quiz => (
            <div key={quiz.id} className="card hover:scale-105 transition-transform">
              {quiz.completed && (
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">✓ Completed</div>
              )}
              <div className="flex items-start justify-between mb-3">
                <span className="badge bg-purple-100 text-purple-800">{quiz.category}</span>
                <span className={`badge ${quiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' : quiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {quiz.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{quiz.title}</h3>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{quiz.questions} Questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{quiz.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>{quiz.points} Points</span>
                </div>
              </div>

              <button onClick={() => startQuiz(quiz)} className="w-full btn-primary">
                {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;