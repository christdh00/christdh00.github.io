/* Independent music-page controls. The main portfolio's script.js is not loaded here. */
(() => {
  const root = document.documentElement;
  const i18n = {
    en: {
      skip: 'Skip to content', navHome: 'Home', navProjects: 'Projects', navMusic: 'Music', navContact: 'Contact',
      eyebrow: 'ANOTHER SIDE OF MY STORY', heroTitleA: 'Pianist', heroTitleB: '& Organist.',
      heroIntro: 'Music has been part of my life since elementary school. After years of formal piano training and graduating from music school, I continue to play the piano and organ, including at church.',
      heroSub: 'Alongside my Statistics Specialist studies, I am pursuing a Minor in Music at the University of Toronto.',
      journeyCta: 'My musical journey', recordingsCta: 'Performances & recordings', heroNote: 'Piano · Organ · Classical & sacred music', visualBadge: 'Always learning',
      journeyKicker: '01 / BACKGROUND', journeyTitleA: 'My musical', journeyTitleB: 'journey.', journeyDesc: 'A long-standing passion that continues alongside my work in statistics and data science.',
      story1Title: 'Early beginnings', story1Body: 'I began learning piano in elementary school, developing a lasting interest in music through regular practice and lessons.',
      story2Title: 'Formal music training', story2Body: 'I continued studying piano at music school and completed its program, building a stronger foundation in performance and musicianship.',
      story3Title: 'Music today', story3Body: 'I play piano and organ in church and study music at university alongside my Statistics Specialist program.',
      focusKicker: '02 / MUSICAL INTERESTS', focusTitleA: 'Piano, organ', focusTitleB: '& more.', focusDesc: 'The areas of music I enjoy exploring, performing, and learning about.',
      focusLabel1: 'KEYBOARD', focus1Title: 'Classical piano', focus1Body: 'Playing, interpreting, and continuing to develop my skills at the piano.',
      focusLabel2: 'CHURCH MUSIC', focus2Title: 'Organ & liturgical music', focus2Body: 'Serving through music at church, with a particular appreciation for organ repertoire and sacred music.',
      focusLabel3: 'STUDY & CREATIVITY', focus3Title: 'Musical studies', focus3Body: 'Broadening my musical perspective through my university Music Minor and composition coursework.',
      recordingsKicker: '03 / LISTENING ROOM', recordingsTitleA: 'Performances', recordingsTitleB: '& recordings.', recordingsDesc: 'A space for music I perform and share.',
      comingTitle: 'Recordings coming soon', comingBody: "I'll add performances and recordings here as I prepare them.", comingBadge: 'COMING SOON',
      closerKicker: 'BEYOND MUSIC', closerTitleA: 'Curious about my', closerTitleB: 'other work?', closerDesc: 'Explore my projects in statistics, machine learning, and applied analytics on the main portfolio.', backCta: 'Back to my portfolio',
      footer: 'Piano · Organ · Data', top: 'Back to top ↑', pageTitle: 'Piano & Organ | Christopher Daniel Hitijahubessy', metaDesc: 'The musical journey of Christopher Daniel Hitijahubessy — pianist, organist, and University of Toronto music minor.',
      toggleLight: 'Switch to light theme', toggleDark: 'Switch to dark theme', selectLang: 'Select language', openMenu: 'Open menu', closeMenu: 'Close menu', backHome: 'Back to portfolio', mainNav: 'Main navigation'
    },
    fr: {
      skip: 'Aller au contenu', navHome: 'Accueil', navProjects: 'Projets', navMusic: 'Musique', navContact: 'Contact',
      eyebrow: 'UNE AUTRE FACETTE DE MON PARCOURS', heroTitleA: 'Pianiste', heroTitleB: 'et organiste.',
      heroIntro: "La musique fait partie de ma vie depuis l'école primaire. Après des années de formation au piano et l'obtention de mon diplôme d'école de musique, je continue à jouer du piano et de l'orgue, notamment à l'église.",
      heroSub: "Parallèlement à mes études en statistique, je poursuis une mineure en musique à l'Université de Toronto.",
      journeyCta: 'Mon parcours musical', recordingsCta: 'Prestations et enregistrements', heroNote: 'Piano · Orgue · Musique classique et sacrée', visualBadge: "Toujours en apprentissage",
      journeyKicker: '01 / PARCOURS', journeyTitleA: 'Mon parcours', journeyTitleB: 'musical.', journeyDesc: 'Une passion de longue date que je cultive parallèlement à mes études en statistique et en science des données.',
      story1Title: 'Mes débuts', story1Body: "J'ai commencé le piano à l'école primaire. Les cours et la pratique régulière ont nourri mon intérêt durable pour la musique.",
      story2Title: 'Formation musicale', story2Body: "J'ai poursuivi ma formation dans une école de musique et terminé son cursus, renforçant mes bases en interprétation et en pratique musicale.",
      story3Title: "La musique aujourd'hui", story3Body: "Je joue du piano et de l'orgue à l'église et j'étudie aussi la musique à l'université, en parallèle de ma spécialisation en statistique.",
      focusKicker: '02 / CENTRES D’INTÉRÊT', focusTitleA: 'Piano, orgue', focusTitleB: 'et plus.', focusDesc: "Les domaines musicaux que j'aime explorer, interpréter et approfondir.",
      focusLabel1: 'CLAVIER', focus1Title: 'Piano classique', focus1Body: 'Jouer, interpréter et continuer à développer mes compétences pianistiques.',
      focusLabel2: 'MUSIQUE LITURGIQUE', focus2Title: 'Orgue et musique liturgique', focus2Body: "Participer à la vie musicale de l'église, avec un intérêt particulier pour le répertoire d'orgue et la musique sacrée.",
      focusLabel3: 'ÉTUDES ET CRÉATIVITÉ', focus3Title: 'Études musicales', focus3Body: "Élargir mes horizons musicaux grâce à ma mineure en musique et à mes cours de composition à l'université.",
      recordingsKicker: '03 / ESPACE D’ÉCOUTE', recordingsTitleA: 'Prestations', recordingsTitleB: 'et enregistrements.', recordingsDesc: 'Un espace pour partager la musique que je joue.',
      comingTitle: 'Enregistrements à venir', comingBody: "J'ajouterai ici des prestations et des enregistrements au fur et à mesure de leur préparation.", comingBadge: 'À VENIR',
      closerKicker: 'AU-DELÀ DE LA MUSIQUE', closerTitleA: 'Envie de découvrir', closerTitleB: 'mes autres projets ?', closerDesc: "Découvrez mes projets en statistique, apprentissage automatique et analyse de données sur mon portfolio principal.", backCta: 'Retour au portfolio',
      footer: 'Piano · Orgue · Données', top: 'Retour en haut ↑', pageTitle: 'Piano et orgue | Christopher Daniel Hitijahubessy', metaDesc: "Le parcours musical de Christopher Daniel Hitijahubessy — pianiste, organiste et étudiant en musique à l'Université de Toronto.",
      toggleLight: 'Passer au thème clair', toggleDark: 'Passer au thème sombre', selectLang: 'Choisir la langue', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', backHome: 'Retour au portfolio', mainNav: 'Navigation principale'
    },
    id: {
      skip: 'Lewati ke konten', navHome: 'Beranda', navProjects: 'Proyek', navMusic: 'Musik', navContact: 'Kontak',
      eyebrow: 'SISI LAIN DARI PERJALANANKU', heroTitleA: 'Pianis', heroTitleB: 'dan Organis.',
      heroIntro: 'Musik sudah menjadi bagian dari hidupku sejak SD. Setelah bertahun-tahun belajar piano secara formal dan lulus dari sekolah musik, aku masih aktif memainkan piano dan organ, termasuk di gereja.',
      heroSub: 'Selain menempuh program spesialis Statistika, aku juga mengambil minor dalam bidang Musik di University of Toronto.',
      journeyCta: 'Perjalanan musikku', recordingsCta: 'Penampilan dan rekaman', heroNote: 'Piano · Organ · Musik klasik dan sakral', visualBadge: 'Terus belajar',
      journeyKicker: '01 / LATAR BELAKANG', journeyTitleA: 'Perjalanan', journeyTitleB: 'musikku.', journeyDesc: 'Kecintaan terhadap musik yang terus berkembang di samping studi statistika dan sains data.',
      story1Title: 'Awal mula', story1Body: 'Aku mulai belajar piano sejak SD. Latihan dan les secara rutin membuat ketertarikanku pada musik terus berkembang.',
      story2Title: 'Pendidikan musik formal', story2Body: 'Aku melanjutkan pendidikan piano di sekolah musik hingga lulus, sambil memperkuat dasar-dasar interpretasi dan keterampilan bermusik.',
      story3Title: 'Musik saat ini', story3Body: 'Sekarang aku memainkan piano dan organ di gereja serta belajar musik di universitas, bersamaan dengan studi spesialis Statistika.',
      focusKicker: '02 / MINAT MUSIK', focusTitleA: 'Piano, organ,', focusTitleB: 'dan lainnya.', focusDesc: 'Bidang-bidang musik yang senang kupelajari, mainkan, dan dalami.',
      focusLabel1: 'INSTRUMEN TUTS', focus1Title: 'Piano klasik', focus1Body: 'Memainkan, menginterpretasikan, dan terus mengembangkan keterampilan bermain piano.',
      focusLabel2: 'MUSIK GEREJA', focus2Title: 'Organ dan musik liturgi', focus2Body: 'Melayani melalui musik di gereja, dengan minat khusus pada repertoar organ dan musik sakral.',
      focusLabel3: 'STUDI DAN KREATIVITAS', focus3Title: 'Studi musik', focus3Body: 'Memperluas wawasan musik melalui program minor Musik dan mata kuliah komposisi di universitas.',
      recordingsKicker: '03 / RUANG DENGAR', recordingsTitleA: 'Penampilan', recordingsTitleB: 'dan rekaman.', recordingsDesc: 'Tempat untuk membagikan musik yang kumainkan.',
      comingTitle: 'Rekaman segera hadir', comingBody: 'Aku akan menambahkan video penampilan dan rekaman musik di sini setelah siap.', comingBadge: 'SEGERA HADIR',
      closerKicker: 'DI LUAR MUSIK', closerTitleA: 'Penasaran dengan', closerTitleB: 'karya lainnya?', closerDesc: 'Lihat proyek statistika, machine learning, dan analisis data di portofolio utamaku.', backCta: 'Kembali ke portofolio',
      footer: 'Piano · Organ · Data', top: 'Kembali ke atas ↑', pageTitle: 'Piano dan Organ | Christopher Daniel Hitijahubessy', metaDesc: 'Perjalanan musik Christopher Daniel Hitijahubessy sebagai pianis, organis, dan mahasiswa minor Musik di University of Toronto.',
      toggleLight: 'Ganti ke mode terang', toggleDark: 'Ganti ke mode gelap', selectLang: 'Pilih bahasa', openMenu: 'Buka menu', closeMenu: 'Tutup menu', backHome: 'Kembali ke portofolio', mainNav: 'Navigasi utama'
    }
  };


  // Detailed musical portfolio content for all three language versions.
  const musicPortfolioTranslations = {
  "en": {
    "navRecital": "Recital",
    "navPerformances": "Performances",
    "heroIntro": "For around eleven years, I studied classical piano at Sekolah Yayasan Pendidikan Musik (YPM), from its elementary level through pre-conservatory studies and my final recital in 2024.",
    "heroSub": "Today, I am a Music Minor at the University of Toronto Scarborough and play piano and organ with Umat Katolik Indonesia (UKI) Toronto.",
    "recordingsCta": "Watch performances",
    "heroNote": "YPM alumnus · Classical piano · Piano & organ at UKI Toronto",
    "visualBadge": "11 years at YPM",
    "factYears": "years at YPM",
    "factRecital": "final recital",
    "factAwards": "graduation distinctions",
    "journeyKicker": "01 / MUSICAL JOURNEY",
    "journeyTitleA": "Eleven years of",
    "journeyTitleB": "music education.",
    "journeyDesc": "From the foundations of musicianship to an intensive pre-conservatory programme at Sekolah Yayasan Pendidikan Musik (YPM).",
    "story1Eyebrow": "YPM · ELEMENTARY LEVEL",
    "story1Title": "The foundations",
    "story1Body": "Alongside classical piano lessons, I studied music theory, solfège, choir, and recorder—building the listening, reading, and ensemble skills that shaped my later studies.",
    "story2Eyebrow": "YPM · PRE-CONSERVATORY",
    "story2Title": "Beyond the keyboard",
    "story2Body": "My studies expanded to advanced theory and solfège, music history, psychology, pedagogy, and counterpoint, alongside more demanding piano repertoire.",
    "story3Eyebrow": "2024 · FINAL EXAMINATION",
    "story3Title": "The final recital",
    "story3Body": "I completed my YPM studies with a six-work recital programme, including a compulsory piece announced only about six weeks before the examination.",
    "recitalKicker": "02 / FINAL RECITAL · 2024",
    "recitalTitleA": "My graduating",
    "recitalTitleB": "recital programme.",
    "recitalDesc": "Six works spanning Baroque, Romantic, twentieth-century, and Indonesian repertoire.",
    "eraBaroque": "Bach / Hess arrangement",
    "eraEtude": "Étude",
    "sonataMovement": "First movement",
    "eraBallet": "Ballet transcription",
    "compulsoryNote": "Compulsory piece assigned approximately 1½ months before the recital.",
    "eraCompulsory": "Compulsory work",
    "awardsKicker": "03 / 2024 YPM DISTINCTIONS",
    "awardsTitleA": "Recognition at",
    "awardsTitleB": "graduation.",
    "awardsDesc": "Awards and results from my final examination at YPM in 2024.",
    "examResult": "FINAL EXAMINATION RESULT",
    "highHonors": "HIGH HONORS",
    "firstPrize": "1ST PRIZE",
    "todayKicker": "04 / MUSIC TODAY",
    "todayTitleA": "Still making",
    "todayTitleB": "music.",
    "todayDesc": "My musical life continues in Toronto, alongside my studies in Statistics at UTSC.",
    "todayCard1Kicker": "UNIVERSITY OF TORONTO SCARBOROUGH",
    "todayCard1Title": "Music Minor & ensembles",
    "todayCard1Body": "I'm pursuing a Minor in Music alongside my Statistics Specialist. I'm planning to take MUZA66 LEC02 — Small Ensembles (Acoustic), and I'm interested in connecting with other musicians for the course.",
    "todayCard2Kicker": "UKI TORONTO",
    "todayCard2Title": "Piano & organ at church",
    "todayCard2Body": "I'm active as a pianist and organist with Umat Katolik Indonesia (UKI) Toronto, continuing to make music as part of the local Indonesian Catholic community.",
    "collabKicker": "MUZA66 · SMALL ENSEMBLES (ACOUSTIC)",
    "collabTitle": "Interested in collaborating?",
    "collabBody": "If you're also planning to take MUZA66 and are looking for someone to make music with, feel free to reach out. I'd love to connect and explore repertoire together.",
    "collabCta": "Let's collaborate",
    "recordingsKicker": "05 / PERFORMANCE ARCHIVE",
    "recordingsTitleA": "Past",
    "recordingsTitleB": "performances.",
    "recordingsDesc": "A few past performances shared on YouTube. Each video starts at the relevant section and stops at the supplied end time.",
    "performance1": "PERFORMANCE 01",
    "performance2": "PERFORMANCE 02",
    "performance3": "PERFORMANCE 03",
    "performanceTitle1": "Performance archive · Clip 1",
    "performanceTitle2": "Performance archive · Clip 2",
    "performanceTitle3": "Performance archive · Clip 3",
    "video1Title": "Piano performance recording 1",
    "video2Title": "Piano performance recording 2",
    "video3Title": "Piano performance recording 3",
    "youtubeCta": "Watch on YouTube",
    "videoDisclaimer": "These excerpts are embedded from their original YouTube uploads. Playback availability depends on the videos' sharing settings.",
    "footer": "YPM · Piano · Organ · Toronto",
    "metaDesc": "Christopher Daniel Hitijahubessy: 11 years of classical piano studies at YPM, 2024 recital honours, piano and organ performances, and Music Minor at UTSC."
  },
  "fr": {
    "navRecital": "Récital",
    "navPerformances": "Concerts",
    "heroIntro": "Pendant environ onze ans, j'ai étudié le piano classique à la Sekolah Yayasan Pendidikan Musik (YPM), du niveau élémentaire au pré-conservatoire, jusqu'à mon récital final en 2024.",
    "heroSub": "Aujourd'hui, je poursuis une mineure en musique à l'Université de Toronto à Scarborough (UTSC) et je joue du piano et de l'orgue au sein d'Umat Katolik Indonesia (UKI) Toronto.",
    "recordingsCta": "Voir mes prestations",
    "heroNote": "Ancien élève de YPM · Piano classique · Piano et orgue à UKI Toronto",
    "visualBadge": "11 ans à YPM",
    "factYears": "ans à YPM",
    "factRecital": "récital final",
    "factAwards": "distinctions de fin d’études",
    "journeyKicker": "01 / PARCOURS MUSICAL",
    "journeyTitleA": "Onze ans de",
    "journeyTitleB": "formation musicale.",
    "journeyDesc": "Des bases de la pratique musicale à une formation approfondie au pré-conservatoire de la Sekolah Yayasan Pendidikan Musik (YPM).",
    "story1Eyebrow": "YPM · NIVEAU ÉLÉMENTAIRE",
    "story1Title": "Les bases",
    "story1Body": "En plus du piano classique, j'ai étudié la théorie musicale, le solfège, le chant choral et la flûte à bec, développant ainsi mon écoute, ma lecture musicale et ma pratique d'ensemble.",
    "story2Eyebrow": "YPM · PRÉ-CONSERVATOIRE",
    "story2Title": "Au-delà du clavier",
    "story2Body": "Ma formation s'est élargie à la théorie avancée, au solfège approfondi, à l'histoire de la musique, à la psychologie, à la pédagogie et au contrepoint, tout en abordant un répertoire pianistique plus exigeant.",
    "story3Eyebrow": "2024 · EXAMEN FINAL",
    "story3Title": "Le récital final",
    "story3Body": "J'ai terminé mes études à YPM par un récital de six œuvres, dont une pièce imposée communiquée environ six semaines avant l'examen.",
    "recitalKicker": "02 / RÉCITAL FINAL · 2024",
    "recitalTitleA": "Le programme de",
    "recitalTitleB": "mon récital final.",
    "recitalDesc": "Six œuvres allant du baroque au romantisme, jusqu'au XXe siècle et au répertoire indonésien.",
    "eraBaroque": "Arrangement Bach / Hess",
    "eraEtude": "Étude",
    "sonataMovement": "Premier mouvement",
    "eraBallet": "Transcription de ballet",
    "compulsoryNote": "Pièce imposée communiquée environ un mois et demi avant le récital.",
    "eraCompulsory": "Pièce imposée",
    "awardsKicker": "03 / DISTINCTIONS YPM · 2024",
    "awardsTitleA": "Distinctions obtenues",
    "awardsTitleB": "en fin de cursus.",
    "awardsDesc": "Prix et résultats obtenus lors de mon examen final à YPM en 2024.",
    "examResult": "RÉSULTAT DE L'EXAMEN FINAL",
    "highHonors": "HIGH HONORS",
    "firstPrize": "1ST PRIZE",
    "todayKicker": "04 / LA MUSIQUE AUJOURD'HUI",
    "todayTitleA": "La musique",
    "todayTitleB": "continue.",
    "todayDesc": "Ma vie musicale se poursuit à Toronto, parallèlement à mes études en statistique à UTSC.",
    "todayCard1Kicker": "UNIVERSITÉ DE TORONTO À SCARBOROUGH",
    "todayCard1Title": "Mineure en musique et ensembles",
    "todayCard1Body": "Je poursuis une mineure en musique en parallèle de ma spécialisation en statistique. Je prévois de suivre MUZA66 LEC02 — Small Ensembles (Acoustic) et je souhaite rencontrer d'autres musiciens pour ce cours.",
    "todayCard2Kicker": "UKI TORONTO",
    "todayCard2Title": "Piano et orgue à l'église",
    "todayCard2Body": "Je suis actif comme pianiste et organiste au sein d'Umat Katolik Indonesia (UKI) Toronto, et je continue à faire de la musique avec la communauté catholique indonésienne locale.",
    "collabKicker": "MUZA66 · PETITS ENSEMBLES ACOUSTIQUES",
    "collabTitle": "Envie de collaborer ?",
    "collabBody": "Si vous prévoyez également de suivre MUZA66 et recherchez d'autres musiciens, n'hésitez pas à me contacter. J'aimerais échanger et explorer du répertoire ensemble.",
    "collabCta": "Collaborons !",
    "recordingsKicker": "05 / ARCHIVES DE PRESTATIONS",
    "recordingsTitleA": "Mes prestations",
    "recordingsTitleB": "passées.",
    "recordingsDesc": "Quelques prestations publiées sur YouTube. Chaque extrait commence et se termine aux horaires indiqués.",
    "performance1": "PRESTATION 01",
    "performance2": "PRESTATION 02",
    "performance3": "PRESTATION 03",
    "performanceTitle1": "Archive de prestation · Extrait 1",
    "performanceTitle2": "Archive de prestation · Extrait 2",
    "performanceTitle3": "Archive de prestation · Extrait 3",
    "video1Title": "Enregistrement de piano 1",
    "video2Title": "Enregistrement de piano 2",
    "video3Title": "Enregistrement de piano 3",
    "youtubeCta": "Voir sur YouTube",
    "videoDisclaimer": "Ces extraits proviennent de vidéos YouTube originales. Leur disponibilité dépend des autorisations de diffusion définies par leurs auteurs.",
    "footer": "YPM · Piano · Orgue · Toronto",
    "metaDesc": "Le parcours musical de Christopher Daniel Hitijahubessy : onze ans de piano classique à YPM, distinctions au récital final de 2024, prestations et mineure en musique à UTSC."
  },
  "id": {
    "navRecital": "Resital",
    "navPerformances": "Penampilan",
    "heroIntro": "Selama kurang lebih 11 tahun, aku menempuh pendidikan piano klasik di Sekolah Yayasan Pendidikan Musik (YPM), dari tingkat elementer hingga pra-konservatori, dan menyelesaikannya dengan resital akhir pada 2024.",
    "heroSub": "Sekarang, aku mengambil minor Musik di University of Toronto Scarborough (UTSC) dan aktif memainkan piano serta organ bersama Umat Katolik Indonesia (UKI) Toronto.",
    "recordingsCta": "Tonton penampilanku",
    "heroNote": "Alumni YPM · Piano klasik · Piano dan organ di UKI Toronto",
    "visualBadge": "11 tahun di YPM",
    "factYears": "tahun di YPM",
    "factRecital": "resital akhir",
    "factAwards": "penghargaan kelulusan",
    "journeyKicker": "01 / PERJALANAN MUSIK",
    "journeyTitleA": "Sebelas tahun",
    "journeyTitleB": "belajar musik.",
    "journeyDesc": "Dari fondasi bermusik hingga pendidikan intensif tingkat pra-konservatori di Sekolah Yayasan Pendidikan Musik (YPM).",
    "story1Eyebrow": "YPM · TINGKAT ELEMENTER",
    "story1Title": "Membangun dasar",
    "story1Body": "Selain belajar piano klasik, aku juga mempelajari teori musik, solfeggio, paduan suara, dan rekorder. Semua ini memperkuat pendengaran, kemampuan membaca notasi, dan keterampilan bermain bersama.",
    "story2Eyebrow": "YPM · TINGKAT PRA-KONSERVATORI",
    "story2Title": "Lebih dari sekadar piano",
    "story2Body": "Pelajaranku meluas ke teori musik dan solfeggio tingkat lanjut, sejarah musik, psikologi, pedagogi, serta kontrapung, bersamaan dengan repertoar piano yang makin menantang.",
    "story3Eyebrow": "2024 · UJIAN AKHIR",
    "story3Title": "Resital kelulusan",
    "story3Body": "Aku menyelesaikan pendidikan di YPM melalui program resital enam karya, termasuk satu lagu wajib yang baru diberikan sekitar enam minggu sebelum ujian.",
    "recitalKicker": "02 / RESITAL AKHIR · 2024",
    "recitalTitleA": "Program resital",
    "recitalTitleB": "kelulusanku.",
    "recitalDesc": "Enam karya dari era Barok, Romantik, abad ke-20, hingga komposisi Indonesia.",
    "eraBaroque": "Aransemen Bach / Hess",
    "eraEtude": "Etude",
    "sonataMovement": "Bagian pertama",
    "eraBallet": "Transkripsi balet",
    "compulsoryNote": "Karya wajib yang diberikan sekitar 1,5 bulan sebelum resital.",
    "eraCompulsory": "Karya wajib",
    "awardsKicker": "03 / PENGHARGAAN YPM · 2024",
    "awardsTitleA": "Prestasi saat",
    "awardsTitleB": "kelulusan.",
    "awardsDesc": "Penghargaan dan hasil ujian akhirku di YPM pada tahun 2024.",
    "examResult": "HASIL UJIAN AKHIR",
    "highHonors": "HIGH HONORS",
    "firstPrize": "1ST PRIZE",
    "todayKicker": "04 / MUSIK SAAT INI",
    "todayTitleA": "Masih terus",
    "todayTitleB": "bermusik.",
    "todayDesc": "Kegiatan musikku berlanjut di Toronto, bersamaan dengan studi Statistika di UTSC.",
    "todayCard1Kicker": "UNIVERSITY OF TORONTO SCARBOROUGH",
    "todayCard1Title": "Minor Musik dan ansambel",
    "todayCard1Body": "Aku mengambil minor di bidang Musik bersamaan dengan Statistics Specialist. Aku berencana mengambil MUZA66 LEC02 — Small Ensembles (Acoustic) dan ingin berkenalan dengan musisi lain untuk kelas tersebut.",
    "todayCard2Kicker": "UKI TORONTO",
    "todayCard2Title": "Piano dan organ di gereja",
    "todayCard2Body": "Aku aktif sebagai pianis dan organis bersama Umat Katolik Indonesia (UKI) Toronto dan terus bermusik bersama komunitas Katolik Indonesia setempat.",
    "collabKicker": "MUZA66 · ANSAMBEL KECIL (AKUSTIK)",
    "collabTitle": "Tertarik untuk kolaborasi?",
    "collabBody": "Kalau kamu juga berencana mengambil MUZA66 dan sedang mencari teman untuk bermusik, silakan hubungi aku. Kita bisa kenalan dan mencoba repertoar bersama.",
    "collabCta": "Yuk, kolaborasi!",
    "recordingsKicker": "05 / ARSIP PENAMPILAN",
    "recordingsTitleA": "Penampilan",
    "recordingsTitleB": "terdahulu.",
    "recordingsDesc": "Beberapa penampilanku yang sudah diunggah ke YouTube. Setiap video langsung dimulai dan berhenti pada bagian yang dimaksud.",
    "performance1": "PENAMPILAN 01",
    "performance2": "PENAMPILAN 02",
    "performance3": "PENAMPILAN 03",
    "performanceTitle1": "Arsip penampilan · Cuplikan 1",
    "performanceTitle2": "Arsip penampilan · Cuplikan 2",
    "performanceTitle3": "Arsip penampilan · Cuplikan 3",
    "video1Title": "Rekaman penampilan piano 1",
    "video2Title": "Rekaman penampilan piano 2",
    "video3Title": "Rekaman penampilan piano 3",
    "youtubeCta": "Tonton di YouTube",
    "videoDisclaimer": "Cuplikan ini disematkan dari unggahan asli YouTube. Ketersediaan pemutaran bergantung pada pengaturan video tersebut.",
    "footer": "YPM · Piano · Organ · Toronto",
    "metaDesc": "Perjalanan musik Christopher Daniel Hitijahubessy: 11 tahun belajar piano klasik di YPM, penghargaan resital akhir 2024, penampilan piano dan organ, serta minor Musik di UTSC."
  }
};
  for (const lang of Object.keys(musicPortfolioTranslations)) {
    Object.assign(i18n[lang], musicPortfolioTranslations[lang]);
  }

  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');
  let language = 'en';
  try { const t = localStorage.getItem('portfolio-theme'); if (t === 'light' || t === 'dark') root.dataset.theme = t; } catch (_) { /* private browsing */ }

  function text(key) { return (i18n[language] || i18n.en)[key] || i18n.en[key] || key; }
  function syncThemeButton() {
    const target = root.dataset.theme === 'dark' ? 'toggleLight' : 'toggleDark';
    themeButton.setAttribute('aria-label', text(target));
    themeButton.title = text(target);
  }
  function applyLanguage(nextLanguage) {
    language = ['en','fr','id'].includes(nextLanguage) ? nextLanguage : 'en';
    root.lang = language;
    document.querySelectorAll('[data-t]').forEach((element) => {
      const key = element.getAttribute('data-t');
      element.textContent = text(key);
    });
    document.querySelectorAll('[data-t-title]').forEach(element => {
      element.title = text(element.getAttribute('data-t-title'));
    });
    document.querySelectorAll('.language-option').forEach((button) => {
      const chosen = button.dataset.lang === language;
      button.classList.toggle('is-active', chosen);
      button.setAttribute('aria-pressed', String(chosen));
    });
    document.querySelector('.language-switcher').setAttribute('aria-label', text('selectLang'));
    document.getElementById('music-navigation').setAttribute('aria-label', text('mainNav'));
    document.querySelector('.wordmark').setAttribute('aria-label', text('backHome'));
    document.querySelector('meta[name="description"]').content = text('metaDesc');
    document.querySelector('meta[property="og:description"]').content = text('metaDesc');
    document.querySelector('meta[property="og:title"]').content = text('pageTitle');
    document.title = text('pageTitle');
    syncThemeButton();
    menuButton.setAttribute('aria-label', text(navLinks.classList.contains('open') ? 'closeMenu' : 'openMenu'));
  }
  try { applyLanguage(localStorage.getItem('portfolio-language') || 'en'); } catch (_) { applyLanguage('en'); }
  document.querySelectorAll('.language-option').forEach(button => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      try { localStorage.setItem('portfolio-language', language); } catch (_) { /* optional */ }
    });
  });
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) { /* optional */ }
    syncThemeButton();
  });
  function closeMenu() {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', text('openMenu'));
  }
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', text(open ? 'closeMenu' : 'openMenu'));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.getElementById('music-year').textContent = String(new Date().getFullYear());
})();
