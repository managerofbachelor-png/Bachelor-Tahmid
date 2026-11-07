import React, { useState } from 'react';
import { MapPin, GraduationCap, Camera, ExternalLink, X } from 'lucide-react';
import { CREATOR_INFO, GALLERY_PHOTOS } from '../data/creator';

export const About: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 relative bg-[#0A0A12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with quiet text kicker (No pills) */}
        <div className="mb-12">
          <div className="text-xs font-mono text-[#D4FF3F] tracking-widest uppercase mb-2">
            01 / The Bachelor Story
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            WHO IS <span className="text-[#D4FF3F]">TAHMID?</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-2">
            Living the real Dhaka student and bachelor experience on camera — raw, unfiltered, and unapologetically real.
          </p>
        </div>

        {/* Grid: Flattened Story & Large Navy Suit Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Flattened Portrait Card IMG-20260203-WA0024 */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden bg-[#101018] border border-white/15">
              <div className="aspect-[3/4] relative bg-[#08080C]">
                <img
                  src="/assets/aistudio/IMG-20260203-WA0024_d2e4011f.jpg"
                  alt="Thafazzal Islam Thamed in navy suit and tie sitting in green chair"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-display text-2xl tracking-wide leading-none">
                    {CREATOR_INFO.fullName}
                  </h3>
                  <p className="text-xs font-mono text-[#D4FF3F] mt-1">
                    Aeronautical Engineering Student @ UCASM
                  </p>
                </div>
              </div>

              {/* Verified name caption bar */}
              <div className="p-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Display: <strong className="text-zinc-200">Thafazzal Islam Thamed</strong></span>
                <span className="text-zinc-500">IG: Thufazzal Islam Tahmid</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grouped Story and Credentials without card-in-card nesting */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl p-6 bg-[#101018] border border-white/10">
              <h3 className="font-headline font-bold text-xl text-white mb-3">
                "No script. No filter. Just real life."
              </h3>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-4">
                {CREATOR_INFO.youtubeBio}
              </p>
              <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                Based out of <strong className="text-zinc-200">Mirpur-12, Dhaka</strong>, Tahmid started documenting what it actually feels like to be a young bachelor in Bangladesh — from finding the cheapest second-hand denim in underground thrift markets to late-night street food hunts and honest student life observations.
              </p>
            </div>

            {/* Academic Background - Flattened clean rows */}
            <div className="rounded-xl p-6 bg-[#101018] border border-white/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <GraduationCap className="w-4 h-4 text-[#D4FF3F]" />
                <h3 className="font-headline font-bold text-base text-white">
                  Academic Background
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CREATOR_INFO.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>{edu.period}</span>
                      <span className="text-[#D4FF3F] font-semibold">{edu.status}</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                    <p className="text-zinc-400 text-xs font-mono">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Linktree bar */}
            <div className="rounded-xl p-4 bg-[#101018] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4FF3F]" />
                <div className="text-xs font-mono text-zinc-300">
                  <span className="text-zinc-500 uppercase mr-1.5">Base:</span>
                  Mirpur-12, Dhaka, Bangladesh
                </div>
              </div>
              <a
                href="https://linktr.ee/bachelortahmid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-medium text-white transition-colors"
              >
                <span>View Linktree</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Dhaka Life Real Photo Gallery Strip (Flattened cards with consistent radius) */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#D4FF3F]" />
              <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                Dhaka Moments Gallery
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              5 Real Dhaka Photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {GALLERY_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo.src)}
                className="group rounded-xl overflow-hidden bg-[#101018] border border-white/10 hover:border-white/30 cursor-pointer transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-mono text-white font-semibold line-clamp-1">
                    {photo.title}
                  </p>
                  <p className="text-[11px] text-zinc-400 font-sans line-clamp-1 mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for photo expand */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Dhaka life photo"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-3xl max-h-[85vh] rounded-xl overflow-hidden border border-white/20 bg-black">
            <img
              src={activePhoto}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5 mr-1" />
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
