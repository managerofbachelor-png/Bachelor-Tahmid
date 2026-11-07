import React from 'react';
import { Home, Utensils, ShoppingBag, Users, Compass, PlayCircle } from 'lucide-react';
import { CONTENT_PILLARS } from '../data/creator';

export const WhatIMake: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#D4FF3F]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#FF6B00]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#D4FF3F]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#FF6B00]" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-[#D4FF3F]" />;
    }
  };

  return (
    <section id="what-i-make" className="py-20 relative bg-[#0A0A12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with quiet text kicker (No pills) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono text-[#D4FF3F] tracking-widest uppercase mb-2">
            05 / Content Pillars
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            WHAT I <span className="text-[#D4FF3F]">MAKE</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base mt-2">
            Five core storytelling pillars that define the Bachelor Tahmid channel.
          </p>
        </div>

        {/* 5 Content Pillar Cards - Flattened Single Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`rounded-xl p-6 bg-[#101018] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header: Icon and Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="font-display text-2xl text-zinc-600 font-bold">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-lg text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Sample Video Callout - Flattened direct divider without nested card box */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                  Sample Video
                </span>
                <a
                  href="https://www.youtube.com/@BachelorTahmid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-zinc-200 hover:text-white hover:underline"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-[#FF0000] shrink-0" />
                  <span className="line-clamp-1">"{pillar.sampleVideo}"</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
