import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base:'https://vigneshwaran-star.github.io/Squad76Portfolio/'
// })

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_headers',
          dest: './', // Copies _headers to the root of the dist directory
        },
      ],
    }),
  ],
});
