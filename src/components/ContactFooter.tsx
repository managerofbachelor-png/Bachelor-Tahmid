import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink, ArrowUp } from 'lucide-react';
import { CREATOR_INFO } from '../data/creator';
import { WhatsAppLogo, TelegramLogo } from './SocialLogos';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CREATOR_INFO.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#060609] border-t border-white/10 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Call to Action Headline (No cheap blur glows, no pinging animations) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono text-[#D4FF3F] uppercase tracking-wider mb-3">
            Direct Collaborations &amp; Enquiries
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] uppercase mb-5">
            FOLLOW THE <br />
            <span className="text-[#D4FF3F]">DHAKA VLOG.</span>
          </h2>
          <p className="text-zinc-300 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            "If it's out there, I'll find it. If it doesn't exist, I'll build it." Real Dhaka student and bachelor adventures, unscripted and direct.
          </p>
        </div>

        {/* Contact Section: 3 Clean Direct Contact Channels with consistent rounded-xl */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Email Card (Separated copy button, no button nested in <a>) */}
            <div className="rounded-xl p-5 bg-[#101018] border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#D4FF3F]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#D4FF3F]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-base text-white mb-1">
                  Email
                </h3>
                <p className="text-xs font-mono text-zinc-400 break-all mb-4">
                  {CREATOR_INFO.contacts.email}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href={`mailto:${CREATOR_INFO.contacts.email}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#D4FF3F] hover:underline"
                >
                  <span>Open Mail App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2. WhatsApp Card */}
            <a
              href={CREATOR_INFO.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-5 bg-[#101018] border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:border-white/30 transition-colors">
                    <WhatsAppLogo className="w-full h-full" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Direct</span>
                </div>
                <h3 className="font-headline font-bold text-base text-white mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-4">
                  {CREATOR_INFO.contacts.whatsapp}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#25D366] group-hover:underline">
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* 3. Telegram Card */}
            <a
              href={CREATOR_INFO.contacts.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-5 bg-[#101018] border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24A1DE]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:border-white/30 transition-colors">
                    <TelegramLogo className="w-full h-full" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Direct</span>
                </div>
                <h3 className="font-headline font-bold text-base text-white mb-1">
                  Telegram
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-4">
                  {CREATOR_INFO.contacts.telegram}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#24A1DE] group-hover:underline">
                <span>Message @ChallengeKing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Footer Meta & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[#D4FF3F]" />
            <span>Mirpur-12, Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-2.5 text-center">
            <img
              src="/assets/aistudio/Bachelor_Tahmid_YouTube_Profile_Picture_612c1ff3.jpg"
              alt="Bachelor Tahmid logo"
              className="w-5 h-5 rounded-full border border-[#D4FF3F]/60 object-cover"
            />
            <span>© 2026 Bachelor Tahmid · Thafazzal Islam Thamed</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
