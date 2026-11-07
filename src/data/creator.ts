/**
 * Verified data for Bachelor Tahmid (Thafazzal Islam Thamed).
 * Contains ONLY verified real facts from November 7, 2026 snapshot.
 * NO INVENTED NUMBERS, NO TRADING/HUSTLER CONTENT.
 */

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  followers?: string;
  metricsLabel?: string;
  verified: boolean;
  statusText: string;
  accentColor: string;
  badge?: string;
}

export interface ViralReel {
  rank: number;
  views: string;
  rawViews: number;
  title: string;
  tag: string;
  url: string;
}

export interface VlogItem {
  id: string;
  title: string;
  stats?: string;
  dateTag: string;
  url: string;
  description: string;
  thumbnailUrl: string;
}

export interface ContentPillar {
  number: string;
  title: string;
  description: string;
  sampleVideo: string;
  iconName: string;
  highlightTag: string;
}

export const CREATOR_INFO = {
  brandName: "Bachelor Tahmid",
  fullName: "Thafazzal Islam Thamed", // Official spelling everywhere
  altDisplayNote: "Instagram displays 'Thufazzal Islam Tahmid'",
  handle: "@bachelortahmid",
  location: "Mirpur-12, Dhaka, Bangladesh",
  officialLogo: "/assets/aistudio/Bachelor_Tahmid_YouTube_Profile_Picture_612c1ff3.jpg",
  tagline: "If it's out there, I'll find it. If it doesn't exist, I'll build it.",
  subline: "Raw. Unfiltered. Unapologetically Dhaka.",
  youtubeBio:
    "Yo, I'm Tahmid a bachelor living the real Dhaka life. This channel is raw, unfiltered, and unapologetically me. Vlogs, street food hunts, geopolitics, funny moments, and everything in between. No script. No filter. Just real life.",
  whatHeDoes:
    "Content Creator / Vlogger. Raw Dhaka bachelor and student vlogs, street food adventures, thrift shopping hunts, trade fair nights, budget survival challenges, friends and celebrations, and geopolitics.",
  education: [
    {
      degree: "HND Aeronautical Engineering",
      institution: "UCASM Dhaka",
      period: "2025–2027",
      status: "In Progress",
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "BICIC College",
      period: "2022–2024",
      status: "GPA 5.0 / 5.0",
    },
  ],
  contacts: {
    email: "managerofbachelor@gmail.com",
    whatsapp: "+8801904771432",
    whatsappLink: "https://wa.me/8801904771432",
    telegram: "@ChallengeKing",
    telegramLink: "https://t.me/ChallengeKing",
  },
};

export const VERIFIED_STATS = [
  {
    id: "yt-subs",
    label: "YouTube Subscribers",
    value: 601,
    formatted: "601",
    subtext: "The main content engine",
    date: "Checked 7 Nov 2026",
    link: "https://www.youtube.com/@BachelorTahmid",
    icon: "youtube",
    accent: "#D4FF3F",
  },
  {
    id: "yt-videos",
    label: "YouTube Videos Uploaded",
    value: 295,
    formatted: "295",
    subtext: "~2 videos / week cadence",
    date: "Checked 7 Nov 2026",
    link: "https://www.youtube.com/@BachelorTahmid",
    icon: "video",
    accent: "#FFFFFF",
  },
  {
    id: "yt-views",
    label: "YouTube Total Views",
    value: 370853,
    formatted: "370,853",
    subtext: "SocialCounts verified total",
    date: "Checked 7 Nov 2026",
    link: "https://www.youtube.com/@BachelorTahmid",
    icon: "eye",
    accent: "#FF6B00",
  },
  {
    id: "ig-views-30d",
    label: "IG 30-Day Views",
    value: 101300,
    formatted: "101.3K",
    subtext: "Viral reach in last 30 days",
    date: "Screenshot 7 Nov 2026",
    link: "https://www.instagram.com/bachelortahmid/",
    icon: "trending-up",
    accent: "#D4FF3F",
  },
];

export const SOCIAL_PLATFORMS: SocialLink[] = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@BachelorTahmid",
    url: "https://www.youtube.com/@BachelorTahmid",
    followers: "601 subs · 295 videos",
    metricsLabel: "The creative home base",
    verified: true,
    statusText: "Active Hub",
    accentColor: "#FF0000",
    badge: "Home Hub",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@bachelortahmid",
    url: "https://www.instagram.com/bachelortahmid/",
    followers: "922 followers · 63 posts",
    metricsLabel: "101.3K views in last 30 days",
    verified: true,
    statusText: "Verified Creator",
    accentColor: "#E1306C",
    badge: "Largest Audience",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@bachelor_tahmid",
    url: "https://www.tiktok.com/@bachelor_tahmid",
    followers: "2 followers · 19 videos · 94 likes",
    metricsLabel: "Short-form channel",
    verified: true,
    statusText: "Claimed Profile",
    accentColor: "#00F2FE",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "/bachelortahmid",
    url: "https://www.facebook.com/bachelortahmid",
    followers: "7 followers",
    metricsLabel: "Professional page",
    verified: true,
    statusText: "Claimed Profile",
    accentColor: "#1877F2",
  },
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@BachelorTahmid",
    url: "https://x.com/BachelorTahmid",
    followers: "Official handle",
    metricsLabel: "Real-time updates",
    verified: false,
    statusText: "Official Link",
    accentColor: "#FFFFFF",
  },
  {
    id: "rumble",
    name: "Rumble",
    handle: "/user/BachelorTahmid",
    url: "https://rumble.com/user/BachelorTahmid",
    followers: "Official channel",
    metricsLabel: "Video broadcast backup",
    verified: false,
    statusText: "Official Link",
    accentColor: "#85c742",
  },
  {
    id: "bilibili",
    name: "Bilibili",
    handle: "UID 3745014349826936",
    url: "https://space.bilibili.com/3745014349826936",
    followers: "Official space",
    metricsLabel: "Asian community stream",
    verified: false,
    statusText: "Official Link",
    accentColor: "#00A1D6",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/thafazzal-islam-thamed-502b77385/",
    url: "https://www.linkedin.com/in/thafazzal-islam-thamed-502b77385/",
    followers: "Aeronautical Student",
    metricsLabel: "Academic & engineering",
    verified: false,
    statusText: "Official Link",
    accentColor: "#0A66C2",
  },
];

export const TOP_VIRAL_REELS: ViralReel[] = [
  {
    rank: 1,
    views: "201K",
    rawViews: 201000,
    title: "Pov: You have a 'ghar ki badi beti' in your life",
    tag: "Viral Breakout",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 2,
    views: "45.9K",
    rawViews: 45900,
    title: "what if her parents don't accept.",
    tag: "Emotional Relatable",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 3,
    views: "27.9K",
    rawViews: 27900,
    title: "Negative marking",
    tag: "Student Life",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 4,
    views: "22.6K",
    rawViews: 22600,
    title: "What are you seeing?",
    tag: "Comedy / POV",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 5,
    views: "19.5K",
    rawViews: 19500,
    title: "Short trade for collecting Restaurant Bill",
    tag: "Humor / Dhaka Eats",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 6,
    views: "15K",
    rawViews: 15000,
    title: "ice-cream trick",
    tag: "Street Fun",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 7,
    views: "13.1K",
    rawViews: 13100,
    title: "This is a picture of me when I was single",
    tag: "Bachelor Humor",
    url: "https://www.instagram.com/bachelortahmid/",
  },
  {
    rank: 8,
    views: "13K",
    rawViews: 13000,
    title: "IS IT WORHT IT?",
    tag: "Street Challenge",
    url: "https://www.instagram.com/bachelortahmid/",
  },
];

export const LATEST_VLOGS: VlogItem[] = [
  {
    id: "trade-fair",
    title: "Trade Fair 2026 Night",
    dateTag: "Latest Dhaka Vlog",
    url: "https://www.youtube.com/@BachelorTahmid",
    description: "৳99 te ki pabo? Walking through Dhaka International Trade Fair at night under the bright lights, testing bargains, street snacks, and raw Dhaka night crowd vibes.",
    thumbnailUrl: "https://i2.ytimg.com/vi/Yd0RPWLbJZo/hqdefault.jpg",
  },
  {
    id: "melodys-birthday",
    title: "Melody's Birthday Celebration",
    stats: "216 views",
    dateTag: "Featured Special",
    url: "https://www.youtube.com/@BachelorTahmid",
    description: "Melody's Unforgettable Birthday Celebration! Heartfelt moments, rooftop wind, surprises with friends, and capturing real celebrations without scripted acting.",
    thumbnailUrl: "https://i1.ytimg.com/vi/Lt0RFAOU0hk/hqdefault.jpg",
  },
];

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    number: "01",
    title: "Daily Bachelor Life",
    description: "Mess living, budget cooking, late-night tea stalls, university rush, and the unfiltered reality of living alone in Mirpur-12.",
    sampleVideo: "Can I Survive Dhaka With 200 Taka?",
    iconName: "Home",
    highlightTag: "Real Dhaka",
  },
  {
    number: "02",
    title: "Street Food Hunts",
    description: "Hunting Dhaka's best fuchka, cha stalls, hidden biryani joints, ৳99 street snacks, and late-night cravings across the city.",
    sampleVideo: "৳99 te ki pabo? Trade Fair 2026 Night",
    iconName: "Utensils",
    highlightTag: "Street Eats",
  },
  {
    number: "03",
    title: "Thrift & Budget Dhaka",
    description: "Uncovering Dhaka's cheapest underground markets, second-hand jacket hauls, street bargaining, and student life hacks.",
    sampleVideo: "THE BEST THRIFT SHOP IN DHAKA YOU NEVER KNEW EXISTED!",
    iconName: "ShoppingBag",
    highlightTag: "Bargain Secrets",
  },
  {
    number: "04",
    title: "Friends & Celebrations",
    description: "Spontaneous night rides, birthday surprises, tea stall gossip, laughing over cold weather, and authentic squad energy.",
    sampleVideo: "Melody's Unforgettable Birthday Celebration!",
    iconName: "Users",
    highlightTag: "Raw Moments",
  },
  {
    number: "05",
    title: "Dhaka Explains & Geopolitics",
    description: "Curious student breakdowns on Bangladesh railway systems, urban infrastructure changes, geopolitical news, and daily observations.",
    sampleVideo: "Dark Secret behind Bangladesh Railway Systems",
    iconName: "Compass",
    highlightTag: "Analysis & POV",
  },
];

export const GALLERY_PHOTOS = [
  {
    id: "dhaka-nights",
    src: "/assets/aistudio/13122025_204220.Mobile_Dslr.NIGHT_3e02c4d8.jpg",
    title: "Street Food on the Field",
    caption: "Late-night street food bowl under stadium lights, Dhaka",
    aspect: "landscape",
  },
  {
    id: "tea-friends",
    src: "/assets/aistudio/IMG_8358_ae751171.JPG",
    title: "Tea, Friends, Dhaka Nights",
    caption: "Tea, friends, Dhaka nights.",
    aspect: "landscape",
  },
  {
    id: "mirror-casual",
    src: "/assets/aistudio/IMG_20251109_225452_407_10b87c9a.webp",
    title: "Personal Mirror Reflection",
    caption: "Green knit sweater, calm evening reflections",
    aspect: "square",
  },
  {
    id: "celebration-friend",
    src: "/assets/aistudio/IMG_20260125_170416_3f88b9fb.jpg",
    title: "Celebration & Shared Moments",
    caption: "Genuine smile and friendly laughter in Dhaka",
    aspect: "portrait",
  },
  {
    id: "creator-phone",
    src: "/assets/aistudio/IMG_20260226_163415_aeabdefa.jpg",
    title: "Creator in Motion",
    caption: "The phone that captures every Dhaka moment",
    aspect: "portrait",
  },
];
