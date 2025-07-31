import { defineConfig } from "@lingui/cli";

export default defineConfig({
  locales: ["en", "pl"],
  catalogs: [
    {
      path: "<rootDir>/locale/{locale}/messages",
      include: ["<rootDir>/src"],
      exclude: ["**/node_modules/**"],
    },
  ],
});
