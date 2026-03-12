import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://backend:3000",
      "/uploads/": "http://backend:3000",
    },
    fs: {
      allow: [
        "..", // allow parent directory (fixes slick-carousel font issue)
      ],
    },
  },
});
