import { defineConfig } from "vite";

export default defineConfig(({ mode: _mode }) => {
  return {
    root: "src",
    build: {
      outDir: "../dist",
    },
    server: {
      port: 5173,
      host: "127.0.0.1",
    },
  };
});
