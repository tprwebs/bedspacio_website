import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the rule that Next.js uses for images / static files
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      // 1. Let ?url force the original file-loader behavior (useful for <Image src="..." />)
      config.module.rules.push({
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url  → treated as static file
      });

      // 2. All other .svg imports → become React components via SVGR
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer || /\.[jt]sx?$/,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: ["@svgr/webpack"],
      });

      // 3. Prevent the original rule from touching .svg files anymore
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;



