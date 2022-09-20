import { defineStore } from "pinia";
import { IDictionary, IDictionaryLanguage } from "~~/enterspeed-types";

const availableLanguages = ["en-US"];
const translations: IDictionary = {
  "en-US": {},
};

export const useDictionaries = defineStore({
  id: "dictionaries",

  state: () => ({
    loaded: false,
    currentLanguage: availableLanguages[0],
    availableLanguages,
    translations,
  }),

  getters: {
    getTranslations: (state) =>
      state.translations[state.currentLanguage as keyof typeof translations],
    getCurrentLanguage: (state) => state.currentLanguage,
    hasLoaded: (state) => state.loaded,
  },

  actions: {
    setCurrentTranslations(content: IDictionaryLanguage) {
      this.translations[this.getCurrentLanguage] = content;
      this.loaded = true;
    },
    setLoaded(loaded: boolean) {
      this.loaded = loaded;
    },
    setCurrentLanguage(lang: string) {
      this.currentLanguage = lang;
      this.loaded = false;
    },
  },
});
