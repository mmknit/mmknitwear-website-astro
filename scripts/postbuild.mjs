import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';

const base = (config.base ?? '/').replace(/\/+$/, '');
const prefix = base === '' ? '/' : `${base}/`;
const baseEsc = base ? base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
const skip = base ? `(?!${baseEsc}/)` : '';
const reDouble = new RegExp(`="/(?!/)${skip}`, 'g');
const reSingle = new RegExp(`='/(?!/)${skip}`, 'g');

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (extname(entry.name) === '.html') files.push(full);
  }
})(distDir);

let rewritten = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const out = html.replace(reDouble, `="${prefix}`).replace(reSingle, `='${prefix}`);
  if (out !== html) {
    writeFileSync(file, out);
    rewritten++;
  }
}
console.log(`postbuild: prefixed ${rewritten} HTML file(s) with base "${base}"`);
