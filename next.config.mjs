import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next doesn't get confused
  // by an unrelated lockfile higher up in the user's home directory.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
