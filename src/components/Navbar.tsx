import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { YouTubeLogo, InstagramLogo } from './SocialLogos';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stats', href: '#stats' },
    { label: 'Viral Reels', href: '#reels' },
    { label: 'Latest Vlogs', href: '#vlogs' },
    { label: 'What I Make', href: '#what-i-make' },
    { label: 'Socials', href: '#socials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08080C]/95 border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F] rounded-lg"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#D4FF3F]/80 group-hover:border-[#D4FF3F] group-hover:scale-105 transition-all bg-[#14141E] flex-shrink-0 shadow-[0_0_12px_rgba(212,255,63,0.3)]">
            <img
              src="/assets/aistudio/Bachelor_Tahmid_YouTube_Profile_Picture_612c1ff3.jpg"
              alt="Bachelor Tahmid official logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-wider text-white group-hover:text-[#D4FF3F] transition-colors leading-none">
              BACHELOR TAHMID
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-tight flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
              MIRPUR-12, DHAKA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-[#D4FF3F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://www.youtube.com/@BachelorTahmid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000]"
            aria-label="YouTube Channel @BachelorTahmid"
          >
            <YouTubeLogo className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/bachelortahmid/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
            aria-label="Instagram Profile @bachelortahmid"
          >
            <InstagramLogo className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/bachelortahmid/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4FF3F] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#c2f22e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Follow</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-[#D4FF3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF3F]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A12] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <img
              src="/assets/aistudio/Bachelor_Tahmid_YouTube_Profile_Picture_612c1ff3.jpg"
              alt="Bachelor Tahmid logo"
              className="w-10 h-10 rounded-full border-2 border-[#D4FF3F]/80 object-cover flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-display text-base tracking-wider text-white">BACHELOR TAHMID</span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-tight flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4FF3F]" />
                Mirpur-12, Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-white/5 border border-white/5 text-xs uppercase font-mono tracking-wider text-zinc-300 hover:text-[#D4FF3F] hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://www.youtube.com/@BachelorTahmid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-lg bg-[#FF0000]/15 border border-[#FF0000]/30 text-white font-mono text-xs uppercase font-bold"
            >
              <YouTubeLogo className="w-5 h-5" />
              Watch on YouTube (@BachelorTahmid)
            </a>
            <a
              href="https://www.instagram.com/bachelortahmid/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-xs uppercase font-bold hover:bg-white/10"
            >
              <InstagramLogo className="w-5 h-5" />
              Follow on Instagram (@bachelortahmid)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
