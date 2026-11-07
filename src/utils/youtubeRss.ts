/**
 * Parser for YouTube channel Atom/RSS video feed.
 * Feed URL: https://www.youtube.com/feeds/videos.xml?channel_id=UCUpdl6H7lzzPvQEzGWaQ5Cw
 */

export interface YouTubeFeedVideo {
  videoId: string;
  title: string;
  link: string;
  published: string;
  formattedDate: string;
  thumbnail: string;
  views?: string;
  isShort: boolean;
}

export function formatDateString(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

/**
 * Robust regex-based XML parser for YouTube Atom feed entries.
 * Works seamlessly in both Node.js (test runner) and browser environments.
 */
export function parseYouTubeAtomFeed(xml: string, limit = 6): YouTubeFeedVideo[] {
  if (!xml || typeof xml !== 'string') return [];

  const entryBlocks = xml.split('<entry>').slice(1);
  const items: YouTubeFeedVideo[] = [];

  for (const block of entryBlocks) {
    if (items.length >= limit) break;

    const getTag = (tag: string) => {
      const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      return match ? match[1].trim() : '';
    };

    const videoId = getTag('yt:videoId');
    if (!videoId) continue;

    const rawTitle = getTag('title') || 'Untitled Video';
    // Clean XML entities if any
    const title = rawTitle
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    const published = getTag('published');

    // Link extraction
    const linkMatch = block.match(/<link rel=["']alternate["'] href=["']([^"']+)["']/);
    const link = linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${videoId}`;

    // Thumbnail extraction (real YouTube thumbnail from RSS)
    const thumbMatch = block.match(/<media:thumbnail url=["']([^"']+)["']/);
    const thumbnail = thumbMatch
      ? thumbMatch[1]
      : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    // View count extraction
    const viewsMatch = block.match(/<media:statistics views=["']([^"']+)["']/);
    const views = viewsMatch ? viewsMatch[1] : undefined;

    const isShort = link.includes('/shorts/') || title.includes('#shorts') || title.includes('#bachelortahmid');

    items.push({
      videoId,
      title,
      link,
      published,
      formattedDate: formatDateString(published),
      thumbnail,
      views,
      isShort,
    });
  }

  return items;
}

/**
 * Initial fallback feed verified directly from the channel's live RSS feed
 * on 7 Nov 2026. This guarantees instant paint without layout shift or broken states.
 */
export const INITIAL_LIVE_YOUTUBE_VIDEOS: YouTubeFeedVideo[] = [
  {
    videoId: "f4-b-4zcZeQ",
    title: "did i ? #bachelortahmid",
    link: "https://www.youtube.com/shorts/f4-b-4zcZeQ",
    published: "2026-11-07T05:56:39+00:00",
    formattedDate: "Nov 7, 2026",
    thumbnail: "https://i3.ytimg.com/vi/f4-b-4zcZeQ/hqdefault.jpg",
    views: "84",
    isShort: true,
  },
  {
    videoId: "Yd0RPWLbJZo",
    title: "৳99 te ki pabo? Trade Fair 2026 Night | Bachelor Tahmid",
    link: "https://www.youtube.com/watch?v=Yd0RPWLbJZo",
    published: "2026-11-07T05:30:02+00:00",
    formattedDate: "Nov 7, 2026",
    thumbnail: "https://i2.ytimg.com/vi/Yd0RPWLbJZo/hqdefault.jpg",
    views: "14",
    isShort: false,
  },
  {
    videoId: "GoDeCbcA3GE",
    title: "We didn't expect that from a Cafe 🥺 | Raw Vlog 2",
    link: "https://www.youtube.com/watch?v=GoDeCbcA3GE",
    published: "2026-11-06T04:22:55+00:00",
    formattedDate: "Nov 6, 2026",
    thumbnail: "https://i4.ytimg.com/vi/GoDeCbcA3GE/hqdefault.jpg",
    views: "20",
    isShort: false,
  },
  {
    videoId: "1l-3YF-fqZM",
    title: "What are you seeing? COMMENT BELOW 👇👇 #bachelortahmid",
    link: "https://www.youtube.com/shorts/1l-3YF-fqZM",
    published: "2026-11-02T03:30:03+00:00",
    formattedDate: "Nov 2, 2026",
    thumbnail: "https://i2.ytimg.com/vi/1l-3YF-fqZM/hqdefault.jpg",
    views: "378",
    isShort: true,
  },
  {
    videoId: "s4DTUGlPbvY",
    title: "UNO REVERSED 🤫 #couple",
    link: "https://www.youtube.com/shorts/s4DTUGlPbvY",
    published: "2026-11-01T20:51:22+00:00",
    formattedDate: "Nov 1, 2026",
    thumbnail: "https://i4.ytimg.com/vi/s4DTUGlPbvY/hqdefault.jpg",
    views: "886",
    isShort: true,
  },
  {
    videoId: "Lt0RFAOU0hk",
    title: "Melody’s Unforgettable Birthday Celebration!",
    link: "https://www.youtube.com/watch?v=Lt0RFAOU0hk",
    published: "2026-11-01T13:30:20+00:00",
    formattedDate: "Nov 1, 2026",
    thumbnail: "https://i1.ytimg.com/vi/Lt0RFAOU0hk/hqdefault.jpg",
    views: "216",
    isShort: false,
  },
];
