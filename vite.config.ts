import { defineConfig } from "vite";

export default defineConfig(({ mode: _mode }) => {
  return {
    server: {
      port: 5173,
      host: "127.0.0.1",
    },
  };
});
