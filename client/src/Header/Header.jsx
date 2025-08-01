import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Court Data Fetcher
              </h1>
              <p className="text-xs text-amber-200 font-medium">Legal Research Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-amber-200 hover:text-white transition-all duration-200 text-sm font-medium hover:scale-105">
              About
            </a>
            <a href="#features" className="text-amber-200 hover:text-white transition-all duration-200 text-sm font-medium hover:scale-105">
              Features
            </a>
            <a href="#api" className="text-amber-200 hover:text-white transition-all duration-200 text-sm font-medium hover:scale-105">
              API Docs
            </a>
            <a href="#help" className="text-amber-200 hover:text-white transition-all duration-200 text-sm font-medium hover:scale-105">
              Help
            </a>
          </nav>

          {/* Status and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center space-x-2 bg-slate-800/50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-amber-200 font-medium">System Online</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/50 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 rounded-md text-amber-200 hover:text-white hover:bg-slate-700/50 transition-colors text-sm font-medium">
                About
              </a>
              <a href="#features" className="block px-3 py-2 rounded-md text-amber-200 hover:text-white hover:bg-slate-700/50 transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#api" className="block px-3 py-2 rounded-md text-amber-200 hover:text-white hover:bg-slate-700/50 transition-colors text-sm font-medium">
                API Docs
              </a>
              <a href="#help" className="block px-3 py-2 rounded-md text-amber-200 hover:text-white hover:bg-slate-700/50 transition-colors text-sm font-medium">
                Help
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Info Banner */}
      <div className="bg-gradient-to-r from-slate-800/80 to-amber-800/80 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-amber-200 font-medium">
                Search court records, case information, and legal documents across multiple jurisdictions
              </p>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-600/50 text-amber-200">
                  Beta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 