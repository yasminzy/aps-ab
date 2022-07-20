import { Chart, Legend, Title, Tooltip } from "chart.js"

Chart.register(Legend, Title, Tooltip)

Chart.defaults.borderColor = "rgba(160, 157, 157, 0.25)"
Chart.defaults.color = "#a09d9f"
Chart.defaults.font.family = "'Roboto', 'sans-serif'"
Chart.defaults.font.size = 16
Chart.defaults.font.lineHeight = 1.5
Chart.defaults.layout.padding = 16
Chart.defaults.plugins.legend.position = "bottom"
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.padding = 16
