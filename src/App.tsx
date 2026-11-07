import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { ViralReels } from './components/ViralReels';
import { LatestVlogs } from './components/LatestVlogs';
import { WhatIMake } from './components/WhatIMake';
import { FollowEverywhere } from './components/FollowEverywhere';
import { ContactFooter } from './components/ContactFooter';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08080C] text-[#F3F4F6] overflow-x-hidden selection:bg-[#D4FF3F] selection:text-black">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#D4FF3F] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Subtle Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" aria-hidden="true" />

      {/* Floating 3D Three.js Canvas in Hero Background */}
      <ThreeCanvas />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* 1. Hero */}
        <Hero />

        {/* 2. Marquee */}
        <Marquee />

        {/* 3. About / Who is Tahmid */}
        <About />

        {/* 4. Stats */}
        <Stats />

        {/* 5. Viral Reels */}
        <ViralReels />

        {/* 6. Latest Vlogs */}
        <LatestVlogs />

        {/* 7. What I Make */}
        <WhatIMake />

        {/* 8. Follow Everywhere */}
        <FollowEverywhere />

        {/* 9. Footer CTA & Direct Contact */}
        <ContactFooter />
      </div>
    </div>
  );
}
