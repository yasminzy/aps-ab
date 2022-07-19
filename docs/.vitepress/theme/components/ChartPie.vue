<script setup>
import { ref, computed, onMounted } from "vue"
import { Pie } from "vue-chartjs"
import { Chart, PieController, ArcElement } from "chart.js"

Chart.register(PieController, ArcElement)

const props = defineProps({
  data: Object
})

const data = ref(props.data)

const backgroundColors = [
  "#6868ac",
  "#85a1ac",
  "#b3906c",
  "#d65079",
  "#d67d70",
  "#e187b8",
  "#e9435e",
  "#ecc371"
]

const chartData = computed(() => ({
  labels: data.value.labels,

  datasets: [
    {
      data: data.value.datasets,
      backgroundColor: backgroundColors.slice(0, data.value.datasets.length)
    }
  ]
}))

const chartOptions = ref({
  plugins: {
    title: {
      text: data.value.title
    }
  }
})
</script>

<template>
  <Pie
    v-if="chartData.datasets.length"
    :chart-data="chartData"
    :chart-options="chartOptions"
    css-classes="chart-container"
  />
</template>
