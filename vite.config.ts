import {fileURLToPath, URL} from "node:url";

import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: +loadEnv("", process.cwd()).VITE_APP_PORT || 3000,
    host: loadEnv("", process.cwd()).VITE_APP_HOST || "localhost",
  },
  preview: {
    port: +loadEnv("", process.cwd()).VITE_APP_PORT || 3000,
    host: loadEnv("", process.cwd()).VITE_APP_HOST || "localhost",
  },
});
