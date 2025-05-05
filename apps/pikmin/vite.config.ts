import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  mode: "development",
  define: {
    "process.env.NODE_ENV": '"development"', // or "development"
    "process.env": "{}", // optional fallback
    process: "{}",
  },
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: "src/main.tsx",
      formats: ["umd"],
      name: "pikmin",
    },
    rollupOptions: {
      output: {
        dir: "../../uicore/public/app-statics/pikmin",
      },
    },
  },
});
