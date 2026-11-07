import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseYouTubeAtomFeed,
  formatDateString,
  INITIAL_LIVE_YOUTUBE_VIDEOS,
} from './youtubeRss.ts';

test('formatDateString converts ISO string to readable format', () => {
  const result = formatDateString('2026-11-07T05:30:02+00:00');
  assert.equal(result, 'Nov 7, 2026');
});

test('parseYouTubeAtomFeed extracts all video attributes accurately', () => {
  const sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/" xmlns="http://www.w3.org/2005/Atom">
 <entry>
  <id>yt:video:Yd0RPWLbJZo</id>
  <yt:videoId>Yd0RPWLbJZo</yt:videoId>
  <title>৳99 te ki pabo? Trade Fair 2026 Night | Bachelor Tahmid</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=Yd0RPWLbJZo"/>
  <published>2026-11-07T05:30:02+00:00</published>
  <media:group>
   <media:thumbnail url="https://i2.ytimg.com/vi/Yd0RPWLbJZo/hqdefault.jpg" width="480" height="360"/>
   <media:community>
    <media:statistics views="14"/>
   </media:community>
  </media:group>
 </entry>
</feed>`;

  const items = parseYouTubeAtomFeed(sampleXml, 6);
  assert.equal(items.length, 1);
  assert.equal(items[0].videoId, 'Yd0RPWLbJZo');
  assert.equal(items[0].title, '৳99 te ki pabo? Trade Fair 2026 Night | Bachelor Tahmid');
  assert.equal(items[0].link, 'https://www.youtube.com/watch?v=Yd0RPWLbJZo');
  assert.equal(items[0].thumbnail, 'https://i2.ytimg.com/vi/Yd0RPWLbJZo/hqdefault.jpg');
  assert.equal(items[0].views, '14');
  assert.equal(items[0].formattedDate, 'Nov 7, 2026');
  assert.equal(items[0].isShort, false);
});

test('Initial live videos list contains exactly 6 real videos with real YouTube thumbnails', () => {
  assert.equal(INITIAL_LIVE_YOUTUBE_VIDEOS.length, 6);
  for (const video of INITIAL_LIVE_YOUTUBE_VIDEOS) {
    assert.ok(video.videoId.length > 5);
    assert.ok(video.title.length > 0);
    assert.ok(video.link.startsWith('https://www.youtube.com/'));
    assert.ok(video.thumbnail.startsWith('https://i'));
    assert.ok(!video.thumbnail.includes('/assets/aistudio/'), 'Must not use uploaded personal photos as video thumbnails');
  }
});
