import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const YouTubeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="24" height="17" x="0" y="3.5" rx="4" fill="#FF0000" />
    <polygon points="9.5,8 16,12 9.5,16" fill="#FFFFFF" />
  </svg>
);

export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#igGradient)" />
    <rect width="14" height="14" x="5" y="5" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
  </svg>
);

export const TikTokLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="5" fill="#010101" />
    {/* Cyan layer */}
    <path
      d="M16.4 7.2a4.4 4.4 0 0 1-2.9-2.5h-2.1v9.8a2.5 2.5 0 1 1-2.5-2.5c.3 0 .7.1 1 .2V9.9a4.8 4.8 0 0 0-1-.1A4.8 4.8 0 1 0 13.7 14.5V9.4c1.2.9 2.7 1.4 4.3 1.4V8.5a4.7 4.7 0 0 1-1.6-1.3z"
      fill="#25F4EE"
      transform="translate(-0.6, -0.6)"
    />
    {/* Red/Magenta layer */}
    <path
      d="M16.4 7.2a4.4 4.4 0 0 1-2.9-2.5h-2.1v9.8a2.5 2.5 0 1 1-2.5-2.5c.3 0 .7.1 1 .2V9.9a4.8 4.8 0 0 0-1-.1A4.8 4.8 0 1 0 13.7 14.5V9.4c1.2.9 2.7 1.4 4.3 1.4V8.5a4.7 4.7 0 0 1-1.6-1.3z"
      fill="#FE2C55"
      transform="translate(0.6, 0.6)"
    />
    {/* White front layer */}
    <path
      d="M16.4 7.2a4.4 4.4 0 0 1-2.9-2.5h-2.1v9.8a2.5 2.5 0 1 1-2.5-2.5c.3 0 .7.1 1 .2V9.9a4.8 4.8 0 0 0-1-.1A4.8 4.8 0 1 0 13.7 14.5V9.4c1.2.9 2.7 1.4 4.3 1.4V8.5a4.7 4.7 0 0 1-1.6-1.3z"
      fill="#FFFFFF"
    />
  </svg>
);

export const FacebookLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <circle cx="12" cy="12" r="11" fill="#1877F2" />
    <path
      d="M13.5 12.2h2.2l.3-2.6h-2.5V8.1c0-.7.2-1.2 1.3-1.2h1.4V4.6c-.6-.1-1.4-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.9H7.8v2.6h2.3v6.7c.6.1 1.2.2 1.7.2s1.1-.1 1.7-.2v-6.7z"
      fill="#FFFFFF"
    />
  </svg>
);

export const XLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="5" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <path
      d="M17.4 5h2.1l-4.6 5.3 5.4 7.2h-4.3l-3.3-4.4-3.8 4.4H6.8l4.9-5.7L6.5 5H11l3 4 3.4-4zm-.7 11.2h1.2L9.4 6.1H8.1l8.6 10.1z"
      fill="#FFFFFF"
    />
  </svg>
);

export const RumbleLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="5" fill="#85C742" />
    <path
      d="M8.2 6.5h3.4a4.4 4.4 0 0 1 4.4 4.4c0 1.9-1.2 3.5-2.9 4.1l3.3 3.5h-3.8l-2.8-3.1h-1.6v3.1H8.2V6.5zm3.2 5.9a1.8 1.8 0 0 0 1.8-1.8 1.8 1.8 0 0 0-1.8-1.8H9.8v3.6h1.6z"
      fill="#FFFFFF"
    />
  </svg>
);

export const BilibiliLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="5" fill="#00A1D6" />
    {/* Antenna ears */}
    <path d="M7 5.5l2.2 2M17 5.5l-2.2 2" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    {/* TV Screen */}
    <rect width="14" height="10" x="5" y="7.5" rx="2.5" fill="#FFFFFF" />
    {/* Eyes & Smile */}
    <circle cx="9.2" cy="11.5" r="1" fill="#00A1D6" />
    <circle cx="14.8" cy="11.5" r="1" fill="#00A1D6" />
    <path d="M10.8 14.2c.7.5 1.7.5 2.4 0" stroke="#00A1D6" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const LinkedInLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="4" fill="#0A66C2" />
    <path
      d="M17.5 18v-4.4c0-2.3-1.2-3.4-2.9-3.4-1.3 0-2 .7-2.3 1.3v-1.1H9.8V18h2.6v-4.1c0-1.1.2-2.1 1.6-2.1 1.3 0 1.3 1.2 1.3 2.2V18h2.2zM6.5 9.1a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zM5.2 18h2.6v-7.6H5.2V18z"
      fill="#FFFFFF"
    />
  </svg>
);

export const LinktreeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <rect width="22" height="22" x="1" y="1" rx="5" fill="#39E09B" />
    <path
      d="M13.2 6.5l3 3.1-1.3 1.3-2.1-2.1v2.8h2.4v1.8h-2.4V18h-1.8v-4.6H8.6v-1.8H11V8.8L8.9 10.9 7.6 9.6l3-3.1H8.1V5h7.8v1.5h-2.7z"
      fill="#000000"
    />
  </svg>
);

export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    <path
      d="M17.5 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.2-.6-.4z"
      fill="#FFFFFF"
    />
  </svg>
);

export const TelegramLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <circle cx="12" cy="12" r="11" fill="#24A1DE" />
    <path
      d="M5.4 11.6l11.7-4.8c.5-.2 1 .1.9.7l-2 9.4c-.1.7-.6.8-1.1.5l-3.1-2.3-1.5 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.7-5.2c.2-.2 0-.4-.3-.2l-7 4.4-3-1c-.6-.2-.6-.6.1-.9z"
      fill="#FFFFFF"
    />
  </svg>
);

export function getSocialLogo(id: string, className = 'w-6 h-6', size?: number) {
  switch (id) {
    case 'youtube':
      return <YouTubeLogo className={className} size={size} />;
    case 'instagram':
      return <InstagramLogo className={className} size={size} />;
    case 'tiktok':
      return <TikTokLogo className={className} size={size} />;
    case 'facebook':
      return <FacebookLogo className={className} size={size} />;
    case 'x':
      return <XLogo className={className} size={size} />;
    case 'rumble':
      return <RumbleLogo className={className} size={size} />;
    case 'bilibili':
      return <BilibiliLogo className={className} size={size} />;
    case 'linkedin':
      return <LinkedInLogo className={className} size={size} />;
    case 'whatsapp':
      return <WhatsAppLogo className={className} size={size} />;
    case 'telegram':
      return <TelegramLogo className={className} size={size} />;
    case 'linktree':
    default:
      return <LinktreeLogo className={className} size={size} />;
  }
}
