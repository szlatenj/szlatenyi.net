'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

export default function Protected() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      router.push('/login');
    }
    setIsLoading(false);
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-12rem)]">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login page via useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Welcome to the Protected Area</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Private Content</h2>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-6 py-2 transition-all duration-300 text-sm"
            >
              Log Out
            </button>
          </div>
          
          <p className="text-white/90 mb-6">
            This is a protected area of the website that contains private content. You have successfully authenticated.
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Personal Notes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Meeting with investors scheduled for next Tuesday at 2 PM</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Review quarterly financial reports by end of month</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Follow up with potential partners from the London conference</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Schedule team building event for Hermes Finances staff</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Projects</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Hermes Finances Website Redesign</h4>
                <p className="text-white/80 text-sm">Launch date: June 15, 2025</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">UI/UX</span>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Branding</span>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Development</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Midas Finances Mobile App</h4>
                <p className="text-white/80 text-sm">Launch date: August 30, 2025</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Mobile</span>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">React Native</span>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-full">API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 