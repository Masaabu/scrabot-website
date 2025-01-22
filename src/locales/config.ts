export type LanguageMap = {
    [key: string]: string; // キーと値の型を指定
};

export const languages: LanguageMap = {
    en: "English",
    ja: "日本語",
};

/**
 * Internationalization (i18n) configuration type.
 * Contains default locale, supported locales, and locale-specific configurations.
 */
type i18n = {
    defaultLocale: string; // The default language locale
    locales: string[]; // Array of supported locales
    localeConfigs: { [locale: string]: localeConfig }; // Configuration for each locale
    selectButton?: boolean; // Option to include a locale selection button
  };
  
  /**
   * Configuration for a specific locale.
   * Includes label, HTML language attribute, and path prefix.
   */
  type localeConfig = {
    label: string; // Human-readable name of the locale
    htmlLang: string; // HTML language attribute value
    path: string; // URL path prefix for the locale
  };

export const i18nConfig: i18n = {
    // Default locale for the site
    defaultLocale: "ja",
    // List of supported locales
    locales: ["ja", "en"],
    // Locale-specific configurations
    localeConfigs: {
        ja: {
        label: "日本語", // Label for the Japanese locale
        htmlLang: "ja-JP", // HTML language attribute for Japanese
        path: "ja", // Path prefix for Japanese locale
        },
        en: {
        label: "English", // Label for the English locale
        htmlLang: "en-US", // HTML language attribute for English
        path: "en", // Path prefix for English locale
        },
    },
}