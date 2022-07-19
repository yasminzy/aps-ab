import { Chart, Legend, Title, Tooltip } from "chart.js"
import { useDark } from "@vueuse/core"

const isDark = useDark()

Chart.register(Legend, Title, Tooltip)

Chart.defaults.color = isDark
  ? "rgba(245, 242, 243, 0.8)"
  : "rgba(16, 13, 14, 0.8)"
Chart.defaults.font.family = "'Roboto', 'sans-serif'"
Chart.defaults.font.size = 16
Chart.defaults.font.lineHeight = 1.5
Chart.defaults.layout.padding = 16
Chart.defaults.plugins.legend.position = "bottom"
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.padding = 16
