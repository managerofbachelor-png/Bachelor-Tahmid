import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'youtube-rss-proxy',
        configureServer(server) {
          server.middlewares.use('/api/youtube-feed', async (_req, res) => {
            try {
              const feedRes = await fetch(
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCUpdl6H7lzzPvQEzGWaQ5Cw',
                {
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                  },
                }
              );
              if (!feedRes.ok) {
                res.statusCode = feedRes.status;
                res.end(JSON.stringify({ error: `YouTube responded with ${feedRes.status}` }));
                return;
              }
              const xml = await feedRes.text();
              res.setHeader('Content-Type', 'application/xml; charset=utf-8');
              res.setHeader('Cache-Control', 'no-cache');
              res.end(xml);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Failed to fetch YouTube feed' }));
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
