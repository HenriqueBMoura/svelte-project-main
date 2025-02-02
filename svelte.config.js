import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  kit: {
    adapter: adapter(),
    appDir: "app",
    paths: {
      base: '/svelte-project'
    }
  },

  preprocess: [vitePreprocess()],
};

export default config;
