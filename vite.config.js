import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  resolve: {
    alias: {
      "react-icons/fa": path.resolve(__dirname, "node_modules/react-icons/fa"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests",
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html", "lcov"],
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    target: "es2017",
  },
});
