import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'id' | 'en';
export type Tema = 'pagi' | 'gelap';

const DICT: Record<string, { id: string; en: string }> = {
  nav_tentang: { id: 'Tentang', en: 'About' },
  nav_portfolio: { id: 'Portfolio', en: 'Portfolio' },
  nav_pendidikan: { id: 'Pendidikan', en: 'Education' },
  nav_pengalaman: { id: 'Pengalaman', en: 'Experience' },
  nav_layanan: { id: 'Layanan', en: 'Services' },
  nav_eksperimen: { id: 'Eksperimen', en: 'Experiments' },
  hubungi: { id: 'Hubungi Saya', en: 'Contact Me' },
  hero_badge: { id: 'Mahasiswa Sistem Informasi — UNISNU Jepara', en: 'Information Systems Student — UNISNU Jepara' },
  halo: { id: 'Halo, saya', en: 'Hello, I am' },
  hero_p: {
    id: 'Saya merancang dan membangun antarmuka web modern yang cepat dan rapi, mengintegrasikan arsitektur sistem, dan mengolah data menjadi eksplorasi interaktif — semua karya saya live dan terawat di TillRea.',
    en: 'I design and build modern web interfaces that are fast and tidy, integrate system architecture, and turn data into interactive exploration — all of my work is live and maintained at TillRea.',
  },
  lihat: { id: 'Lihat Portfolio', en: 'View Portfolio' },
  terbuka: { id: 'Terbuka untuk kolaborasi', en: 'Open to collaboration' },
  lokasi: { id: '📍 Jepara, Jawa Tengah', en: '📍 Jepara, Central Java' },
  sec_about_e: { id: '01 — Tentang Saya', en: '01 — About Me' },
  sec_about_h: { id: 'Membangun web yang cepat, rapi, dan benar-benar dipakai orang', en: 'Building websites that are fast, tidy, and genuinely used by people' },
  sec_port_h: { id: 'Proyek yang sudah live', en: 'Projects that are live' },
  sec_port_p: {
    id: 'Setiap proyek berjalan di subdomainnya sendiri dan bisa dikunjungi langsung — daftar ini terhubung ke Ruang Pameran TillRea.',
    en: 'Every project runs on its own subdomain and can be visited directly — this list is connected to the TillRea Exhibition Rooms.',
  },
  sec_pend_e: { id: '03 — Pendidikan', en: '03 — Education' },
  sec_pend_h: { id: 'Riwayat pendidikan', en: 'Education history' },
  sec_peng_e: { id: '04 — Pengalaman', en: '04 — Experience' },
  sec_peng_h: { id: 'Pengalaman & magang', en: 'Experience & internship' },
  sec_lay_e: { id: '05 — Layanan', en: '05 — Services' },
  sec_lay_h: { id: 'Jasa optimasi website & SEO lokal', en: 'Website optimization & local SEO services' },
  lay_badge: { id: 'Dibuka untuk UMKM & bisnis lokal', en: 'Open for MSMEs & local businesses' },
  sec_blog_e: { id: '06 — Hobi & Eksperimen', en: '06 — Hobbies & Experiments' },
  sec_blog_h: { id: 'Yang sedang saya ulik', en: 'What I am tinkering with' },
  sec_blog_p: {
    id: 'Saya tidak menulis blog — waktu luang saya habis untuk bereksperimen. Ini yang sedang saya oprek:',
    en: "I don't write blog posts — my spare time goes into experimenting. Here's what I'm tinkering with:",
  },
  sec_kon_e: { id: '07 — Kontak', en: '07 — Contact' },
  sec_kon_h: { id: 'Punya proyek, pertanyaan, atau sekadar mau menyapa?', en: 'Have a project, a question, or just want to say hi?' },
  sec_kon_p: {
    id: 'Saya selalu terbuka untuk kolaborasi dan peluang baru. Cara tercepat menghubungi saya adalah email atau Telegram — atau isi formulir di samping, nanti aplikasi email Anda yang meneruskan.',
    en: 'I am always open to collaboration and new opportunities. The fastest way to reach me is email or Telegram — or fill in the form beside this, and your email app will forward it.',
  },
  domisili: { id: 'Domisili', en: 'Location' },
  domisili_v: { id: 'Jepara, Jawa Tengah, Indonesia', en: 'Jepara, Central Java, Indonesia' },
  footer_desc: {
    id: 'Portofolio Fikri Hikam A. — Full-Stack Web & Data Analytics. Bagian dari museum digital TillRea di tillrea.my.id.',
    en: 'Portfolio of Fikri Hikam A. — Full-Stack Web & Data Analytics. Part of the TillRea digital museum at tillrea.my.id.',
  },
  f_berkas: { id: 'Berkas', en: 'Files' },
  f_admin: { id: 'Admin Pameran', en: 'Exhibition Admin' },
  f_lobi: { id: 'Lobi TillRea', en: 'TillRea Lobby' },
  f_jelajahi: { id: 'Jelajahi', en: 'Explore' },
  f_topik: { id: 'Topik Eksperimen', en: 'Experiment Topics' },
  f_home: { id: 'Beranda', en: 'Home' },
  f_tentang: { id: 'Tentang Saya', en: 'About Me' },
  kon_kontak: { id: 'Kontak', en: 'Contact' },
  f_lokasi: { id: 'Jepara, Jawa Tengah', en: 'Jepara, Central Java' },
  f_nama: { id: 'Nama', en: 'Name' },
  f_nama_ph: { id: 'Nama Anda', en: 'Your name' },
  f_pesan: { id: 'Pesan', en: 'Message' },
  f_pesan_ph: { id: 'Tulis pesan Anda…', en: 'Write your message…' },
  f_kirim: { id: 'Kirim Pesan', en: 'Send Message' },
  f_note: { id: 'Tombol ini membuka aplikasi email Anda, ditujukan ke fikrihikam9@gmail.com.', en: 'This button opens your email app, addressed to fikrihikam9@gmail.com.' },
};

type Prefs = {
  lang: Lang;
  tema: Tema;
  toggleLang: () => void;
  toggleTema: () => void;
  t: (k: string) => string;
};

const Ctx = createContext<Prefs>({
  lang: 'id',
  tema: 'pagi',
  toggleLang: () => {},
  toggleTema: () => {},
  t: (k) => DICT[k]?.id ?? k,
});

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');
  const [tema, setTema] = useState<Tema>('pagi');

  useEffect(() => {
    try {
      if (localStorage.getItem('tillrea-bahasa') === 'en') setLang('en');
      if (localStorage.getItem('tillrea-tema') === 'gelap') setTema('gelap');
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('tillrea-bahasa', lang); } catch (e) {}
  }, [lang]);

  useEffect(() => {
    if (tema === 'gelap') document.documentElement.setAttribute('data-tema', 'gelap');
    else document.documentElement.removeAttribute('data-tema');
    try { localStorage.setItem('tillrea-tema', tema); } catch (e) {}
  }, [tema]);

  const value: Prefs = {
    lang,
    tema,
    toggleLang: () => setLang((v) => (v === 'id' ? 'en' : 'id')),
    toggleTema: () => setTema((v) => (v === 'gelap' ? 'pagi' : 'gelap')),
    t: (k) => DICT[k]?.[lang] ?? DICT[k]?.id ?? k,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePrefs() {
  return useContext(Ctx);
}
