
const themeBtn = document.getElementById('theme-btn');
themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
};


const langSelect = document.getElementById('lang-select');

const texts = {
  en: {
    heroTitle: "Welcome to Soche East Youth — A Place of Worship, Growth & Purpose",
    heroText: "For there is no greater thing than seeking His presence.",
    aboutText: "At Soche East Youth, we believe in empowering young people through the Word, prayer, and community. We are committed to raising a generation that seeks God wholeheartedly.",
    event1: "🔥 Youth Prayer Night — Coming Soon",
    event2: "🎉 Youth Fun Day — December Event",
    event3: "📖 Bible Study Week — Dates to be Announced",
    email: "Email",
    whatsapp: "WhatsApp",
    joinWhatsapp: "Join Our WhatsApp Group",
    socialMedia: "Social Media"
  },
  ny: {
    heroTitle: "Takulandirani ku Soche East Youth — Malo a Pemphero, Kukula & Cholinga",
    heroText: "Palibe chabwino kuposa kufunafuna chiyanjano cha Mulungu.",
    aboutText: "Ku Soche East Youth timakhulupirira kulimbikitsa achinyamata kudzera mu Mawu, pemphero, ndi umodzi. Ndife odzipereka kulima m'badwo umene ukufunafuna Mulungu moona mtima.",
    event1: "🔥 Usiku wa Pemphero la Achinyamata — Akubwera Posachedwa",
    event2: "🎉 Tsiku la Achinyamata — Mwezi wa December",
    event3: "📖 Sabata ya Maphunziro a Baibulo — Tsiku lidzatchulidwa",
    email: "email",
    whatsapp: "WhatsApp",
    joinWhatsapp: "Lowa mu Gulu lathu la WhatsApp",
    socialMedia: "Zolumikizirana"
  }
};

function switchLanguage(lang) {
  document.getElementById('hero-title').textContent = texts[lang].heroTitle;
  document.getElementById('hero-text').textContent = texts[lang].heroText;
  document.getElementById('about-text').textContent = texts[lang].aboutText;

  document.getElementById('event1').textContent = texts[lang].event1;
  document.getElementById('event2').textContent = texts[lang].event2;
  document.getElementById('event3').textContent = texts[lang].event3;

  document.getElementById('contact-email').innerHTML =
    texts[lang].email + ": <a href='mailto:info@socheeast.mw'>info@socheeast.mw</a>";

  document.getElementById('contact-whatsapp').textContent =
    texts[lang].whatsapp + ": +265 000 000";

  document.getElementById('join-whatsapp').textContent = texts[lang].joinWhatsapp;
  document.getElementById('social-media').textContent = texts[lang].socialMedia;
}

langSelect.addEventListener('change', () => switchLanguage(langSelect.value));
