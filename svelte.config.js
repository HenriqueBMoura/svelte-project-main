import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/svelte-project-main'
    },
    alias: {
      $lib: './src/lib'
    }
  },
  preprocess: vitePreprocess()
};

export default config;