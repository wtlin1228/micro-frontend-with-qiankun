import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { lingui } from "@lingui/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react({ plugins: [["@lingui/swc-plugin", {}]] }),
    lingui(),
  ],
  build: {
    minify: false,
  },
});
