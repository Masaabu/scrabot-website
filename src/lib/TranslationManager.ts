import ja from "@/locales/ja/common.json";
import en from "@/locales/en/common.json";
import { languages } from "@/locales/config";

const translations: Record<string, Record<string, string>> = {
  ja,
  en
};

export default class TranslationManager {
  locale: string;

  constructor(locale: string) {
    if (locale in languages) {
      this.locale = locale;
    } else {
      this.locale = "en";
      return
    }
  }

  t(key: string): string {
    return translations[this.locale][key];
  }
}
