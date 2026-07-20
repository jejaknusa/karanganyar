import { db, History, HistoryTranslation } from "astro:db";

export async function seedCulture() {
  await db.insert(History).values([
    {
      id: 1,
      year: 1745,
      cityId: 1,
    },
    {
      id: 2,
      year: 1755,
      cityId: 1,
    },
    {
      id: 3,
      year: 1757,
      cityId: 1,
    },
    {
      id: 4,
      year: 1847,
      cityId: 1,
    },
    {
      id: 5,
      year: 1917,
      cityId: 1,
    },
    {
      id: 5,
      year: 1930,
      cityId: 1,
    },
    {
      id: 7,
      year: 1946,
      cityId: 1,
    },
    {
      id: 8,
      year: 1950,
      cityId: 1,
    },
    {
      id: 9,
      year: 1968,
      cityId: 1,
    },
  ]);

  await db.insert(HistoryTranslation).values([
    {
      id: 1,
      historyId: 1,
      event: "Fajar Identitas",
      description: "Raden Mas Said secara resmi mencetuskan nama <b>'Karanganyar'</b> di sebuah padepokan setelah bertemu dengan Nyai Ageng Karang.",
      language: "id",
    },
    {
      id: 2,
      historyId: 1,
      event: "Dawn of Identity",
      description: "Raden Mas Said officially initiated the name <b>'Karanganyar'</b> in a hermitage after meeting Nyai Ageng Karang.",
      language: "en",
    },
    {
      id: 3,
      historyId: 2,
      event: "Pembagian Wilayah Mataram",
      description: "Melalui <b>Perjanjian Giyanti</b>, dukuh Karanganyar yang terletak di tanah Sukowati Selatan masuk ke dalam wilayah administrasi Kasultanan Yogyakarta.",
      language: "id",
    },
    {
      id: 4,
      historyId: 2,
      event: "Division of the Mataram Territory",
      description: "Through the <b>Giyanti Treaty</b>, Karanganyar hamlet located in Southern Sukowati entered the administrative territory of the Yogyakarta Sultanate.",
      language: "en",
    },
    {
      id: 5,
      historyId: 3,
      event: "Era Mangkunegaran",
      description: "Berdasarkan <b>Perjanjian Salatiga</b>, Raden Mas Said diangkat menjadi Mangkunegoro I dan Karanganyar resmi menjadi bagian dari Swapraja Mangkunegaran.",
      language: "id",
    },
    {
      id: 6,
      historyId: 3,
      event: "The Mangkunegaran Era",
      description: "Based on the <b>Salatiga Treaty</b>, Raden Mas Said was appointed as Mangkunegoro I and Karanganyar officially became part of the Mangkunegaran Principality.",
      language: "en",
    },
    {
      id: 7,
      historyId: 4,
      event: "Pusat Pemerintahan",
      description: "Mangkunegoro III membentuk <i>Onderregentschap</i> Karanganyar (Kabupaten Anom) pada 5 Juni, menjadikannya pusat pemerintahan resmi.",
      language: "id",
    },
    {
      id: 8,
      historyId: 4,
      event: "Administrative Center",
      description: "Mangkunegoro III established the Karanganyar <i>Onderregentschap</i> (Junior Regency) on June 5, marking it as an official administrative center.",
      language: "en",
    },
    {
      id: 9,
      historyId: 5,
      event: "Peningkatan Status Kabupaten",
      description: "Status wilayah dinaikkan menjadi <b>Regentschap (Kabupaten)</b> yang dipimpin oleh seorang Bupati berdasarkan <i>Ryksblad</i> 1917 Nomor 37.",
      language: "id",
    },
    {
      id: 10,
      historyId: 5,
      event: "Regency Status Elevation",
      description: "The regional status was elevated to <b>Regentschap (Regency)</b> led by a Regent based on <i>Ryksblad</i> 1917 Number 37.",
      language: "en",
    },
    {
      id: 11,
      historyId: 6,
      event: "Perubahan Status Administrasi",
      description: "Kabupaten Karanganyar sempat dihapuskan dan wilayahnya digabungkan ke Kabupaten Kota Mangkunegaran dengan status <b>Kawedanan</b>.",
      language: "id",
    },
    {
      id: 12,
      historyId: 6,
      event: "Administrative Status Change",
      description: "Karanganyar Regency was temporarily abolished and its territory merged into the Mangkunegaran City Regency with <b>Kawedanan</b> status.",
      language: "en",
    },
    {
      id: 13,
      historyId: 7,
      event: "Pembentukan Kembali",
      description: "Pemerintah Indonesia membekukan Swapraja melalui Penetapan Pemerintah No. 16/SD dan membentuk kembali <b>Kabupaten Karanganyar</b>.",
      language: "id",
    },
    {
      id: 14,
      historyId: 7,
      event: "Re-establishment",
      description: "The Indonesian government froze the Principality through Government Decree No. 16/SD and re-established <b>Karanganyar Regency</b>.",
      language: "en",
    },
    {
      id: 15,
      historyId: 8,
      event: "Otonomi Daerah",
      description: "Karanganyar resmi mendapatkan hak otonomi sebagai daerah kabupaten berdasarkan <b>UU No. 13 Tahun 1950</b>.",
      language: "id",
    },
    {
      id: 16,
      historyId: 8,
      event: "Regional Autonomy",
      description: "Karanganyar officially gained regional autonomy rights as a regency based on <b>Law No. 13 of 1950</b>.",
      language: "en",
    },
    {
      id: 17,
      historyId: 9,
      event: "Identitas Resmi",
      description: "Pemerintah menetapkan <b>Lambang Daerah</b> Kabupaten Karanganyar secara resmi melalui Peraturan Daerah No. 6 Tahun 1968.",
      language: "id",
    },
    {
      id: 18,
      historyId: 9,
      event: "Official Identity",
      description: "The government officially established the <b>Regional Emblem</b> of Karanganyar Regency through Regional Regulation No. 6 of 1968.",
      language: "en",
    },
  ]);
}
