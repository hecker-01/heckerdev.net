import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import MDsvexConfig from './mdsvex.config.js'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...MDsvexConfig.extensions],
  kit: {
    adapter: adapter()
  },
  preprocess: [vitePreprocess(), mdsvex(MDsvexConfig)]
};
export default config;
