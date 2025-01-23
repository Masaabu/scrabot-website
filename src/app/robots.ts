import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = process.env.NEXT_PUBLIC_IS_DEV ? "http://localhost:3000" : "https://scrabot.vercel.app"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}