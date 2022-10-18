<script setup>
import { ref, computed } from "vue"
import { useStore } from "../../stores/charts.js"
import lodash from "lodash"
import pattern from "patternomaly"

import { Bar } from "vue-chartjs"
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

Chart.register(BarController, CategoryScale, LinearScale, BarElement)

const props = defineProps({
  data: Object
})

const data = ref(props.data)

const store = useStore()
const patterns = computed(() => store.patterns)
const backgroundColors = computed(() => store.backgroundColors)

const datasets = data.value.datasets.map((item, index) => {
  if (data.value.datasets.length > 1) {
    return {
      ...item,
      backgroundColor: pattern.draw(
        lodash.sample(patterns.value),
        lodash.sample(backgroundColors.value)
      ),
      borderWidth: 1.5
    }
  } else {
    return {
      ...item,
      backgroundColor: pattern.generate(
        lodash.sampleSize(
          backgroundColors.value,
          data.value.datasets[0].data.length
        )
      ),
      borderWidth: 1.5
    }
  }
})

const chartData = computed(() => ({
  labels: data.value.labels,
  datasets
}))

const chartOptions = ref({
  plugins: {
    title: {
      text: data.value.title
    },
    legend: {
      display: data.value.datasets.length > 1 ? true : false
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: data.value.yLabel
      },
      ticks: {
        precision: 0
      }
    }
  }
})
</script>

<template>
  <Bar v-if="chartData.datasets.length" :chart-data="chartData" :chart-options="chartOptions" />
</template>
