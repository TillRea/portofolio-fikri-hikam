// Langkah pasca-build: suntikkan HTML hasil prerender (dist-ssr) ke
// dist/index.html dan inline-kan CSS utama agar render pertama tidak
// menunggu unduhan berkas CSS terpisah.
import { readFileSync, writeFileSync } from 'node:fs';
import { render } from './dist-ssr/prerender.js';

const indexPath = 'dist/index.html';
let html = readFileSync(indexPath, 'utf8');

const appHtml = render();
if (!html.includes('<div id="root"></div>')) {
  throw new Error('#root kosong tidak ditemukan di dist/index.html');
}
html = html.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);

let cssNote = 'CSS tetap eksternal';
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssMatch) {
  const css = readFileSync('dist' + cssMatch[1], 'utf8');
  if (!css.includes('</style')) {
    html = html.replace(cssMatch[0], () => `<style>${css}</style>`);
    cssNote = `CSS di-inline (${css.length} karakter)`;
  }
}

writeFileSync(indexPath, html);
console.log(`Prerender OK: ${appHtml.length} karakter HTML disuntikkan; ${cssNote}.`);
