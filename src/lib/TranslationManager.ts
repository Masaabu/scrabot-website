import ja from "@/locales/ja/common.json";
import en from "@/locales/en/common.json";

const translations: Record<string, Record<string, string>> = {
  ja,
  en
};

export default class TranslationManager {
  locale: string;

  constructor(locale: string) {
    this.locale = locale;
  }

  t(key: string): string {
    return translations[this.locale][key];
  } 
}
