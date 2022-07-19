<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["jabatan", "nama"],
  ["desc", "asc"]
)

const row = [
  "Magister/ Magister Terapan",
  "Doktor/ Doktor Terapan",
  "Bidang Sertifikasi",
  "Lembaga Penerbit"
]

const jabatan = ["-", "Asisten Ahli", "Lektor", "Lektor Kepala", "Guru Besar"]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Dosen</th>
        <th rowspan="2">NIDN/ NIDK</th>
        <th colspan="2">Nama Prodi Pasca Sarjana <sup>1)</sup></th>
        <th rowspan="2">Bidang Keahlian <sup>2)</sup></th>
        <th rowspan="2">Kesesuaian dengan Kompetensi Inti PS <sup>3)</sup></th>
        <th rowspan="2">Jabatan Akademik</th>
        <th rowspan="2">Nomor Sertifikat Pendidik Profesional <sup>4)</sup></th>
        <th colspan="2">
          Sertifikat Kompetensi/ Profesi/ Industri <sup>5)</sup>
        </th>
        <th rowspan="2">
          Mata Kuliah yang Diampu pada PS yang Diakreditasi <sup>6)</sup>
        </th>
        <th rowspan="2">
          Kesesuaian Bidang Keahlian dengan Mata Kuliah yang Diampu
          <sup>7)</sup>
        </th>
        <th rowspan="2">Mata Kuliah yang Diampu pada PS Lain <sup>8)</sup></th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="14" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.nama }}</td>
        <td>{{ item.nomorInduk }}</td>

        <td>{{ item.namaProdi.s2 }}</td>
        <td>{{ item.namaProdi.s3 }}</td>

        <td>{{ item.bidangKeahlian }}</td>

        <td class="text-center">
          {{ item.sesuaiKompetensi ? "✅" : "" }}
        </td>

        <td>{{ jabatan[item.jabatan] }}</td>

        <td>{{ item.noSertifikatPendidik }}</td>

        <td>{{ item.sertifikat.bidangSertifikasi }}</td>
        <td>{{ item.sertifikat.lembagaPenerbit }}</td>

        <td>{{ item.matkul }}</td>

        <td class="text-center">
          {{ item.bidangKeahlianSesuaiMatkul ? "✅" : "" }}
        </td>

        <td>{{ item.matkulDiPsLain }}</td>
      </tr>
    </tbody>

    <tfoot>
      <td></td>
      <td>NDT=</td>
      <CellMute :n="4" />
      <td>NDTPS=</td>
      <CellMute :n="1" />
      <td></td>
      <td colspan="2"></td>
      <CellMute :n="1" />
      <td></td>
      <CellMute :n="1" />
    </tfoot>
  </table>
</template>
