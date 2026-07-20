import { db, Destination, DestinationTranslation } from "astro:db";

export async function seedDestination() {
  // Insert Destination main records with explicit IDs
  await db.insert(Destination).values([
    {
      id: 1,
      location: "Matesih",
      image: "destination/astana-giribangun.webp",
      slug: "astana-giribangun",
      gmap: "https://maps.app.goo.gl/8ydBqAnc73UcN1vV9",
      rating: 4.5,
      cityId: 1,
      latitude: -7.6521037,
      longitude: 111.0686767,
    },
    {
      id: 2,
      location: "Jenawi",
      image: "destination/candi-cetho.webp",
      slug: "candi-cetho",
      gmap: "https://maps.app.goo.gl/DLWVye4VnWRmLDwh8",
      rating: 4.7,
      cityId: 1,
      latitude: -7.5955572,
      longitude: 111.1548416,
    },
    {
      id: 3,
      location: "Ngargoyoso",
      image: "destination/candi-sukuh.webp",
      slug: "candi-sukuh",
      gmap: "https://maps.app.goo.gl/qJdfdK8eBfWcW3yP8",
      rating: 4.6,
      cityId: 1,
      latitude: -7.6273457,
      longitude: 111.1286134,
    },
    {
      id: 4,
      location: "Colomadu",
      image: "destination/de-tjolomadoe.webp",
      slug: "de-tjolomadoe",
      gmap: "https://maps.app.goo.gl/eCGKiBMJG2SnESmh6",
      rating: 4.6,
      cityId: 1,
      latitude: -7.53413,
      longitude: 110.7450544,
    },
    {
      id: 5,
      location: "Tawangmangu",
      image: "destination/grojogan-sewu.webp",
      slug: "grojogan-sewu",
      gmap: "https://maps.app.goo.gl/9FCJX3exxvfNwpwx6",
      rating: 4.7,
      cityId: 1,
      latitude: -7.6595765,
      longitude: 111.1260483,
    },
    {
      id: 6,
      location: "Ngargoyoso",
      image: "destination/jembatan-kaca.webp",
      slug: "jembatan-kaca",
      gmap: "https://maps.app.goo.gl/4bo98xPNm6WTsZzj6",
      rating: 4.7,
      cityId: 1,
      latitude: -7.595412,
      longitude: 111.1305396,
    },
    {
      id: 7,
      location: "Ngargoyoso",
      image: "destination/jumog.webp",
      slug: "jumog",
      gmap: "https://maps.app.goo.gl/P8o7bJU3V4fejLqg8",
      rating: 4.5,
      cityId: 1,
      latitude: -7.5941752,
      longitude: 111.1060849,
    },
    {
      id: 8,
      location: "Tawangmangu",
      image: "destination/lawu-park.webp",
      slug: "lawu-park",
      gmap: "https://maps.app.goo.gl/7kJYJHt8FgR6JNHh7",
      rating: 4.5,
      cityId: 1,
      latitude: -7.6637329,
      longitude: 111.1715076,
    },
    {
      id: 9,
      location: "Ngargoyoso",
      image: "destination/telaga-madirda.webp",
      slug: "telaga-madirda",
      gmap: "https://maps.app.goo.gl/wcp1bsNKrR6xF6XJ8",
      rating: 4.5,
      cityId: 1,
      latitude: -7.6399907,
      longitude: 111.1282185,
    },
    {
      id: 10,
      location: "Matesih",
      image: "destination/watu-kandang.webp",
      slug: "waatu-kandang",
      gmap: "https://maps.app.goo.gl/YpgnzNv5yLGBYHN68",
      rating: 4.4,
      cityId: 1,
      latitude: -7.6548164,
      longitude: 111.0586124,
    },
  ]);

  // Insert Destination Translation records
  await db.insert(DestinationTranslation).values([
    // 1. Astana Giribangun
    {
      language: "id",
      name: "Mausoleum Astana Giribangun",
      description:
        "Makam keluarga mantan Presiden Soeharto yang terletak di lereng Gunung Lawu, Karanganyar.",
      content: `### Kompleks Makam Keluarga
Astana Giribangun adalah kompleks makam keluarga untuk mantan Presiden Indonesia ke-2, **Suharto**, beserta istrinya, **Ibu Tien Soeharto**. Kompleks makam ini diresmikan pada tahun 1976 dan menampilkan arsitektur tradisional Jawa (Joglo) yang sangat megah.

### Keunikan & Arsitektur
* **Gaya Bangunan**: Memadukan unsur arsitektur keraton Surakarta dengan sentuhan modern yang rapi.
* **Lokasi**: Terletak di ketinggian sekitar 660 meter di atas permukaan laut, tepat di bawah makam para penguasa Mangkunegaran (Astana Mangadeg).
* **Suasana**: Dikelilingi taman yang rapi, pepohonan rindang, dan pemandangan lembah Karanganyar yang hijau dan asri.

### Etika Pengunjung
Bagi wisatawan yang berkunjung, diwajibkan untuk menjaga ketenangan, berpakaian sopan, dan menjaga kebersihan lingkungan sebagai bentuk penghormatan.`,
      destinationId: 1,
    },
    {
      language: "en",
      name: "Astana Giribangun Mausoleum",
      description:
        "The family mausoleum of the former President Suharto, located on the slopes of Mount Lawu, Karanganyar.",
      content: `### Family Mausoleum Complex
Astana Giribangun is the family mausoleum of the late 2nd President of Indonesia, **Suharto**, and his wife, **Mrs. Tien Soeharto**. Officially inaugurated in 1976, the complex features a grand and elegant traditional Javanese (Joglo) architectural style.

### Architecture & Unique Features
* **Building Style**: Blends traditional Surakarta palace elements with clean, modern touches.
* **Geographic Setting**: Situated at an altitude of approximately 660 meters above sea level, directly below the royal mausoleum of the Mangkunegaran rulers (Astana Mangadeg).
* **Ambiance**: Surrounded by beautifully manicured gardens, leafy trees, and scenic views of Karanganyar's lush valleys.

### Visitor Etiquette
To honor the sacred nature of the site, visitors are required to dress modestly, maintain silence, and respect the cleanliness of the surrounding environment.`,
      destinationId: 1,
    },

    // 2. Candi Cetho
    {
      language: "id",
      name: "Candi Cetho",
      description:
        "Candi Hindu peninggalan masa akhir Majapahit yang terletak di lereng Gunung Lawu.",
      content: `### Candi Hindu di Atas Awan
Candi Cetho merupakan candi bercorak Hindu dari akhir era kerajaan Majapahit (abad ke-15). Terletak pada ketinggian 1.496 meter di atas permukaan laut di lereng Gunung Lawu, candi ini menawarkan panorama alam yang menakjubkan dan sering diselimuti kabut tipis.

### Daya Tarik Utama
1. **Gerbang Megah**: Struktur gapura berbentuk bentar yang menyerupai pura di Bali, sangat populer sebagai spot foto.
2. **Kondisi Berkabut**: Udara dingin yang sejuk dan kabut tipis sering menyelimuti area candi, menciptakan suasana mistis nan spiritual.
3. **Relief & Patung**: Memiliki relief unik dengan penggambaran manusia berwajah mirip bangsa Sumeria atau suku Maya.

### Aktivitas Populer
* **Menikmati Matahari Terbit/Tenggelam** di balik celah gapura candi yang megah.
* **Wisata Sejarah & Budaya** mempelajari keruntuhan Majapahit dan kebangkitan animisme lokal.`,
      destinationId: 2,
    },
    {
      language: "en",
      name: "Cetho Temple",
      description:
        "A Hindu temple from the late Majapahit era located on the slopes of Mount Lawu.",
      content: `### The Hindu Temple Above the Clouds
Candi Cetho is a Hindu temple constructed during the twilight of the Majapahit Kingdom in the 15th century. Perched at an altitude of 1,496 meters above sea level on the slopes of Mount Lawu, it offers breathtaking views of the surrounding landscape.

### Main Attractions
1. **Grand Gateway**: A split-gate structure (Candi Bentar) reminiscent of Balinese temples, making it an extremely popular photography spot.
2. **Misty Ambiance**: Cool mountain air combined with rolling fog frequently blankets the temple, creating an ethereal, mystical aura.
3. **Reliefs & Statues**: Unique stone carvings depicting humanoid figures with distinct features, often compared to Mayan or Sumerian art.

### Popular Activities
* **Sunrise & Sunset Viewing** through the narrow gap of the temple's iconic gateway.
* **Historical & Cultural Exploration** of Majapahit's final years and the revival of local animistic traditions.`,
      destinationId: 2,
    },

    // 3. Candi Sukuh
    {
      language: "id",
      name: "Candi Sukuh",
      description:
        "Candi Hindu berbentuk piramida terpotong yang unik dan penuh misteri peninggalan akhir Majapahit.",
      content: `### Misteri Piramida Jawa
Candi Sukuh adalah candi Hindu paling kontroversial dan unik di Indonesia karena bentuk arsitekturnya yang menyerupai **piramida suku Maya** Chichen Itza di Meksiko. Dibangun pada abad ke-15 Masehi menjelang runtuhnya kerajaan Majapahit.

### Fitur & Keunikan
* **Arsitektur Berbeda**: Tidak seperti candi Hindu Jawa Tengah pada umumnya yang menjulang tinggi, Candi Sukuh berbentuk trapesium mendatar yang unik.
* **Relief Lingga-Yoni**: Melambangkan kesuburan dan proses kelahiran kembali secara spiritual. Relief ini dipahat di pintu masuk utama candi.
* **Situs Pembebasan**: Diyakini berfungsi sebagai tempat meruwat (melepaskan) jiwa dari kutukan atau dosa masa lalu.

### Tips Berkunjung
Karena terdapat banyak relief bernilai sakral dan erotik yang sarat akan nilai filosofis, pengunjung diharapkan bersikap bijak dan menghormati peninggalan sejarah ini.`,
      destinationId: 3,
    },
    {
      language: "en",
      name: "Sukuh Temple",
      description:
        "A unique and mysterious truncated pyramid Hindu temple dating back to the late Majapahit period.",
      content: `### The Mystery of the Javanese Pyramid
Candi Sukuh is one of the most intriguing and controversial Hindu temples in Indonesia due to its architectural form, which closely resembles a **Mayan pyramid** in Mexico. It was built in the 15th century AD, near the end of the Majapahit empire.

### Features & Unique Aspects
* **Unique Architecture**: Unlike typical Central Javanese Hindu temples that feature tall, towering spires, Candi Sukuh is a flat-topped trapezoidal pyramid.
* **Lingam & Yoni Reliefs**: Representing fertility and spiritual rebirth, these famous carvings are placed prominently near the main entrance portal.
* **Liberation Rituals**: Believed to have served as a sacred site for "ruwatan" (spiritual purification ceremonies) to free the soul from curses or bad karma.

### Visitor Advice
As the temple houses highly philosophical and sacred representations of human sexuality and fertility, visitors are advised to treat the site with deep cultural respect.`,
      destinationId: 3,
    },

    // 4. De Tjolomadoe
    {
      language: "id",
      name: "Museum De Tjolomadoe",
      description:
        "Bekas pabrik gula bersejarah peninggalan era kolonial yang dialihfungsikan menjadi pusat seni dan budaya modern.",
      content: `### Revitalisasi Pabrik Gula Bersejarah
De Tjolomadoe adalah objek wisata edukasi dan sejarah yang menakjubkan. Awalnya merupakan **Pabrik Gula Colomadu** yang didirikan pada tahun **1861** oleh Mangkunegara IV. Ini adalah simbol kejayaan industri gula Jawa di masa lampau.

### Transformasi Modern
* **Museum Mesin Raksasa**: Pengunjung dapat melihat mesin-mesin gilingan tebu buatan Jerman berukuran raksasa yang dipertahankan dalam kondisi aslinya.
* **Tjolomadoe Hall**: Ruang aula konser berkelas internasional yang sering menyelenggarakan acara musik besar dan pameran seni menarik.
* **Toko & Kafe**: Nikmati kopi hangat di area bekas stasiun ketel uap dengan desain arsitektur bernuansa *industrial-retro* yang trendi.

### Lokasi Strategis
Terletak sangat dekat dengan Bandara Adi Soemarmo Solo, menjadikannya destinasi yang sangat mudah diakses baik bagi pelancong lokal maupun internasional.`,
      destinationId: 4,
    },
    {
      language: "en",
      name: "De Tjolomadoe Museum",
      description:
        "A historic former colonial-era sugar factory transformed into a modern art and cultural center.",
      content: `### Revitalizing a Historic Sugar Factory
De Tjolomadoe is a fascinating historical and educational tourist spot. Originally operating as the **Colomadu Sugar Factory** founded in **1861** by Mangkunegara IV, it once stood as a major symbol of Java's golden industrial era.

### Modern Transformation
* **Giant Machinery Museum**: Visitors can wander around massive, original German-made sugarcane crushing machines preserved in their historic glory.
* **Tjolomadoe Hall**: A world-class concert hall and cultural center that hosts prominent music festivals, art exhibitions, and conferences.
* **Industrial Cafes & Shops**: Enjoy a warm beverage inside the former boiler room, re-imagined with a chic *industrial-retro* design.

### Strategic Location
Situated just minutes away from Solo's Adi Soemarmo International Airport, making it exceptionally convenient for travelers visiting Central Java.`,
      destinationId: 4,
    },

    // 5. Grojogan Sewu
    {
      language: "id",
      name: "Air Terjun Grojogan Sewu",
      description:
        "Air terjun ikonik setinggi 81 meter di lereng Gunung Lawu dengan udara pegunungan yang sangat sejuk.",
      content: `### Pesona Air Terjun Ribuan Pancuran
Grojogan Sewu (artinya *Air Terjun Seribu*) adalah destinasi alam legendaris di lereng Gunung Lawu. Memiliki tinggi sekitar **81 meter**, air terjun ini dikelilingi oleh hutan wisata yang rimbun dan asri seluas 20 hektar.

### Daya Tarik & Aktivitas
* **Kera Liar**: Kawasan ini dihuni oleh ratusan kera liar yang bebas berkeliaran. Pengunjung diimbau untuk menjaga barang bawaan mereka dengan baik.
* **Trekking Tangga Batu**: Untuk menuju air terjun, Anda akan menuruni ratusan anak tangga batu di bawah naungan pohon-pohon pinus yang menjulang tinggi dan sejuk.
* **Fasilitas Lengkap**: Tersedia kolam renang, jembatan gantung ikonik, warung sate kelinci khas Tawangmangu, dan kios cenderamata.`,
      destinationId: 5,
    },
    {
      language: "en",
      name: "Grojogan Sewu Waterfall",
      description:
        "An iconic 81-meter waterfall on the slopes of Mount Lawu featuring cool mountain air.",
      content: `### The Enchantment of a Thousand Falls
Grojogan Sewu (which translates to *A Thousand Waterfalls*) is a legendary natural destination nestled on the slopes of Mount Lawu. Featuring a towering **81-meter** main drop, it is surrounded by a sprawling 20-hectare lush forest reserve.

### Highlights & Activities
* **Wild Monkeys**: The forest is home to hundreds of wild monkeys roaming freely. Visitors are advised to watch their personal belongings closely.
* **Stone Steps Trekking**: To reach the waterfall, you will hike down hundreds of winding stone steps beneath giant pine and mahogany trees.
* **Excellent Facilities**: Complete with swimming pools, an iconic suspension bridge, stalls serving local Tawangmangu rabbit satay, and souvenir shops.`,
      destinationId: 5,
    },

    // 6. Jembatan Kaca
    {
      language: "id",
      name: "Jembatan Kaca Kemuning",
      description:
        "Jembatan kaca terpanjang di Jawa Tengah yang menawarkan pemandangan hamparan kebun teh Kemuning yang hijau.",
      content: `### Berjalan di Atas Hamparan Kebun Teh
Jembatan Kaca Kemuning yang merupakan ikon dari **Kemuning Sky Hills** adalah jembatan kaca terpanjang di Jawa Tengah. Menawarkan sensasi menegangkan sekaligus menyenangkan dengan memandang kebun teh langsung di bawah kaki Anda.

### Keunikan & Fitur
* **Kaca Transparan**: Menggunakan kaca berstruktur kuat dan tebal yang aman untuk dilalui banyak orang.
* **Pemandangan 360 Derajat**: Anda dapat menikmati keindahan Kebun Teh Kemuning yang hijau berundak-undak, serta kegagahan Gunung Lawu dari sudut pandang terbaik.
* **Spot Foto Estetik**: Latar belakang jembatan kaca transparan dengan kabut pegunungan memberikan hasil foto yang sangat menawan.

### Rekomendasi Kunjungan
Waktu terbaik untuk datang adalah saat sore hari ketika matahari mulai terbenam (golden hour) dan kabut tipis mulai turun menyelimuti kebun teh.`,
      destinationId: 6,
    },
    {
      language: "en",
      name: "Kemuning Sky Hills",
      description:
        "The longest glass bridge in Central Java, offering panoramic views of the lush Kemuning tea plantation.",
      content: `### Walking Above the Tea Fields
The Kemuning Glass Bridge, the crown jewel of **Kemuning Sky Hills**, is the longest glass-bottomed bridge in Central Java. It offers a thrilling experience of walking high above the ground with tea plantation views right under your feet.

### Unique Features & Highlights
* **Thick Tempered Glass**: Built with heavy-duty, highly engineered safety glass to ensure a completely secure walk.
* **360-Degree Panorama**: Marvel at the emerald-green terraced hills of the Kemuning Tea Garden and the majestic outlines of Mount Lawu.
* **Extreme Photo Spots**: The combination of the transparent walkway, mountain mist, and sunset skies yields highly aesthetic photographs.

### Best Time to Visit
We highly recommend visiting in the late afternoon to experience the magical golden hour and watch the gentle fog descend onto the tea valley.`,
      destinationId: 6,
    },

    // 7. Jumog
    {
      language: "id",
      name: "Air Terjun Jumog",
      description:
        "Air terjun indah berjuluk 'Surga Tersembunyi' dengan aliran air jernih dan suasana alam yang tenang.",
      content: `### Air Terjun 'Surga Tersembunyi'
Air Terjun Jumog sering kali dijuluki sebagai *The Lost Paradise* (Surga yang Tersembunyi) karena keindahannya yang tersembunyi di balik lembah hijau Ngargoyoso yang tenang, sejuk, dan asri.

### Keistimewaan Jumog
* **Air Terjun Kembar**: Memiliki aliran air yang terbagi dua, mengalir di antara batuan alam dan tanaman paku yang hijau subur.
* **Sungai Bermain**: Aliran air setelah air terjun sangat dangkal dan tenang dengan bebatuan kecil, sangat aman dan menyenangkan untuk anak-anak bermain air.
* **Kuliner Tepi Sungai**: Nikmati hidangan teh hangat dan sate kelinci di warung-warung tradisional yang berjejer rapi langsung di pinggiran aliran sungai yang jernih.

### Akses Wisata
Akses jalan menuju air terjun sudah tertata rapi berupa jalan setapak beton pendek yang ramah anak dan lansia dari area parkir utama.`,
      destinationId: 7,
    },
    {
      language: "en",
      name: "Jumog Waterfall",
      description:
        "A beautiful waterfall dubbed 'The Lost Paradise' featuring crystal-clear waters and serene nature.",
      content: `### 'The Lost Paradise' Waterfall
Jumog Waterfall is widely celebrated as *The Lost Paradise* owing to its secluded location hidden deep within a peaceful, verdant valley in Ngargoyoso.

### Key Features of Jumog
* **Split-Stream Waterfall**: Features two parallel streams cascading down a naturally mossy, fern-covered rock wall.
* **Playful Riverbed**: The stream below the falls is shallow, slow-moving, and filled with smooth river stones—making it incredibly safe and fun for children to splash around.
* **Riverside Dining**: Savor local hot tea and rabbit satay at traditional stalls lined right alongside the cool, rushing river.

### Accessibility
The path leading to the waterfall is fully paved and features a short, easy walk with stairs and bridges suitable for visitors of all ages.`,
      destinationId: 7,
    },

    // 8. Lawu Park
    {
      language: "id",
      name: "Lawu Park",
      description:
        "Taman rekreasi keluarga berkonsep alam dengan berbagai spot foto bersalju dan aktivitas luar ruangan.",
      content: `### Petualangan Keluarga di Hutan Pinus
The Lawu Park adalah taman wisata rekreasi keluarga yang mengusung konsep alam terpadu, dikelilingi oleh rindangnya pohon pinus Tawangmangu yang menjulang tinggi dan udara pegunungan yang menyejukkan.

### Aktivitas Seru & Wahana
* **Snow Park**: Area bermain salju buatan lengkap dengan dekorasi seperti di kutub utara, sangat disukai oleh anak-anak.
* **Mini Zoo**: Area interaktif di mana anak-anak dapat memberi makan kelinci, domba merino, dan melihat rusa tutul secara dekat.
* **Outbound & Adventure**: Jalur ATV, jembatan tali gantung, dan flying fox untuk menguji adrenalin Anda.
* **Glamping (Glamorous Camping)**: Pilihan akomodasi berkemah mewah dengan fasilitas setara hotel di tengah sejuknya kabut malam Lawu.`,
      destinationId: 8,
    },
    {
      language: "en",
      name: "The Lawu Park",
      description:
        "A family recreation park with a natural concept, featuring snowy photo spots and outdoor activities.",
      content: `### A Family Adventure in the Pine Forest
The Lawu Park is an integrated eco-tourism family park situated in the tall pine forests of Tawangmangu, offering crisp mountain air and a perfect mountain escape.

### Fun Activities & Attractions
* **Snow Park**: An artificial snow play area complete with polar-themed decorations, extremely popular with kids.
* **Mini Zoo**: An interactive zone where children can feed rabbits, merino sheep, and observe spotted deer up close.
* **Outbound & Adventure**: Thrilling activities including ATV tracks, suspension rope bridges, and ziplines to challenge your adrenaline.
* **Luxury Glamping**: Premium wooden cabins and geodesic domes that offer cozy, hotel-standard amenities amidst the cool mountain mist.`,
      destinationId: 8,
    },

    // 9. Telaga Madirda
    {
      language: "id",
      name: "Telaga Madirda",
      description:
        "Telaga alami berair jernih di kaki Gunung Lawu, tempat ideal untuk berkemah dan bersantai.",
      content: `### Kedamaian Telaga Alami di Kaki Gunung Lawu
Telaga Madirda adalah telaga alami tersembunyi yang berair sangat jernih dan tenang. Tempat ini menawarkan keindahan alam murni yang menentramkan jiwa, jauh dari hiruk-pikuk kehidupan perkotaan.

### Keindahan & Rekreasi
* **Mata Air Alami**: Air di telaga ini berasal langsung dari mata air Gunung Lawu, sehingga sangat jernih sampai Anda bisa melihat tanaman air dan ikan-ikan kecil di dasarnya.
* **Camping Ground**: Salah satu lokasi berkemah terbaik di Karanganyar dengan pemandangan langsung ke arah telaga dan perbukitan pinus yang asri.
* **Mendayung kano & Bebek Air**: Anda bisa menyewa kano atau perahu bebek air untuk menjelajahi keindahan telaga secara perlahan.`,
      destinationId: 9,
    },
    {
      language: "en",
      name: "Madirda Lake",
      description:
        "A natural lake with crystal-clear waters at the foot of Mount Lawu, ideal for camping and relaxation.",
      content: `### Serenity of a Natural Lake at Mount Lawu's Foot
Telaga Madirda is a pristine natural lake offering calm, crystal-clear spring water. It provides an exceptionally peaceful environment, perfect for relaxing and reconnecting with nature away from busy city life.

### Scenic Highlights & Recreation
* **Pristine Spring Water**: The lake is fed directly by mountain springs, making it so transparent that you can easily spot water plants and small fish swimming along the lakebed.
* **Premier Camping Site**: Renowned as one of the best campgrounds in Karanganyar, offering panoramic lake views against a backdrop of pine-covered hills.
* **Canoeing & Paddle Boating**: Visitors can rent canoes or swan-shaped paddle boats to leisurely cruise around the calm waters.`,
      destinationId: 9,
    },

    // 10. Watu Kandang
    {
      language: "id",
      name: "Situs Megalitik Watu Kandang",
      description:
        "Situs purbakala zaman megalitikum dengan susunan batu temu gelang peninggalan nenek moyang.",
      content: `### Jejak Megalitik Zaman Perunggu
Situs Watu Kandang adalah situs arkeologi purbakala yang berharga di Karanganyar. Menghadirkan peninggalan prasejarah berupa susunan batu melingkar (temu gelang) dari zaman megalitikum (batu besar) yang diperkirakan berasal dari zaman perunggu.

### Makna Sejarah
* **Temu Gelang**: Batuan andesit berukuran besar ditanam di tanah membentuk pola kandang/lingkaran konsentris yang rapi.
* **Tempat Pemujaan**: Para arkeolog meyakini situs ini digunakan oleh manusia purba sebagai tempat ritual penghormatan kepada arwah leluhur.
* **Situs Pemakaman**: Berfungsi juga sebagai batas sakral untuk upacara penguburan jenazah (dolmen/peti kubur batu) masa lampau.

### Edukasi Wisata
Destinasi ini sangat cocok untuk wisata edukasi prasejarah, membuka wawasan kita tentang peradaban nenek moyang bangsa Indonesia di masa lampau.`,
      destinationId: 10,
    },
    {
      language: "en",
      name: "Watu Kandang Megalithic Site",
      description:
        "An ancient megalithic site featuring circular stone arrangements built by prehistoric ancestors.",
      content: `### Traces of Bronze Age Megaliths
The Watu Kandang Site is an archaeological treasure in Karanganyar. It preserves prehistoric remains in the form of concentric circular stone arrangements (known as *temu gelang*) dating back to the Megalithic and Bronze Age.

### Historical Significance
* **Circular Stones (*Temu Gelang*)**: Massive andesite stones are deeply embedded in the earth, arranged in neat circular enclosures resembling cattle pens (*kandang*).
* **Ancestral Worship**: Archaeologists believe that prehistoric tribes used this sacred site to conduct rituals venerating ancestral spirits.
* **Prehistoric Burial Site**: It served as a ritual boundary for ancient burials, often associated with stone-cist graves and dolmens from the ancient past.

### Educational Value
A perfect destination for heritage and archaeological tourism, offering fascinating insights into the lifestyle and spiritual practices of Indonesia's ancient ancestors.`,
      destinationId: 10,
    },
  ]);
}
