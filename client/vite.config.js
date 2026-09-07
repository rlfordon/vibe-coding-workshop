import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://rlfordon.github.io/vibe-coding-workshop/ via GitHub Pages,
// so assets must resolve against the repo subpath rather than the domain root.
export default defineConfig({
  base: '/vibe-coding-workshop/',
  plugins: [react(), tailwindcss()],
})
