import { defineConfig } from "vite";
import svelte from "rollup-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
   svelte(),
  ],
});
