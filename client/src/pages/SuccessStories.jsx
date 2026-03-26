import { Star, Heart, Share2, Award } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: 'School Goes Completely Plastic-Free',
      author: 'Green Valley School, Mumbai',
      story: 'Our school eliminated all single-use plastics in just 6 months. We replaced plastic water bottles with steel ones, banned plastic bags, and started using biodegradable alternatives.',
      impact: 'Saved 50,000+ plastic items from landfills',
      date: 'Oct 2024',
      likes: 456,
      image: '🏫'
    },
    {
      id: 2,
      title: 'Student-Led Rooftop Solar Project',
      author: 'Rahul Kumar, Class 12',
      story: 'Led a campaign to install solar panels on our school roof. After 8 months of fundraising and planning, we now generate 40% of our school\'s electricity from solar power.',
      impact: 'Reduces 5 tons of CO₂ annually',
      date: 'Sep 2024',
      likes: 678,
      image: '☀️'
    },
    {
      id: 3,
      title: 'Community Garden Transforms Wasteland',
      author: 'Eco Warriors Club, Delhi',
      story: 'Converted an abandoned plot into a thriving community garden. Students grow organic vegetables and donate produce to local food banks.',
      impact: '500kg organic food grown, 200+ trees planted',
      date: 'Aug 2024',
      likes: 534,
      image: '🌻'
    },
    {
      id: 4,
      title: 'Zero Waste Cafeteria Initiative',
      author: 'Priya Sharma, Environmental Captain',
      story: 'Implemented composting, reusable plates, and waste segregation in our school cafeteria. Food waste reduced by 80% in first year.',
      impact: 'Diverted 2 tons of waste from landfills',
      date: 'Jul 2024',
      likes: 389,
      image: '♻️'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Success Stories</h1>
          <p className="text-lg text-gray-600">Inspiring environmental achievements from our community</p>
        </div>

        {/* Stories List */}
        <div className="space-y-6">
          {stories.map((story) => (
            <div key={story.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="text-8xl">{story.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-500">{story.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h2>
                  <p className="text-sm text-primary-600 font-semibold mb-3">{story.author}</p>
                  <p className="text-gray-700 mb-4">{story.story}</p>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-900">Impact</span>
                    </div>
                    <p className="text-green-800">{story.impact}</p>
                  </div>

                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">{story.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Story CTA */}
        <div className="card bg-gradient-to-r from-primary-500 to-green-500 text-white text-center mt-8">
          <h3 className="text-2xl font-bold mb-2">Have Your Own Success Story?</h3>
          <p className="mb-4">Share your environmental achievements and inspire others!</p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;