const browserSync = require('browser-sync').create();
const spa = require('connect-history-api-fallback');

browserSync.init({
  files: 'dist/*',
  https: true,
  server: {
    baseDir: ['dist', 'data'],
    middleware: [spa()],
  },
});
