import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ["assert", "buffer"]
    })
  ],
  esbuild: {
    target: "es2020"
  },
  build: {
    sourcemap: true
  },
  clearScreen: false
});
