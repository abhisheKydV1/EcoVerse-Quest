import { HelpCircle, Search } from 'lucide-react';

const Help = () => {
  const faqs = [
    { q: 'How do I earn eco-points?', a: 'Complete daily challenges, quizzes, and participate in events.' },
    { q: 'How do I redeem rewards?', a: 'Visit the Rewards Store and exchange your points for items.' },
    { q: 'Can I join multiple teams?', a: 'No, you can only be part of one team at a time.' },
    { q: 'How do streaks work?', a: 'Log in daily and complete at least one activity to maintain your streak.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Help Center</h1>
          <p className="text-lg text-gray-600">Find answers to common questions</p>
        </div>

        <div className="card mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <div className="flex items-start space-x-3">
                <HelpCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;