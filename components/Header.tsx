"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Eco Zone Club Logo" 
                className="h-24 w-32 rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
                {/*  this section is only for the best in the world i will be the world*/}
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Button 
              variant="ghost" 
              asChild 
              className="font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50 transition-all duration-200"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50 transition-all duration-200"
            >
              <Link href="#about">About Us</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50 transition-all duration-200"
            >
              <Link href="#members">Members</Link>
            </Button>
            
            <Button 
              asChild 
              className="ml-4 bg-gradient-to-r from-ezc-green to-ezc-teal hover:from-ezc-teal hover:to-ezc-green text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#join-section">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#about">About Us</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start font-medium text-gray-700 hover:text-ezc-teal hover:bg-green-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#members">Members</Link>
            </Button>
            
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-ezc-green to-ezc-teal hover:from-ezc-teal hover:to-ezc-green text-white shadow-md mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#join-section">Join Us</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;