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
    nav: [
      {
        text: "LEDPS",
        link: "/ledps/kondisi-eksternal",
        activeMatch: "/data/"
      },
      {
        text: "LKPS",
        link: "/lkps/1-tata-pamong-tata-kelola-dan-kerja-sama",
        activeMatch: "/lkps/"
      },
      { text: "Admin", link: "/admin/#/" }
    ],

    sidebar: {
      "/ledps/": [
        {
          text: "Eksternal dan Profil",
          collapsible: true,
          items: [
            { text: "Kondisi Eksternal", link: "/ledps/kondisi-eksternal" },
            {
              text: "Profil UPPS",
              link: "/ledps/profil-unit-pengelola-program-studi"
            }
          ]
        },
        {
          text: "Kriteria Akreditasi",
          collapsible: true,
          items: [
            {
              text: "Visi, Misi, Tujuan dan Strategi",
              link: "/ledps/kriteria-1-visi-misi-tujuan-dan-strategi"
            },
            {
              text: "Tata Pamong, Tata Kelola dan Kerja Sama",
              link: "/ledps/kriteria-2-tata-pamong-tata-kelola-dan-kerja-sama"
            },
            {
              text: "Mahasiswa",
              link: "/ledps/kriteria-3-mahasiswa"
            },
            {
              text: "Sumber Daya Manusia",
              link: "/ledps/kriteria-4-sumber-daya-manusia"
            },
            {
              text: "Keuangan, Sarana dan Prasarana",
              link: "/ledps/kriteria-5-keuangan-sarana-dan-prasarana"
            },
            {
              text: "Pendidikan",
              link: "/ledps/kriteria-6-pendidikan"
            },
            {
              text: "Penelitian",
              link: "/ledps/kriteria-7-penelitian"
            },
            {
              text: "Pengabdian kepada Masyarakat",
              link: "/ledps/kriteria-8-pengabdian-kepada-masyarakat"
            },
            {
              text: "Luaran dan Capaian Tridharma",
              link: "/ledps/kriteria-9-luaran-dan-capaian-tridharma-perguruan-tinggi"
            }
          ]
        },
        {
          text: "Mutu dan Pengembangan",
          collapsible: true,
          items: [
            { text: "Penjaminan Mutu", link: "/ledps/penjaminan-mutu" },
            {
              text: "Program Pengembangan Berkelanjutan",
              link: "/ledps/program-pengembangan-berkelanjutan"
            }
          ]
        }
      ],

      "/lkps/": [
        {
          text: "Kriteria Akreditasi",
          collapsible: true,
          items: [
            {
              text: "Tata Pamong, Tata Kelola dan Kerja Sama",
              link: "/lkps/1-tata-pamong-tata-kelola-dan-kerja-sama"
            },
            {
              text: "Mahasiswa",
              link: "/lkps/2-mahasiswa"
            },
            {
              text: "Sumber Daya Manusia",
              link: "/lkps/3-sumber-daya-manusia"
            },
            {
              text: "Keuangan, Sarana dan Prasarana",
              link: "/lkps/4-keuangan-sarana-dan-prasarana"
            },
            {
              text: "Pendidikan",
              link: "/lkps/5-pendidikan"
            },
            {
              text: "Penelitian",
              link: "/lkps/6-penelitian"
            },
            {
              text: "Pengabdian kepada Masyarakat",
              link: "/lkps/7-pengabdian-kepada-masyarakat"
            },
            {
              text: "Luaran dan Capaian Tridharma Perguruan Tinggi",
              link: "/lkps/8-luaran-dan-capaian-tridharma-perguruan-tinggi"
            },
            {
              text: "Penjaminan Mutu",
              link: "/lkps/9-penjaminan-mutu"
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
