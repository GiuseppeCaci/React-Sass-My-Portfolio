import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    globals: true,
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
  },
});
