<script setup>
import { ref, computed } from "vue"
import { useStore } from "../../stores/charts.js"

import lodash from "lodash"
import pattern from "patternomaly"

import { Pie } from "vue-chartjs"
import { Chart, PieController, ArcElement } from "chart.js"

Chart.register(PieController, ArcElement)

const props = defineProps({
  data: Object
})

const data = ref(props.data)

const store = useStore()
const backgroundColors = computed(() => store.backgroundColors)

const chartData = computed(() => ({
  labels: data.value.labels,

  datasets: [
    {
      data: data.value.datasets,
      backgroundColor: pattern.generate(
        lodash.sampleSize(backgroundColors.value, data.value.datasets.length)
      )
    }
  ]
}))

const chartOptions = ref({
  elements: {
    arc: {
      borderColor: "rgba(160, 157, 157, 0.25)",
      borderWidth: 1.5,
      spacing: 1.5
    }
  },

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
  />
</template>
