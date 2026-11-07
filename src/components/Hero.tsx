import React, { useState } from 'react';
import { ArrowDown, MapPin, Flame } from 'lucide-react';
import { CREATOR_INFO } from '../data/creator';
import { YouTubeLogo, InstagramLogo } from './SocialLogos';

export const Hero: React.FC = () => {
  // Desktop 3D Card tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden"
    >
      {/* Mobile Safe Background Layer: 13122025_204220.Mobile_Dslr.NIGHT */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/assets/aistudio/13122025_204220.Mobile_Dslr.NIGHT_3e02c4d8.jpg"
          alt="Bachelor Tahmid Dhaka Night Street Food"
          className="w-full h-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#08080C]/90 to-[#08080C]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Unboxed Metadata Kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-5 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
              <span className="text-[#D4FF3F] font-semibold">Raw Dhaka Vlogger</span>
              <span className="text-zinc-600">/</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Mirpur-12, Dhaka
              </span>
            </div>

            {/* Giant Display Name */}
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.88] uppercase mb-5">
              BACHELOR <br />
              <span className="text-[#D4FF3F]">TAHMID</span>
            </h1>

            {/* Grouped Bio & Quote with Intentional Spacing */}
            <div className="space-y-3 mb-8 max-w-xl">
              <p className="font-headline font-bold text-lg sm:text-xl text-zinc-200 tracking-wide">
                {CREATOR_INFO.subline}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans italic border-l-2 border-[#D4FF3F] pl-4 py-1 leading-relaxed">
                "{CREATOR_INFO.tagline}"
              </p>
              <p className="text-xs text-zinc-400 font-sans pt-1">
                Full name: <span className="text-zinc-200 font-semibold">{CREATOR_INFO.fullName}</span> · Aeronautical Engineering Student @ UCASM Dhaka
              </p>
            </div>

            {/* Two Primary Action Buttons with consistent radius */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="https://www.youtube.com/@BachelorTahmid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#FF0000] text-white font-mono font-bold text-xs tracking-wider uppercase hover:bg-[#e00000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg shadow-[#FF0000]/20"
              >
                <YouTubeLogo className="w-5 h-5 flex-shrink-0" />
                <span>Watch on YouTube</span>
              </a>

              <a
                href="https://www.instagram.com/bachelortahmid/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#14141E] border border-white/20 text-white font-mono font-bold text-xs tracking-wider uppercase hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
              >
                <InstagramLogo className="w-5 h-5 flex-shrink-0" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Small Proof Row */}
            <div className="w-full pt-5 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-400">
              <span className="text-zinc-200">
                <strong className="text-[#D4FF3F] font-bold">601</strong> YouTube subs
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-200">
                <strong className="text-white font-bold">295</strong> videos
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-200">
                <strong className="text-[#FF6B00] font-bold">101.3K</strong> views in 30 days
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-500">Checked 7 Nov 2026</span>
            </div>

            {/* Mobile Fallback Card: Centered Suit Portrait */}
            <div className="lg:hidden mt-8 w-full max-w-sm mx-auto">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-[#101018]">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/assets/aistudio/IMG-20260203-WA0024_d2e4011f.jpg"
                    alt="Tahmid in suit"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold">Bachelor Tahmid</span>
                    <span className="text-zinc-400">@bachelortahmid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop): Main Hero Cinematic Portrait IMG-20260203-WA0168 (Flattened Single Card) */}
          <div className="hidden lg:block lg:col-span-5">
            <div
              className="relative perspective-1000 group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Flattened Single Card with crisp border and consistent rounded-xl */}
              <div
                className="rounded-xl overflow-hidden bg-[#101018] border border-white/15 transition-transform duration-200 ease-out preserve-3d"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A12]">
                  <img
                    src="/assets/aistudio/IMG-20260203-WA0168_4547be9d.jpg"
                    alt="Bachelor Tahmid in black jacket in front of Bengali text wall in Dhaka"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Clean shadow overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                  {/* Integrated bottom caption bar */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-display text-2xl text-white tracking-wide leading-none">
                        THAFAZZAL ISLAM THAMED
                      </p>
                      <span className="flex items-center gap-1 text-[#FF6B00] text-xs font-mono font-semibold">
                        <Flame className="w-3.5 h-3.5" />
                        201K Reel
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 font-sans line-clamp-1">
                      Raw bachelor life, street food hunts &amp; real Dhaka stories
                    </p>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D4FF3F]" />
                        Mirpur-12, Dhaka
                      </span>
                      <span className="text-zinc-500">3D Tilt on Hover</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator with no unnecessary bounce loops */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <a
            href="#marquee"
            className="group inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-[#D4FF3F] transition-colors focus-visible:outline-none focus-visible:text-[#D4FF3F]"
            aria-label="Scroll to explore Bachelor Tahmid content"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Explore The Dhaka Life</span>
            <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:text-[#D4FF3F] transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
