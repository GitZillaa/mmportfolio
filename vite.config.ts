import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mmportfolio/', // Repo-Name mit Slash am Anfang
  plugins: [react()],
})
