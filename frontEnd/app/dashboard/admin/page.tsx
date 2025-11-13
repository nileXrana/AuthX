'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (user && user.role !== 'Admin') {
      router.push('/dashboard/user');
    }
  }, [user, router]);

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
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome, <span className="text-yellow-300">{user?.name}</span>
                </h1>
                <p className="text-purple-100 mt-1">
                  Role: <span className="font-medium text-white">{user?.role} Dashboard</span>
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
          {/* Admin Alert */}
          <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-amber-800">
              <span className="font-bold">Admin Access:</span> You have elevated privileges and can manage system resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                  👥
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl">
                  ✅
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">System Health</p>
                  <p className="text-3xl font-bold text-green-600">99.9%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl">
                  🟢
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Admin Users</p>
                  <p className="text-3xl font-bold text-purple-600">3</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
                  👑
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Admin Account Info */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Admin Account</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-600">Admin Name</p>
                  <p className="text-lg font-medium text-gray-900">{user?.name}</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-600">Admin Email</p>
                  <p className="text-lg font-medium text-gray-900">{user?.email}</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-600">Access Level</p>
                  <div className="flex items-center mt-1">
                    <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
                      {user?.role}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="text-lg font-medium text-gray-900">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Permissions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Permissions</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Manage Users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">System Configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">View Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Manage Roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Access Logs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-gray-700">Full System Control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Admin Actions */}
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="font-medium text-gray-900">View Analytics</p>
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center">
                <div className="text-2xl mb-2">👥</div>
                <p className="font-medium text-gray-900">Manage Users</p>
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <p className="font-medium text-gray-900">System Settings</p>
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center">
                <div className="text-2xl mb-2">📝</div>
                <p className="font-medium text-gray-900">View Logs</p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
