import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { TOP_VIRAL_REELS } from '../data/creator';
import { InstagramLogo } from './SocialLogos';

export const ViralReels: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reels" className="py-20 relative bg-[#0A0A12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] tracking-widest uppercase mb-2">
              03 / Viral Proof
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              THE VIDEOS THAT <span className="text-[#FF6B00]">BLEW UP</span>
            </h2>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-xl mt-2">
              Short-form moments that went viral across Dhaka. Organic view counts recorded from Instagram Reels.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2.5 rounded-lg bg-[#14141E] border border-white/10 hover:border-white/30 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-label="Scroll left through viral reels"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2.5 rounded-lg bg-[#14141E] border border-white/10 hover:border-white/30 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              aria-label="Scroll right through viral reels"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Cards Container - Flattened Single Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TOP_VIRAL_REELS.map((reel) => (
          <a
            key={reel.rank}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-none w-[280px] sm:w-[300px] snap-start rounded-xl bg-[#101018] border border-white/10 hover:border-white/30 p-6 flex flex-col justify-between transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
          >
            <div>
              {/* Header: Rank and Category (No pills) */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                <span>#{reel.rank.toString().padStart(2, '0')}</span>
                <span className="text-zinc-400 uppercase">{reel.tag}</span>
                <InstagramLogo className="w-4 h-4 flex-shrink-0" />
              </div>

              {/* View Count Display */}
              <div className="font-display text-5xl text-white group-hover:text-[#D4FF3F] transition-colors leading-none mb-3">
                {reel.views}
              </div>

              {/* Reel Title */}
              <h3 className="text-zinc-200 font-sans font-medium text-sm leading-snug line-clamp-3 mb-6">
                "{reel.title}"
              </h3>
            </div>

            {/* Bottom Metadata & Link */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>@bachelortahmid</span>
              <span className="text-[#D4FF3F] flex items-center gap-1 group-hover:underline">
                Watch Reel <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
