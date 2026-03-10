/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/breakerbros",
    assetPrefix: "/breakerbros/",
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
