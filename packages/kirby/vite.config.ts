import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"development"', // or "development"
    "process.env": "{}", // optional fallback
    process: "{}",
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  build: {
    minify: false,
    lib: {
      entry: "src/main.tsx",
      formats: ["umd"],
      name: "kirby",
    },
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
