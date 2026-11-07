import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CREATOR_INFO,
  VERIFIED_STATS,
  TOP_VIRAL_REELS,
  SOCIAL_PLATFORMS,
  LATEST_VLOGS,
  CONTENT_PILLARS,
} from './creator.ts';

test('Creator basic identity is strictly verified', () => {
  assert.equal(CREATOR_INFO.brandName, 'Bachelor Tahmid');
  assert.equal(CREATOR_INFO.fullName, 'Thafazzal Islam Thamed');
  assert.equal(CREATOR_INFO.handle, '@bachelortahmid');
  assert.equal(CREATOR_INFO.location, 'Mirpur-12, Dhaka, Bangladesh');
  assert.equal(CREATOR_INFO.contacts.email, 'managerofbachelor@gmail.com');
  assert.equal(CREATOR_INFO.contacts.whatsapp, '+8801904771432');
  assert.equal(CREATOR_INFO.contacts.telegram, '@ChallengeKing');
  assert.ok(CREATOR_INFO.officialLogo.includes('Bachelor_Tahmid_YouTube_Profile_Picture'));
});

test('Education credentials are fully recorded', () => {
  const aeronautical = CREATOR_INFO.education.find((e) =>
    e.degree.includes('Aeronautical')
  );
  assert.ok(aeronautical, 'Aeronautical engineering must be present');
  assert.equal(aeronautical?.institution, 'UCASM Dhaka');
  assert.equal(aeronautical?.period, '2025–2027');

  const hsc = CREATOR_INFO.education.find((e) => e.degree.includes('HSC'));
  assert.ok(hsc, 'HSC must be present');
  assert.equal(hsc?.status, 'GPA 5.0 / 5.0');
  assert.equal(hsc?.institution, 'BICIC College');
  assert.equal(hsc?.period, '2022–2024');
});

test('Verified stats match exact numbers from prompt', () => {
  const ytSubs = VERIFIED_STATS.find((s) => s.id === 'yt-subs');
  assert.equal(ytSubs?.value, 601);

  const ytVids = VERIFIED_STATS.find((s) => s.id === 'yt-videos');
  assert.equal(ytVids?.value, 295);

  const ytViews = VERIFIED_STATS.find((s) => s.id === 'yt-views');
  assert.equal(ytViews?.value, 370853);

  const igViews = VERIFIED_STATS.find((s) => s.id === 'ig-views-30d');
  assert.equal(igViews?.formatted, '101.3K');
});

test('Viral Reels Top 8 contain exact order and view counts', () => {
  assert.equal(TOP_VIRAL_REELS.length, 8);
  assert.equal(TOP_VIRAL_REELS[0].views, '201K');
  assert.equal(TOP_VIRAL_REELS[0].title, "Pov: You have a 'ghar ki badi beti' in your life");

  assert.equal(TOP_VIRAL_REELS[1].views, '45.9K');
  assert.equal(TOP_VIRAL_REELS[2].views, '27.9K');
  assert.equal(TOP_VIRAL_REELS[3].views, '22.6K');
  assert.equal(TOP_VIRAL_REELS[4].views, '19.5K');
  assert.equal(TOP_VIRAL_REELS[5].views, '15K');
  assert.equal(TOP_VIRAL_REELS[6].views, '13.1K');
  assert.equal(TOP_VIRAL_REELS[7].views, '13K');
});

test('Forbidden brands and affiliate schemes are completely absent', () => {
  const forbiddenPatterns = [
    /hustler/i,
    /exness/i,
    /oneroyal/i,
    /forex/i,
    /signalhustle/i,
    /by muna/i,
  ];

  const serializedData = JSON.stringify({
    CREATOR_INFO,
    VERIFIED_STATS,
    TOP_VIRAL_REELS,
    SOCIAL_PLATFORMS,
    LATEST_VLOGS,
    CONTENT_PILLARS,
  });

  for (const pattern of forbiddenPatterns) {
    assert.equal(
      pattern.test(serializedData),
      false,
      `Forbidden word ${pattern} must not appear anywhere in data`
    );
  }
});

test('Social platforms contain valid links without dummy URLs', () => {
  for (const plat of SOCIAL_PLATFORMS) {
    assert.ok(plat.url.startsWith('https://'), `${plat.name} must have a valid https url`);
    assert.notEqual(plat.url, '#');
  }
});
