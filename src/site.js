const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://stopwatch.kr' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.write({ url: '/', changefreq: 'daily', priority: 1 });

  return new Promise((resolve, reject) => {
    sitemap.pipe(writeStream);
    sitemap.on('end', resolve);
    sitemap.on('error', reject);
    sitemap.end();
  });
}

generateSitemap().then(() => console.log('Sitemap generated!')).catch(console.error);
