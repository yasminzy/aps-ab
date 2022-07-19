<script setup>
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const formatCurrency = (number) => Intl.NumberFormat("id-ID").format(number)

const sum = (name) => lodash.sumBy(props.data, name)
</script>

<template>
  <tr v-for="(item, index) in data" :key="index">
    <td>{{ item.no }}</td>
    <td class="text-left">{{ item.jenisPenggunaan }}</td>

    <td>{{ formatCurrency(item.upps["ts-2"]) }}</td>
    <td>{{ formatCurrency(item.upps["ts-1"]) }}</td>
    <td>{{ formatCurrency(item.upps["ts"]) }}</td>
    <td>{{ formatCurrency(item.uppsAvg) }}</td>

    <td>{{ formatCurrency(item.prodi["ts-2"]) }}</td>
    <td>{{ formatCurrency(item.prodi["ts-1"]) }}</td>
    <td>{{ formatCurrency(item.prodi["ts"]) }}</td>
    <td>{{ formatCurrency(item.prodiAvg) }}</td>
  </tr>

  <tr>
    <td colspan="2">Jumlah</td>

    <td>{{ formatCurrency(sum("upps['ts-2']")) }}</td>
    <td>{{ formatCurrency(sum("upps['ts-1']")) }}</td>
    <td>{{ formatCurrency(sum("upps['ts']")) }}</td>
    <td>{{ formatCurrency(sum("uppsAvg")) }}</td>

    <td>{{ formatCurrency(sum("prodi['ts-2']")) }}</td>
    <td>{{ formatCurrency(sum("prodi['ts-1']")) }}</td>
    <td>{{ formatCurrency(sum("prodi['ts']")) }}</td>
    <td>{{ formatCurrency(sum("prodiAvg")) }}</td>
  </tr>
</template>
