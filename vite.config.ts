import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "localhost",
  },
  root: "render/",
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "render/index.html"),
      },
    },
  },
});
