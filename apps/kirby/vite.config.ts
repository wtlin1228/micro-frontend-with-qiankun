import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"', // or "development"
    "process.env": "{}", // optional fallback
    process: "{}",
  },
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["umd"],
      name: "kirby",
    },
    rollupOptions: {
      output: {
        dir: "../../uicore/public/app-statics/kirby",
      },
    },
  },
});
