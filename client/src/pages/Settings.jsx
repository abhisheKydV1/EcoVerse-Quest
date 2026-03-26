import { User, Bell, Lock, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-lg text-gray-600">Manage your account preferences</p>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue="Alex Johnson" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue="alex@example.com" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Bell className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            </div>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-gray-700">Challenge reminders</span>
              </label>
            </div>
          </div>

          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;