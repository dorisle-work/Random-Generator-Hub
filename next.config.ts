import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The app is fully client/static driven, so export portable assets for CDN hosting.
  output: "export",
  // Metadata routes are emitted as static files alongside the app. Cache
  // Components is intentionally off because its segment configs conflict with
  // static export route generation in Next 16.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
