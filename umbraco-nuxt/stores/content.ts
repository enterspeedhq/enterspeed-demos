import { defineStore } from "pinia";

export const useContent = defineStore({
  id: "content",

  state: () => ({
    pageContent: {
      meta: {},
      route: {},
    },
  }),

  getters: {
    getContent: (state) => state.pageContent,
  },

  actions: {
    setContent(content: any) {
      this.pageContent = content;
    },
  },
});
