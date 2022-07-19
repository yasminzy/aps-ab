<script setup>
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const kolom = [
  "ketersediaan",
  "pelaksanaan",
  "monev",
  "umpanBalik",
  "tindakLanjut"
]

let sumPerKolom = []

for (let i = 0; i < kolom.length; i++) {
  sumPerKolom.push(lodash.filter(props.data, kolom[i]).length)
}
</script>

<template>
  <tfoot>
    <tr>
      <td>Jumlah</td>

      <td>N<sub>s</sub>={{ lodash.sum(sumPerKolom) }}</td>

      <td>N<sub>e</sub>={{ sumPerKolom[0] }}</td>
      <td>N<sub>d</sub>={{ sumPerKolom[1] }}</td>
      <td>N<sub>c</sub>={{ sumPerKolom[2] }}</td>
      <td>N<sub>b</sub>={{ sumPerKolom[3] }}</td>
      <td>N<sub>a</sub>={{ sumPerKolom[4] }}</td>

      <CellMute :n="1" />
    </tr>
  </tfoot>
</template>
