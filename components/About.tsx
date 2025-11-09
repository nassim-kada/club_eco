"use client"
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements - Matching Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-10 sm:-right-40 w-32 h-32 sm:w-96 sm:h-96 bg-[#1e5f5a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-10 sm:-left-40 w-28 h-28 sm:w-80 sm:h-80 bg-[#2d5a3d]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-72 sm:h-72 bg-[#c85a25]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Bigger */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c85a25] to-[#d97638]">
            About Us
          </h2>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Community-driven club fostering growth, innovation, and connection.
          </p>
        </div>

        {/* Ultra Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 animate-fade-in-up [animation-delay:0.2s]">
          
          {/* Column 1: Our Vision */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#1e5f5a]/10">
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 bg-gradient-to-br from-[#1e5f5a] to-[#2d8b84] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#1a524e] mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Central hub for innovation on campus, launching ventures and developing tech talent.
                </p>
              </div>
            </div>
          </div>
          
          {/* Column 2: Our Mission - Blue Theme */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/10">
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 bg-gradient-to-br from-[#1a5c61] to-[#2963df] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-[#134e52] to-[#2963df] bg-clip-text text-transparent mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Dynamic environment for students to explore entrepreneurship and master technologies.
                </p>
              </div>
            </div>
          </div>
          
          {/* Column 3: Our Values */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c85a25]/10">
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 bg-gradient-to-br from-[#c85a25] to-[#d97638] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#c85a25] mb-2">Our Values</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-[#2d5a3d]">Community:</strong> Inclusive & collaborative
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-[#1e5f5a]">Growth:</strong> Continuous learning
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-[#2d5a3d]">Innovation:</strong> Bold & creative
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;