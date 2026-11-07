import React, { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw, Calendar, Eye, Sparkles } from 'lucide-react';
import {
  YouTubeFeedVideo,
  parseYouTubeAtomFeed,
  INITIAL_LIVE_YOUTUBE_VIDEOS,
} from '../utils/youtubeRss';
import { YouTubeLogo } from './SocialLogos';

export const LatestVlogs: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeFeedVideo[]>(INITIAL_LIVE_YOUTUBE_VIDEOS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Live Synced');

  const fetchLiveFeed = async () => {
    setIsLoading(true);
    try {
      // 1. Try local dev endpoint first (bypasses CORS in Vite server)
      let response = await fetch('/api/youtube-feed', { cache: 'no-store' });
      
      // 2. If local proxy unavailable, fallback to CORS proxies
      if (!response.ok) {
        const directRss = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCUpdl6H7lzzPvQEzGWaQ5Cw';
        response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(directRss)}`);
      }

      if (response.ok) {
        const xmlText = await response.text();
        const parsed = parseYouTubeAtomFeed(xmlText, 6);
        if (parsed.length > 0) {
          setVideos(parsed);
          setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
      }
    } catch (err) {
      console.warn('Feed fetch fallback to cached verified videos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveFeed();
  }, []);

  return (
    <section id="vlogs" className="py-20 relative bg-[#08080C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF0000] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-ping" />
              <span>04 // Live YouTube Feed</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              LATEST <span className="text-[#FF0000]">VLOGS</span>
            </h2>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-xl mt-2">
              Live uploads and stories directly from the official <strong>@BachelorTahmid</strong> channel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={fetchLiveFeed}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4FF3F] text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all disabled:opacity-50"
              title="Refresh live video feed from YouTube"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#D4FF3F]' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Refresh Feed'}</span>
              <span className="text-[10px] text-zinc-500 hidden sm:inline">({lastUpdated})</span>
            </button>

            {/* Required "View all 295 videos on YouTube" button */}
            <a
              href="https://www.youtube.com/@BachelorTahmid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#d90000] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transform active:scale-95"
            >
              <YouTubeLogo className="w-4 h-4 flex-shrink-0" />
              <span>View all 295 videos on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. Main Embedded Player: Uploads Playlist from YouTube */}
        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] group">
            {/* Player Header Bar */}
            <div className="px-5 py-3 bg-[#111119] border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <YouTubeLogo className="w-4 h-4 flex-shrink-0" />
                <span className="text-white font-bold tracking-wider">OFFICIAL YOUTUBE EMBED</span>
                <span className="text-zinc-600">·</span>
                <span className="text-[#D4FF3F]">Playlist: Latest Uploads</span>
              </div>
              <span className="text-[11px] text-zinc-500 hidden sm:inline">
                Channel ID: UCUpdl6H7lzzPvQEzGWaQ5Cw
              </span>
            </div>

            {/* Embedded Iframe Player as requested */}
            <div className="w-full relative aspect-video sm:aspect-auto sm:h-[480px]">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUUpdl6H7lzzPvQEzGWaQ5Cw"
                width="100%"
                height="480"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Bachelor Tahmid Latest YouTube Videos Player"
                className="w-full h-full block"
              />
            </div>
          </div>
        </div>

        {/* 2. Latest 6 Videos as Cards with Real Titles, Real YouTube Thumbnails, Real Links, and Real Dates */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4FF3F]" />
              <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                Latest 6 Videos from Feed
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Source: youtube.com/feeds/videos.xml
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 6).map((video) => (
              <a
                key={video.videoId}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#12121C] border border-white/10 hover:border-[#D4FF3F] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,255,63,0.12)] flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
              >
                {/* Real YouTube Video Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badges: Short / Vlog & Date */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {video.isShort ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FF0000] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        Short
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D4FF3F] text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                        Vlog
                      </span>
                    )}
                    {video.views && (
                      <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-medium flex items-center gap-1">
                        <Eye className="w-2.5 h-2.5 text-[#D4FF3F]" />
                        {video.views} views
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    <span>{video.formattedDate}</span>
                  </div>
                </div>

                {/* Video Info: Real Title, Link, Date */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline font-bold text-base text-white group-hover:text-[#D4FF3F] transition-colors line-clamp-2 leading-snug mb-3">
                      {video.title}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500">YouTube</span>
                    <span className="text-[#D4FF3F] font-bold group-hover:underline flex items-center gap-1">
                      Watch on YouTube <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
