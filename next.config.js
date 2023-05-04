/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI:
      "mongodb+srv://gbopola:gbopola123@cluster0.rwiea98.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "abc123",
  },
};

module.exports = nextConfig;
