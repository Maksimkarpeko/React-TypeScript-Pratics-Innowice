import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      generatedRouteTree: './src/routeTree.gen.ts',
      routesDirectory: './src/app/routes',
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@shared': '/src/shared',
      '@app': '/src/app',
      '@modules': '/src/modules',
      '@pages': '/src/pages',
    },
  },
})
