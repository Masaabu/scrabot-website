import ja from "@/locales/ja/common.json";
import en from "@/locales/en/common.json";
const translations = {
  ja,
  en
};

export default class TranslationManager {
  constructor(locale) {
    this.locale = locale;
  }

  t(key) {
    return translations[this.locale][key];
  } 
}
