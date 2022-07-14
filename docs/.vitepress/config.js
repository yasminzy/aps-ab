module.exports = {
  description: "Kinerja dan evaluasi diri prodi D-III Alat Berat Poltekba",
  lang: "id",
  lastUpdated: true,
  markdown: {
    theme: "nord"
  },
  title: "APS Alat Berat Poltekba",
  titleTemplate: false,

  themeConfig: {
    logo: "/media/logo.svg",
    siteTitle: false,

    nav: [
      {
        text: "Data",
        link: "/data/kondisi-eksternal",
        activeMatch: "/data/"
      },
      { text: "Admin", link: "/admin/" }
    ],

    sidebar: {
      "/data/": [
        {
          text: "Pembuka",
          collapsible: true,
          items: [
            { text: "Kondisi Eksternal", link: "/data/kondisi-eksternal" },
            {
              text: "Profil UPPS",
              link: "/data/profil-unit-pengelola-program-studi"
            }
          ]
        },
        {
          text: "Kriteria Akreditasi",
          collapsible: true,
          items: [
            {
              text: "Visi, Misi, Tujuan dan Strategi",
              link: "/data/kriteria-1-visi-misi-tujuan-dan-strategi"
            },
            {
              text: "Tata Pamong, Tata Kelola dan Kerja Sama",
              link: "/data/kriteria-2-tata-pamong-tata-kelola-dan-kerja-sama"
            },
            {
              text: "Mahasiswa",
              link: "/data/kriteria-3-mahasiswa"
            },
            {
              text: "Sumber Daya Manusia",
              link: "/data/kriteria-4-sumber-daya-manusia"
            },
            {
              text: "Keuangan, Sarana dan Prasarana",
              link: "/data/kriteria-5-keuangan-sarana-dan-prasarana"
            },
            {
              text: "Pendidikan",
              link: "/data/kriteria-6-pendidikan"
            },
            {
              text: "Penelitian",
              link: "/data/kriteria-7-penelitian"
            },
            {
              text: "Pengabdian kepada Masyarakat",
              link: "/data/kriteria-8-pengabdian-kepada-masyarakat"
            },
            {
              text: "Luaran dan Capaian Tridharma",
              link: "/data/kriteria-9-luaran-dan-capaian-tridharma-perguruan-tinggi"
            }
          ]
        },
        {
          text: "Penutup",
          collapsible: true,
          items: [
            { text: "Penjaminan Mutu", link: "/data/penjaminan-mutu" },
            {
              text: "Program Pengembangan Berkelanjutan",
              link: "/data/program-pengembangan-berkelanjutan"
            }
          ]
        }
      ]
    },

    outlineTitle: "Di halaman ini",

    footer: {
      message: "Aktualisasi Latsar Angkatan 58",
      copyright: "© 2022 Yasmin Zulfati Yusrina"
    },

    lastUpdatedText: "Terakhir diperbarui",

    docFooter: {
      prev: "Kembali",
      next: "Berikutnya"
    },

    algolia: {
      appId: "",
      apiKey: "",
      indexName: "apsab"
    }
  }
}
