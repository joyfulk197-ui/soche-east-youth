
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
} else {
  document.body.classList.remove('dark');
  themeBtn.textContent = '🌙';
}


const langBtn = document.getElementById('lang-toggle');


const texts = {
  en: {
    heroTitle: "Welcome to Soche East Youth — A Place of Worship, Growth & Purpose",
    heroText: "For there is no greater thing than seeking His presence.",
    heroJoin: "Join Us",
    heroContact: "Contact",
    aboutTitle: "About Us",
    aboutText: "At Soche East Youth, we believe in empowering young people through the Word, prayer, and community. We are committed to raising a generation that seeks God wholeheartedly.",
    bibleVerse: "“Let no one despise your youth, but be an example in speech, in conduct, in love, in faith, and in purity.”",
    bibleRef: "— 1 Timothy 4:12",
    programsTitle: "Service Times & Youth Program",
    program1Title: "Friday Service",
    program1Time: "5:00 PM — 6:00 PM",
    program2Title: "Sunday Service",
    program2Time: "1:30 PM — 4:30 PM",
    program3Title: "Youth Programs",
    program3Text: "Join our youth events, outreach, and camps.",
    programDownload: "Youth Program Preview",
    programBtn: "Download",
    memoriesTitle: "Youth Memories",
    announcementsTitle: "Upcoming Events",
    event1: " Cortage Visitations — Dates will be communicated",
    event2: " Get Together — December Event",
    event3: " Bible quiz — Dates to be Announced",
    trustTitle: "Why Trust Our Ministry",
    trust1Title: "Faith-Centered",
    trust1Text: "Rooted in Christ and guided by the Word of God.",
    trust2Title: "Active Fellowship",
    trust2Text: "Weekly gatherings focused on worship, growth, and unity.",
    trust3Title: "Community Impact",
    trust3Text: "Serving Soche East through outreach and love.",
    contactTitle: "Contact ",
    email: "Email",
    whatsapp: "WhatsApp",
    emailAddress: "socheeastyouth@gmail.com",
    whatsappNumber: "+265 889 869 625",
    footer: "© 2026 Soche East Youth — All rights reserved"
  },ch: {
  heroTitle: "Takulandirani ku Soche East Youth",
  heroText: "Apa ndi pamene achinyamata amabwera kuti apemphere, aphunzire , ndiponso akule  m'moyo  wawo wa uzimu.",
  heroJoin: "Join us",
  heroContact: "Lumikizanani nafe",

  aboutTitle: "Za Soche East Youth",
  aboutText: "Soche East Youth ndi gulu la achinyamata okonda Mulungu lomwe limasonkhana limodzi for prayers, Bible study, ndi fellowship. Cholinga chathu ndi kuona achinyamata akukula chikhulupiliro, character, ndi service.",

  bibleVerse: "“Usalole aliyense akupeputse chifukwa cha unyamata wako, koma ukhale example pa speech, conduct, love, faith, ndi purity.”",
  bibleRef: "— 1 Timoteyo 4:12",

  programsTitle: "Service Times & Youth Activities",

  program1Title: "Friday Prayer",
  program1Time: "5:00 PM — 6:00 PM",

  program2Title: "Sunday Service",
  program2Time: "1:30 PM — 4:30 PM",

  program3Title: "Youth Programs",
  program3Text: "Timakhala ndi youth meetings, special prayers, discussions, ndi other activities that help us grow spiritually.",
  programDownload: "View Youth Program",
  programBtn: "Download",

  memoriesTitle: "Youth Memories",

  announcementsTitle: "Upcoming Events",
  event1: " Cortage Visitations — Dates will be communicated",
  event2: " Youth Get Together — December",
  event3: " Bible Quiz — Dates TBA",

  trustTitle: "Why Trust Our Ministry",

  trust1Title: "Christ-Centered",
  trust1Text: "Everything we do is centered on Christ and guided by the Word of God.",

  trust2Title: "Strong Fellowship",
  trust2Text: "We meet weekly to worship together, grow in faith, and support each other.",

  trust3Title: "Community Impact",
  trust3Text: "We serve the Soche East community through outreach, love, and practical support.",

  contactTitle: "Contact Us",
  email: "Email",
  whatsapp: "WhatsApp",
  emailAddress: "socheeastyouth@gmail.com",
  whatsappNumber: "+265 889 869 625",

  footer: "© 2026 Soche East Youth — All rights reserved"
}

};


let currentLang = localStorage.getItem('lang') || 'en';
updateText(currentLang);
langBtn.textContent = currentLang === 'en' ? 'EN' : 'Ch';


langBtn.onclick = () => {
  currentLang = currentLang === 'en' ? 'ch' : 'en';
  updateText(currentLang);
  langBtn.textContent = currentLang === 'en' ? 'EN' : 'Ch';
  localStorage.setItem('lang', currentLang);
};

function updateText(lang) {
  document.getElementById('hero-title').textContent = texts[lang].heroTitle;
  document.getElementById('hero-text').textContent = texts[lang].heroText;
  document.getElementById('hero-join').textContent = texts[lang].heroJoin;
  document.getElementById('hero-contact').textContent = texts[lang].heroContact;

  document.getElementById('about-title').textContent = texts[lang].aboutTitle;
  document.getElementById('about-text').textContent = texts[lang].aboutText;

  document.getElementById('bible-verse').textContent = texts[lang].bibleVerse;
  document.getElementById('bible-ref').textContent = texts[lang].bibleRef;

  document.getElementById('programs-title').textContent = texts[lang].programsTitle;
  document.getElementById('program1-title').textContent = texts[lang].program1Title;
  document.getElementById('program1-time').textContent = texts[lang].program1Time;
  document.getElementById('program2-title').textContent = texts[lang].program2Title;
  document.getElementById('program2-time').textContent = texts[lang].program2Time;
  document.getElementById('program3-title').textContent = texts[lang].program3Title;
  document.getElementById('program3-text').textContent = texts[lang].program3Text;
  document.getElementById('program-download').textContent = texts[lang].programDownload;
  document.getElementById('program-btn').textContent = texts[lang].programBtn;

  document.getElementById('memories-title').textContent = texts[lang].memoriesTitle;

  document.getElementById('announcements-title').textContent = texts[lang].announcementsTitle;
  document.getElementById('event1').textContent = texts[lang].event1;
  document.getElementById('event2').textContent = texts[lang].event2;
  document.getElementById('event3').textContent = texts[lang].event3;

  document.getElementById('trust-title').textContent = texts[lang].trustTitle;
  document.getElementById('trust1-title').textContent = texts[lang].trust1Title;
  document.getElementById('trust1-text').textContent = texts[lang].trust1Text;
  document.getElementById('trust2-title').textContent = texts[lang].trust2Title;
  document.getElementById('trust2-text').textContent = texts[lang].trust2Text;
  document.getElementById('trust3-title').textContent = texts[lang].trust3Title;
  document.getElementById('trust3-text').textContent = texts[lang].trust3Text;

  document.getElementById('contact-title').textContent = texts[lang].contactTitle;
  document.getElementById('contact-email-label').textContent = texts[lang].email;
  document.getElementById('contact-email-address').textContent = texts[lang].emailAddress;
  document.getElementById('contact-whatsapp-label').textContent = texts[lang].whatsapp;
  document.getElementById('contact-whatsapp-number').textContent = texts[lang].whatsappNumber;

  document.getElementById('footer-text').textContent = texts[lang].footer;
}

const footerText = document.getElementById('footer-text');
const currentYear = new Date().getFullYear();
footerText.textContent = footerText.textContent.replace('2026', currentYear);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#memories .slide");
  const nextBtn = document.querySelector("#memories .slider-btn.next");
  const prevBtn = document.querySelector("#memories .slider-btn.prev");

  if (!slides.length) return; // if no slides, do nothing

  let currentIndex = 0;
  let sliderTimer;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    sliderTimer = setInterval(nextSlide, 4000); 
  }

  function resetAutoSlide() {
    clearInterval(sliderTimer);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  
  showSlide(currentIndex);
  startAutoSlide();
});
