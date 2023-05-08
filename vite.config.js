/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests",
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
  build: {
    target: "es2017",
  },
});
