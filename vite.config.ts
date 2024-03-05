/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'html', 'lcov', 'json', 'clover', 'text-summary', 'json-summary'],
      provider: 'v8',
    }
  },
})
