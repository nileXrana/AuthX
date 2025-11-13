'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (isLoggingOut && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoggingOut, isAuthenticated, router]);

  const handleLogout = () => {
    setIsLoggingOut(true);
    logout();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome, <span className="text-blue-600">{user?.name}</span>
                </h1>
                <p className="text-gray-600 mt-1">
                  Role: <span className="font-medium text-gray-900">{user?.role}</span>
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Welcome Card */}
            <div className="md:col-span-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Hello, {user?.name}! 👋</h2>
              <p className="text-gray-700">
                You are logged in as a <span className="font-semibold text-blue-600">{user?.role}</span>. 
                This is your personal dashboard where you can manage your account.
              </p>
            </div>

            {/* Account Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Account Info
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Role</p>
                  <p className="text-gray-900 font-medium">{user?.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="text-gray-900 font-medium">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-gray-700 font-medium">Account Status</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="text-gray-700 font-medium">Access Level</span>
                  <span className="text-blue-600 font-semibold">{user?.role}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Manage Profile
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  View Settings
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Access History
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
