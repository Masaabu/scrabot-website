import { EleventyI18nPlugin } from "@11ty/eleventy";
import i18n from "eleventy-plugin-i18n";
import translations from "./src/data/i18n.js";
import fs from 'fs-extra';

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "ja",
    filters: {
			url: "locale_url",

			links: "locale_links",
		},
  });

  eleventyConfig.addPlugin(i18n, {
    translations: translations,
    fallbackLocales: {
      'ja': 'en'
    }
  });


  // eleventyConfig.on('afterBuild', async () => {
  // });
  
  await fs.remove("src/pages/en");
  await fs.copy("src/pages/ja", "src/pages/en");

  return {
    dir: {
      input: "src/pages/",
      output: "_site"
    }
  };
};