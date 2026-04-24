import type { NextConfig } from "next";

const repoName = "rick-morty";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;