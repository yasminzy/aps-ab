import "./base.css"

import { createPinia } from "pinia"

import DefaultTheme from "vitepress/theme"
import ColNum from "./components/ColNum.vue"
import CellMute from "./components/CellMute.vue"
import ChartPie from "./components/ChartPie.vue"

import "./chart.js"
import "./tailwind.postcss"

const pinia = createPinia()

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(pinia)
    app.component("ColNum", ColNum)
    app.component("CellMute", CellMute)
    app.component("ChartPie", ChartPie)
  }
}
