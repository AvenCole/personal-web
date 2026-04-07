import { copyFileSync, existsSync } from 'node:fs';
import { basename, resolve as resolvePath } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? basename(process.cwd());
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const normalizedRepoName = repoName.toLowerCase();
const normalizedOwnerName = ownerName.toLowerCase();
const isUserPagesRepo =
  normalizedRepoName.endsWith('.github.io') &&
  (normalizedOwnerName === '' || normalizedRepoName === `${normalizedOwnerName}.github.io`);

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const distDir = resolvePath(process.cwd(), 'dist');
      const indexPath = resolvePath(distDir, 'index.html');
      const fallbackPath = resolvePath(distDir, '404.html');

      if (existsSync(indexPath)) {
        copyFileSync(indexPath, fallbackPath);
      }
    },
  };
}

export default defineConfig({
  base: isUserPagesRepo ? '/' : `/${repoName}/`,
  plugins: [vue(), tailwindcss(), githubPagesSpaFallback()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
