"use client";
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero'; 
import About from '@/components/About'; 
import Members from '@/components/Members'; 
import JoinForm from '@/components/JoinForm';
import Footer from '@/components/Footer'; 



export default function Home() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-teal-50 to-orange-50/30 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <JoinForm />
      </main>
      <Footer />
    </div>
  );
}