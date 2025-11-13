'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AuthX</h1>
            <div className="space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-[90vh] flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Role-Based Authentication System
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            A modern full-stack application with role-based authentication, 
            secure JWT tokens, and separate user and admin dashboards.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium text-lg transition"
            >
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-medium text-lg transition"
            >
              Sign In
            </Link>
          </div> 
          </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-20 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-gray-600">
          <div></div>
          <p className="text-sm"><span className="font-bold">Built with</span> Next.js &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; React &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; TypeScript &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; TailwindCSS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Express.js &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Node.js &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; MongoDB &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; JWT</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/nilexrana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              title="Visit GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/nilexrana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              title="Visit LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.787 0-9.7h3.554v1.373c.43-.664 1.195-1.61 2.905-1.61 2.121 0 3.71 1.386 3.71 4.363v5.574zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.714 0-.952.77-1.715 1.974-1.715 1.203 0 1.914.763 1.938 1.715 0 .952-.735 1.714-1.997 1.714zm1.946 10.019H3.391V9.752h3.892v9.7zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
