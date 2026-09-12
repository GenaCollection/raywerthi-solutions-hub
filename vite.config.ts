import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { imagetools } from "vite-imagetools";
import { componentTagger } from "lovable-tagger";

const MAX_IMAGE_WIDTH = 1920;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    imagetools({
      // Every raster asset imported from src/ ships as a width-capped WebP unless the import sets its own directives.
      defaultDirectives: async (url, metadata) => {
        if (url.searchParams.size > 0) return new URLSearchParams();
        const { width = 0 } = await metadata();
        const directives = new URLSearchParams({ format: "webp", quality: "78" });
        if (width > MAX_IMAGE_WIDTH) directives.set("w", String(MAX_IMAGE_WIDTH));
        return directives;
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  ssgOptions: {
    // /solutions/warema -> /solutions/warema.html; paired with `cleanUrls`
    // in vercel.json so Vercel serves it at the clean URL directly.
    dirStyle: "flat",
  },
}));
