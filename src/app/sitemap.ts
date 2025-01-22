import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { i18nConfig } from "@/locales/config"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result: MetadataRoute.Sitemap = [];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  for (const lang of i18nConfig.locales) {
    const langConfig = i18nConfig.localeConfigs[lang];
    const homeUrl = `${siteUrl}/${langConfig.path}`;

    result.push({
      url: homeUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: i18nConfig.locales.reduce<{ [key: string]: string }>(
          (acc, l) => {
            const langConfig = i18nConfig.localeConfigs[l];
            acc[langConfig.htmlLang] = `${siteUrl}/${langConfig.path}`;
            return acc;
          },
          {}
        ),
      },
    });

    const dirPath = path.join(process.cwd(), `src/app/[locale]`);

    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const item of items) {
        const pagePath = path.join(dirPath, item.name, "page.tsx");
        if (fs.existsSync(pagePath)) {
          const url = `${siteUrl}/${langConfig.path}/${item.name}`;

          result.push({
            url: url,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.7,
            alternates: {
              languages: i18nConfig.locales.reduce<{
                [key: string]: string;
              }>((acc, l) => {
                const langConfig = i18nConfig.localeConfigs[l];
                acc[
                  langConfig.htmlLang
                ] = `${siteUrl}/${langConfig.path}/${item.name}`;
                return acc;
              }, {}),
            },
          });
        }
      }
    }
  }

  return result;
}