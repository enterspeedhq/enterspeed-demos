import { defineNuxtPlugin } from "#app";
import { useContent } from "~/stores/content";
import { useDictionaries } from "~/stores/dictionaries";

export default defineNuxtPlugin(() => {
  const contentStore = useContent();
  const translationStore = useDictionaries();

  return {
    provide: {
      content: () => contentStore.getContent,
      translate: (item: string) => {
        if (
          !(translationStore.getTranslations as { [key: string]: string })[item]
        ) {
          // If no translation is found, warn the user and return the key
          console.warn(`Could not find translations for key: "${item}"`);
          return item;
        }

        return (translationStore.getTranslations as { [key: string]: string })[
          item
        ] as string;
      },
    },
  };
});
