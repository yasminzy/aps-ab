import { defineStore } from "pinia"
import data from "./lkps.json"

export const useStore = defineStore("charts", {
  state: () => {
    return {
      data
    }
  },

  getters: {
    getFrontmatter: (state) => {
      return (name) => state.data.filter((item) => item.title === name)
    }
  }
})
