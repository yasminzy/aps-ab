<script setup>
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const formatCurrency = (number) => Intl.NumberFormat("id-ID").format(number)

const sum = (name) => lodash.sumBy(props.data, name)
</script>

<template>
  <tfoot>
    <tr>
      <td colspan="2">TOTAL</td>

      <td>{{ formatCurrency(sum("upps['ts-2']")) }}</td>
      <td>{{ formatCurrency(sum("upps['ts-1']")) }}</td>
      <td>{{ formatCurrency(sum("upps['ts']")) }}</td>
      <td>{{ formatCurrency(sum("uppsAvg")) }}</td>

      <td>{{ formatCurrency(sum("prodi['ts-2']")) }}</td>
      <td>{{ formatCurrency(sum("prodi['ts-1']")) }}</td>
      <td>{{ formatCurrency(sum("prodi['ts']")) }}</td>
      <td>{{ formatCurrency(sum("prodiAvg")) }}</td>
    </tr>
  </tfoot>
</template>
