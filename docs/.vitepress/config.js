module.exports = {
  description:
    "Sistem Informasi Akreditasi Program Studi D-III Alat Berat Poltekba",
  lang: "id",
  lastUpdated: true,
  markdown: {
    theme: "nord"
  },
  title: "SI APS Alat Berat",
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
        link: "/lkps/tabel-1",
        activeMatch: "/lkps/"
      }
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
          text: "Tata Pamong, Tata Kelola dan Kerja Sama",
          collapsible: true,
          items: [{ text: "Tabel 1", link: "/lkps/tabel-1" }]
        },
        {
          text: "Mahasiswa",
          collapsible: true,
          items: [{ text: "Tabel 2.a.2", link: "/lkps/tabel-2a2" }]
        },
        {
          text: "Sumber Daya Manusia",
          collapsible: true,
          items: [
            { text: "Tabel 3.a.1", link: "/lkps/tabel-3a1" },
            { text: "Tabel 3.a.2", link: "/lkps/tabel-3a2" },
            { text: "Tabel 3.a.3", link: "/lkps/tabel-3a3" },
            { text: "Tabel 3.a.4", link: "/lkps/tabel-3a4" },
            { text: "Tabel 3.a.5", link: "/lkps/tabel-3a5" },
            { text: "Tabel 3.b.1", link: "/lkps/tabel-3b1" },
            { text: "Tabel 3.b.2", link: "/lkps/tabel-3b2" },
            { text: "Tabel 3.b.3", link: "/lkps/tabel-3b3" },
            { text: "Tabel 3.b.5", link: "/lkps/tabel-3b5" },
            { text: "Tabel 3.b.7", link: "/lkps/tabel-3b7" },
            { text: "Tabel 3.b.8", link: "/lkps/tabel-3b8" },
            { text: "Tabel 3.c", link: "/lkps/tabel-3c" }
          ]
        },
        {
          text: "Keuangan, Sarana dan Prasarana",
          collapsible: true,
          items: [
            { text: "Tabel 4.a", link: "/lkps/tabel-4a" },
            { text: "Tabel 4.b", link: "/lkps/tabel-4b" },
            { text: "Tabel 4.c", link: "/lkps/tabel-4c" }
          ]
        },
        {
          text: "Pendidikan",
          collapsible: true,
          items: [
            { text: "Tabel 5.a.1", link: "/lkps/tabel-5a1" },
            { text: "Tabel 5.a.2", link: "/lkps/tabel-5a2" },
            { text: "Tabel 5.c", link: "/lkps/tabel-5c" },
            { text: "Tabel 5.d", link: "/lkps/tabel-5d" }
          ]
        },
        {
          text: "Pengabdian kepada Masyarakat",
          collapsible: true,
          items: [{ text: "Tabel 7", link: "/lkps/tabel-7" }]
        },
        {
          text: "Luaran dan Capaian Tridharma Perguruan Tinggi",
          collapsible: true,
          items: [
            { text: "Tabel 8.a", link: "/lkps/tabel-8a" },
            { text: "Tabel 8.b.1", link: "/lkps/tabel-8b1" },
            { text: "Tabel 8.b.2", link: "/lkps/tabel-8b2" },
            { text: "Tabel 8.c", link: "/lkps/tabel-8c" },
            { text: "Tabel 8.d.1", link: "/lkps/tabel-8d1" },
            { text: "Tabel 8.d.2", link: "/lkps/tabel-8d2" },
            { text: "Tabel 8.e.1", link: "/lkps/tabel-8e1" },
            { text: "Tabel 8.e.2", link: "/lkps/tabel-8e2" },
            { text: "Tabel 8.f.4", link: "/lkps/tabel-8f4" }
          ]
        },
        {
          text: "Penjaminan Mutu",
          collapsible: true,
          items: [
            { text: "Tabel 9.a", link: "/lkps/tabel-9a" },
            { text: "Tabel 9.b", link: "/lkps/tabel-9b" }
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

    editLink: {
      pattern: "https://apsab.netlify.app/admin",
      text: "Edit data"
    }
  }
}
