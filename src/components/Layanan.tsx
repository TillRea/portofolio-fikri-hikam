import { Gauge, Search, MapPin } from 'lucide-react';

const services = [
  {
    icon: Gauge,
    title: 'Audit & Kecepatan',
    desc: 'Pemeriksaan skor performa, gambar berat, dan hambatan teknis — dirangkum jadi laporan prioritas yang jelas.',
  },
  {
    icon: Search,
    title: 'SEO Teknis & On-Page',
    desc: 'Title & meta description, struktur heading, sitemap, schema, sampai pemasangan GA4 dan Search Console yang benar.',
  },
  {
    icon: MapPin,
    title: 'SEO Lokal & Google Maps',
    desc: 'Optimasi Google Business Profile — kategori, foto, jam operasional, dan ulasan — agar mudah ditemukan pelanggan sekitar.',
  },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              05 — Layanan
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
              Jasa optimasi website &amp; SEO lokal
            </h2>
            <span className="text-[11.5px] font-bold uppercase tracking-[0.06em] bg-violet-100 text-primary px-3 py-1.5 rounded-full">
              Dibuka untuk UMKM &amp; bisnis lokal
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed text-[15.5px] mt-5 max-w-3xl">
            Berbekal pengalaman magang di Katalis Media, saya membuka jasa optimasi
            website untuk UMKM dan bisnis lokal: website dirapikan dari sisi teknis,
            diukur dengan analitik, dan dibuat lebih mudah ditemukan di Google Maps.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
              >
                <span className="w-12 h-12 rounded-2xl bg-violet-100 text-primary flex items-center justify-center">
                  <s.icon className="w-6 h-6" />
                </span>
                <h3 className="font-bold text-dark text-[16.5px] mt-4">{s.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed mt-1.5">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-8">
            <p className="text-slate-600 leading-relaxed text-[15px] max-w-3xl">
              Satu hal yang tidak akan kamu dengar dari saya: janji peringkat #1 di
              Google — tidak ada yang bisa menjamin itu. Yang saya janjikan adalah
              audit yang jujur, perbaikan yang terukur, dan laporan before–after yang
              bisa kamu verifikasi sendiri.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href="mailto:fikrihikam9@gmail.com?subject=Konsultasi%20Jasa%20Optimasi%20Website"
                className="text-[14.5px] font-semibold text-white bg-primary px-5 py-2.5 rounded-full hover:bg-violet-800 transition-colors"
              >
                Minta Audit Website
              </a>
              <a
                href="https://tillrea.my.id/#jasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14.5px] font-semibold text-dark bg-white border border-slate-300 px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                Lihat di TillRea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
