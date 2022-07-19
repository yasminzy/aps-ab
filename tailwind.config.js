module.exports = {
  content: ["./docs/.vitepress/**/*.{js,ts,vue}", "./docs/**/*.{md,vue}"],

  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Roboto Mono", "monospace"]
    },

    extend: {
      colors: {
        mute: "var(--vp-c-white-mute)",
        "dark-mute": "var(--vp-c-black-mute)"
      }
    }
  }
}
