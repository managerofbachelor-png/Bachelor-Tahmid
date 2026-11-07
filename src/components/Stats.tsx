import React, { useEffect, useState, useRef } from 'react';
import { VERIFIED_STATS } from '../data/creator';

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'yt-subs': 0,
    'yt-videos': 0,
    'yt-views': 0,
    'ig-views-30d': 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);

          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts({
              'yt-subs': Math.floor(601 * easeProgress),
              'yt-videos': Math.floor(295 * easeProgress),
              'yt-views': Math.floor(370853 * easeProgress),
              'ig-views-30d': Math.floor(101300 * easeProgress),
            });

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts({
                'yt-subs': 601,
                'yt-videos': 295,
                'yt-views': 370853,
                'ig-views-30d': 101300,
              });
            }
          }, frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getDisplayValue = (id: string, current: number) => {
    if (id === 'ig-views-30d') {
      return (current / 1000).toFixed(1) + 'K';
    }
    if (id === 'yt-views') {
      return current.toLocaleString();
    }
    return current.toString();
  };

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 relative bg-[#08080C] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with quiet text kicker (No pills) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono text-[#D4FF3F] tracking-widest uppercase mb-2">
            02 / Verified Public Metrics
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            REAL NUMBERS. <br />
            <span className="text-[#D4FF3F]">NO INVENTED HYPE.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-3">
            Public profile data recorded on <strong className="text-zinc-200">7 November 2026</strong>. No guesswork, no exaggerated marketing claims.
          </p>
        </div>

        {/* 4 Clean Stat Cards with consistent rounded-xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-xl p-6 bg-[#101018] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                  <span>{stat.id.startsWith('yt') ? 'YouTube Hub' : 'Instagram Reels'}</span>
                  <span>{stat.date}</span>
                </div>

                {/* Animated Number */}
                <div className="font-display text-5xl sm:text-6xl text-white leading-none tracking-tight mb-2">
                  {getDisplayValue(stat.id, counts[stat.id] || 0)}
                </div>

                <h3 className="font-headline font-bold text-base text-zinc-200 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Verified</span>
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4FF3F] hover:underline"
                >
                  Verify Link ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Context metadata line */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400 max-w-4xl mx-auto">
          <span>Source: YouTube @BachelorTahmid &amp; SocialCounts snapshot (7 Nov 2026)</span>
          <span className="text-zinc-300">Instagram @bachelortahmid: 922 Followers · 63 Posts</span>
        </div>
      </div>
    </section>
  );
};
