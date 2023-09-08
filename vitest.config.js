import { defineConfig } from 'vitest';

export default defineConfig({
  files: 'src/**/*.test.tsx',
  root: './src',
  framework: 'react',
  globals: {
    __DEV__: true,
    'process.env.NODE_ENV': 'test',
  },
  testEnvironment: 'jsdom',
  css: true,
  setupFiles: ['./src/test/setup.ts'],
  plugins: [],
  preprocessors: {
    '**/*.tsx': ['typescript'],
  },
});
