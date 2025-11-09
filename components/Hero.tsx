"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
       {/* Animated Background Elements - Matching Logo Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1e5f5a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#2d5a3d]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-[#c85a25]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading (RESPONSIVE) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 tracking-tight leading-tight animate-fade-in-up">
            Your Launchpad for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a]">
              Innovation
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c85a25] to-[#d97638]">
              Growth
            </span>
            , and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5f5a] to-[#2d8b84]">
              Community
            </span>
          </h1>

          {/* Subtitle (RESPONSIVE) */}
          <p className="mt-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Welcome to the <span className="font-bold text-[#2d5a3d]">Eco Zone Club</span>. 
            Discover your potential, build new skills, and grow with a vibrant community of creators and leaders.
          </p>

          {/* CTA Buttons (UPDATED - SMALLER) */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up [animation-delay:0.3s]">
            <Button 
              asChild 
              size="lg" 
              className="group bg-gradient-to-r from-[#c85a25] to-[#d97638] hover:from-[#d97638] hover:to-[#c85a25] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base px-8 py-6 rounded-xl font-bold"
            >
              <Link href="#join-section" className="flex items-center justify-center space-x-2">
                <span>Join the Club</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group border-2 border-[#2d5a3d] text-[#2d5a3d] bg-white hover:bg-[#2d5a3d] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base px-8 py-6 rounded-xl font-semibold"
            >
              <Link href="#about" className="flex items-center justify-center space-x-2">
                <span>View Upcoming Events</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Simple Stats Section Removed */}
          
        </div>
      </div>
    </section>
  );
}

export default Hero;