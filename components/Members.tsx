"use client"
import React, { useState } from 'react';
import Image from 'next/image';

type Member = {
  name: string;
  role: string;
  delay: string;
  initials: string;
  color: string;
  image?: string;
};

const members: Member[] = [
  { name: 'Ouail Yasmine Nourhane', role: 'President', delay: '0.1s', initials: 'OY', color: 'from-[#2d5a3d] to-[#1e5f5a]',image:'/yasmine.jpg' },
  { name: 'Yanis Benamara', role: 'Vice President', delay: '0.2s', initials: 'YB', color: 'from-[#1e5f5a] to-[#2d8b84]' },
  { name: 'Nassim Kada', role: 'Engineer & Technology Manager', delay: '0.3s', initials: 'NK', color: 'from-[#c85a25] to-[#d97638]', image: '/nassim.png' },
  { name: 'Ikram Kara', role:'Handmade Activities',delay:'0.4s',initials:'IK',color:'from-[#323A5C] to-[#5D3954]' ,image:'ikram.jpg'},
  { name: 'Anis Hammad', role: 'Secretary General', delay: '0.5s',initials:'AH', color:'from-[#1a5c61] to-[#2963df]' },
  { name: 'Sarah Aissaoui',role:'Media Representative',delay:'0.6s',initials:'SA',color:'from-[#2d5a3d] to-[#1e5f5a]'},
  { name: 'Yasser Mokrani',role:'Internal & External Relations Officer',delay:'0.7s', initials:'YM',color:'from-[#2d5a3d] to-[#1e5f5a]'},
  { name: 'Aya Lounis',role:'Voice-over Artist',delay:'0.8s',initials:'AL',color:'from-[#2d5a3d] to-[#1e5f5a]'},
  { name: 'Nacim Amanzougaghene',role:'Designer',delay:'0.9s',initials:'NA',color:'from-[#2d5a3d] to-[#1e5f5a]',image:'/nassim_designer.png'},
  { name: 'Mahdi Aitzekagh',role:'Media Manager',delay:'1s',initials:'MA',color:'from-[#2d5a3d] to-[#1e5f5a]'},
];

const Members: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  return (
    <section id="members" className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 sm:-left-40 w-32 h-32 sm:w-96 sm:h-96 bg-[#2d5a3d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 sm:-right-40 w-28 h-28 sm:w-80 sm:h-80 bg-[#c85a25]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-72 sm:h-72 bg-[#1e5f5a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
·
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c85a25] to-[#d97638]">
            Meet Our Team
          </h2>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The heart of our club is our diverse and passionate community.
          </p>
        </div>

        {/* Members Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows - Only visible on mobile */}
          <button
            onClick={prevMember}
            className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous member"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextMember}
            className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next member"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile: Single card carousel */}
          <div className="lg:hidden overflow-visible">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {members.map((member) => (
                <div key={member.name} className="w-full flex-shrink-0 px-4">
                  <div className="relative pt-20">
                    {/* Avatar with Gradient Background or Image - Positioned outside card */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-6 h-28 w-28 rounded-full ${!member.image ? `bg-gradient-to-br ${member.color}` : 'bg-gray-200'} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 z-10 overflow-hidden`}>
                      {member.image ? (
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover rounded-full"
                          unoptimized
                        />
                      ) : (
                        <span className="text-white text-2xl font-bold">{member.initials}</span>
                      )}
                    </div>
                    
                    <div className="group bg-white/60 backdrop-blur-sm rounded-xl pt-20 pb-8 px-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 text-center min-h-[200px]">
                      {/* Member Info */}
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="mt-2 text-base text-gray-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden lg:grid grid-cols-3 gap-10">
            {members.map((member) => (
              <div 
                key={member.name} 
                className="group bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 text-center animate-fade-in-up transform hover:scale-105" 
                style={{ animationDelay: member.delay }}
              >
                {/* Avatar with Gradient Background or Image */}
                <div className={`mx-auto h-32 w-32 rounded-full ${!member.image ? `bg-gradient-to-br ${member.color}` : 'bg-gray-200'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      unoptimized
                    />
                  ) : (
                    <span className="text-white text-4xl font-bold">{member.initials}</span>
                  )}
                </div>
                
                {/* Member Info */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-lg text-gray-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Dots indicator for mobile */}
          <div className="lg:hidden flex justify-center gap-2 mt-6">
            {members.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#c85a25]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;