"use client"

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ezc-green text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold text-white mb-2">Eco Zone Club</h5>
            <p className="max-w-xs">Your launchpad for innovation, code, and community.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Instagram</a>
          </div>
        </div>
        <div className="mt-8 border-t border-green-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Eco Zone Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;