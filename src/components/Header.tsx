'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/about" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
            Janos Szlatenyi
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
              About
            </Link>
            <Link href="/companies" className="text-white hover:text-gray-200 transition-colors">
              Business
            </Link>
            <Link href="/cv" className="text-white hover:text-gray-200 transition-colors">
              CV
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
              Contact
            </Link>
            {isAuthenticated ? (
              <Link href="/protected" className="text-white hover:text-gray-200 transition-colors">
                Dashboard
              </Link>
            ) : (
              <Link href="/login" className="text-white hover:text-gray-200 transition-colors">
                Login
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/70 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/companies" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                href="/cv" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CV
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isAuthenticated ? (
                <Link 
                  href="/protected" 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 