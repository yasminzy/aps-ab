import { defineStore } from "pinia"
import data from "./lkps.json"

export const useStore = defineStore("charts", {
  state: () => {
    return {
      data,

      tahunAjaran: [
        { kode: "ts-4", label: "2019/2020" },
        { kode: "ts-3", label: "2020/2021" },
        { kode: "ts-2", label: "2021/2022" },
        { kode: "ts-1", label: "2022/2023" },
        { kode: "ts", label: "2023/2024" }
      ],

      jabatanAkademik: [
        { kode: 4, label: "Guru Besar" },
        { kode: 3, label: "Lektor Kepala" },
        { kode: 2, label: "Lektor" },
        { kode: 1, label: "Asisten Ahli" },
        { kode: 0, label: "Tenaga Pengajar" }
      ],

      patterns: [
        "box",
        "cross-dash",
        "cross",
        "dash",
        "diagonal-right-left",
        "diagonal",
        "diamond-box",
        "diamond",
        "disc",
        "dot-dash",
        "dot",
        "line-vertical",
        "line",
        "plus",
        "ring",
        "square",
        "triangle-inverted",
        "triangle",
        "weave",
        "zigzag-vertical",
        "zigzag"
      ],

      backgroundColors: [
        "#29282d",
        "#456a30",
        "#47996b",
        "#615c60",
        "#6868ac",
        "#769e51",
        "#7d6461",
        "#859f94",
        "#85a1ac",
        "#894b5d",
        "#8a5796",
        "#8e7960",
        "#a0838f",
        "#a1c8c9",
        "#aea392",
        "#b3832f",
        "#b3906c",
        "#c6aaaf",
        "#cdb97d",
        "#cfbe54",
        "#d3927d",
        "#d65079",
        "#d67d70",
        "#dbd3cf",
        "#e187b8",
        "#e2c1be",
        "#e9435e",
        "#ecc371",
        "#f1ede9"
      ]
    }
  },

  getters: {
    getFrontmatter: (state) => {
      return (name) => state.data.filter((item) => item.title === name)
    }
  }
})
