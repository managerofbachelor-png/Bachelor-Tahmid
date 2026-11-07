import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SOCIAL_PLATFORMS } from '../data/creator';
import { getSocialLogo } from './SocialLogos';

export const FollowEverywhere: React.FC = () => {
  return (
    <section id="socials" className="py-20 relative bg-[#08080C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with quiet text kicker (No pills) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono text-[#D4FF3F] tracking-widest uppercase mb-2">
            06 / Creator Profiles
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            FOLLOW <span className="text-[#D4FF3F]">EVERYWHERE</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base mt-2">
            All 8 official Bachelor Tahmid social profiles. Direct links only, zero dead ends.
          </p>
        </div>

        {/* 8 Social Platform Grid - Flattened Single Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_PLATFORMS.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[#101018] border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
            >
              <div>
                {/* Header: Icon and Platform Name (No useless pills) */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:border-white/30 transition-colors">
                    {getSocialLogo(platform.id, 'w-full h-full')}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base text-white group-hover:text-[#D4FF3F] transition-colors leading-tight">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 break-all">
                      {platform.handle}
                    </p>
                  </div>
                </div>

                {platform.followers && (
                  <p className="text-xs text-zinc-300 font-sans font-medium mb-1">
                    {platform.followers}
                  </p>
                )}
                <p className="text-[11px] text-zinc-400 font-mono">
                  {platform.metricsLabel}
                </p>
              </div>

              {/* Bottom Visit Link */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D4FF3F] group-hover:underline">
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
