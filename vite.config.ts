import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Inside the Lovable sandbox the preset is force-pinned to `cloudflare-module`.
  // Outside Lovable (your own CI for Cloudflare Pages), this preset is honored —
  // nitro emits `dist/client/_worker.js` so the folder can be uploaded directly
  // to Cloudflare Pages.
  nitro: { preset: "cloudflare-pages" },
});
