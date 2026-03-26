import { Shield, Lock, Eye, FileText, AlertTriangle, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Privacy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy & Safety</h1>
          <p className="text-lg text-gray-600">Your privacy and safety are our top priorities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'privacy'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'safety'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Safety & Security
          </button>
        </div>

        {/* Privacy Tab Content */}
        {activeTab === 'privacy' && (
        <div className="space-y-6">
        <div className="card mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="flex items-center space-x-4">
            <Shield className="h-16 w-16" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Privacy Matters</h2>
              <p>We are committed to protecting your personal information and your right to privacy.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="flex items-start space-x-3 mb-4">
              <FileText className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                <p className="text-gray-600 mb-3">We collect information that you provide directly to us, including:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Name, email address, and contact information</li>
                  <li>• School/college information and grade level</li>
                  <li>• Profile information and preferences</li>
                  <li>• Activity data including challenges completed and quiz scores</li>
                  <li>• User-generated content like photos and comments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-3 mb-4">
              <Eye className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 mb-3">We use the information we collect to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide, maintain, and improve our services</li>
                  <li>• Personalize your learning experience</li>
                  <li>• Track your progress and achievements</li>
                  <li>• Send you updates, newsletters, and educational content</li>
                  <li>• Respond to your comments and questions</li>
                  <li>• Protect against fraudulent or illegal activity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-3 mb-4">
              <Lock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                <p className="text-gray-600 mb-3">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Restricted access to personal information</li>
                  <li>• Secure authentication mechanisms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p className="text-gray-600 mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Export your data</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
            <p className="text-gray-600">
              We take special care to protect the privacy of children under 13. Parental consent is required 
              for children to use our platform. We do not knowingly collect personal information from children 
              without parental consent.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to improve your experience, analyze usage, 
              and personalize content. You can control cookies through your browser settings.
            </p>
          </div>

          <div className="card bg-yellow-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> privacy@ecolearn.com<br />
              <strong>Phone:</strong> +91 1800-123-4567
            </p>
          </div>
        </div>
        </div>
        )}

        {/* Safety Tab Content */}
        {activeTab === 'safety' && (
          <div className="space-y-6">
            <div className="card bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <div className="flex items-center space-x-4">
                <Shield className="h-16 w-16" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Safe Learning Environment</h2>
                  <p>We provide a secure and monitored platform for students to learn and interact.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-3 mb-4">
                <Lock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Account Security</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Strong password requirements with encryption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Two-factor authentication available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Automatic logout after inactivity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-3 mb-4">
                <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Community Guidelines</h2>
                  <p className="text-gray-600 mb-3">To maintain a safe and respectful community:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Be respectful and kind to all members</li>
                    <li>• No bullying, harassment, or hate speech</li>
                    <li>• No sharing of personal information (address, phone number)</li>
                    <li>• Report inappropriate content immediately</li>
                    <li>• Follow teacher and moderator instructions</li>
                    <li>• Keep discussions focused on environmental topics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-3 mb-4">
                <Eye className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Content Moderation</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>All user-generated content is monitored</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>AI-powered content filtering</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Human moderators review flagged content</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Teachers can monitor student activity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-red-50">
              <div className="flex items-start space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Report Safety Concerns</h2>
                  <p className="text-gray-600 mb-3">
                    If you encounter any safety issues, inappropriate content, or suspicious behavior:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use the "Report" button on any content</li>
                    <li>• Contact your teacher or school administrator</li>
                    <li>• Email our safety team: safety@ecolearn.com</li>
                    <li>• Call our safety hotline: +91 1800-SAFE-123</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Parental Controls</h2>
              <p className="text-gray-600 mb-3">Parents and guardians can:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitor their child's activity and progress</li>
                <li>• Control privacy settings and visibility</li>
                <li>• Restrict communication features</li>
                <li>• Receive activity reports and notifications</li>
                <li>• Request account deletion at any time</li>
              </ul>
            </div>

            <div className="card bg-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Safety Tips for Students</h2>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Never share your password with anyone</li>
                <li>✓ Don't share personal information online</li>
                <li>✓ Be kind and respectful to others</li>
                <li>✓ Tell a trusted adult if something makes you uncomfortable</li>
                <li>✓ Think before you post - once online, always online</li>
                <li>✓ Use strong, unique passwords</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Privacy;