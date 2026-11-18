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
