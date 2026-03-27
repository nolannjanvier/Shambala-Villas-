import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lembongan: resolve(__dirname, 'lembongan.html'),
        seminyak: resolve(__dirname, 'seminyak.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        booking: resolve(__dirname, 'booking.html'),
      },
    },
  },
});
