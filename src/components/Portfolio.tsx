import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  url?: string;
  description: string;
  label?: string;
  hue: string;
  initials: string;
};

// Snapshot dari /api/pameran (dikelola via /admin) — dipakai untuk prerender
// dan sebagai cadangan. Saat halaman dimuat di domain utama, daftar ini
// disegarkan dari API sehingga proyek baru langsung tampil di sini.
const initialProjects: Project[] = [
  {
    title: 'Situs Demo TillRea',
    url: 'https://demo.tillrea.my.id',
    description:
      'Situs demo pertama TillRea — halaman uji yang membuktikan satu VPS bisa melayani banyak situs sekaligus lewat subdomain.',
    label: 'PAMERAN • Situs Demo',
    hue: 'from-violet-600 via-purple-500 to-fuchsia-400',
    initials: 'DT',
  },
  {
    title: 'Reny HikZar Collection',
    url: 'https://renyhikzar.tillrea.my.id',
    description:
      'Website toko penjahit Reny HikZar Collection di Sinanggul, Mlonggo, Jepara — jahit pria, wanita, seragam, vermak, dan custom order.',
    label: 'PAMERAN • Koleksi Pribadi',
    hue: 'from-emerald-600 via-teal-500 to-emerald-400',
    initials: 'RH',
  },
  {
    title: 'Portofolio Fikri Hikam A.',
    url: 'https://portofolio.tillrea.my.id',
    description:
      'Website portofolio pribadi Fikri Hikam A. — situs khusus portofolio berisi profil, daftar proyek, pendidikan, pengalaman, eksperimen, dan kontak.',
    label: 'PAMERAN • Koleksi Pribadi',
    hue: 'from-fuchsia-600 via-pink-500 to-rose-400',
    initials: 'FH',
  },
  {
    title: 'Cpi',
    url: 'https://cpi.tillrea.my.id',
    description:
      'Website tamu Museum TillRea, diajukan via bot Telegram dan dideploy setelah persetujuan admin.',
    label: 'PAMERAN • Tamu',
    hue: 'from-amber-500 via-orange-500 to-amber-400',
    initials: 'CP',
  },
];

const hues = [
  'from-violet-600 via-purple-500 to-fuchsia-400',
  'from-emerald-600 via-teal-500 to-emerald-400',
  'from-fuchsia-600 via-pink-500 to-rose-400',
  'from-amber-500 via-orange-500 to-amber-400',
  'from-indigo-600 via-violet-500 to-purple-400',
  'from-slate-700 via-slate-600 to-slate-400',
];

function initialsOf(title: string) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('');
}

function domainOf(url?: string) {
  if (!url) return '';
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  }
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    let live = true;
    fetch('/api/pameran', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        if (!live || !Array.isArray(d.items) || !d.items.length) return;
        const pribadi = d.items.filter((it: any) => it.section !== 'tamu');
        const tamu = d.items.filter((it: any) => it.section === 'tamu');
        setProjects(
          [...pribadi, ...tamu].map((it: any, i: number) => ({
            title: it.title,
            url: it.url,
            description: it.description || '',
            label: it.label,
            hue: hues[i % hues.length],
            initials: initialsOf(it.title || '?'),
          })),
        );
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              02 — Portfolio
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
              Proyek yang sudah live
            </h2>
            <p className="text-slate-600 max-w-md text-[15.5px] leading-relaxed">
              Setiap proyek berjalan di subdomainnya sendiri dan bisa dikunjungi langsung —
              daftar ini terhubung ke Ruang Pameran TillRea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:shadow-[0_28px_48px_-24px_rgba(76,29,149,0.35)] hover:-translate-y-1 hover:border-violet-300 transition-all duration-300"
              >
                <div
                  className={`relative w-full aspect-[16/8] bg-gradient-to-br ${p.hue} flex items-center justify-center`}
                  role="img"
                  aria-label={`Pratinjau ${p.title}`}
                >
                  <span className="text-6xl font-extrabold tracking-tight text-white/95">
                    {p.initials}
                  </span>
                  {p.label && (
                    <span className="absolute top-4 left-4 text-[10.5px] font-bold uppercase tracking-[0.08em] bg-white/20 text-white backdrop-blur px-3 py-1.5 rounded-full">
                      {p.label}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold bg-white text-emerald-600 px-3 py-1.5 rounded-full">
                    <span className="w-[7px] h-[7px] rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-bold text-dark text-xl tracking-tight">{p.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mt-2 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
                    <span className="text-[13.5px] font-medium text-slate-400">
                      {domainOf(p.url)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-primary">
                      Kunjungi Situs
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`Kunjungi ${p.title}`}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
