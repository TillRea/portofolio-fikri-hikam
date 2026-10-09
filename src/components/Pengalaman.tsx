const tasks = [
  'Optimalisasi website klien agar lebih cepat dan mudah ditemukan',
  'Pemasangan & pembacaan Google Analytics 4 (GA4)',
  'Pengelolaan Google Business Profile untuk bisnis lokal',
  'Pengelolaan Google Maps Business agar lokasi usaha tampil akurat',
];

export default function Pengalaman() {
  return (
    <section id="pengalaman" className="py-24 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              04 — Pengalaman
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
            Pengalaman &amp; magang
          </h2>

          <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white flex items-center justify-center text-[22px] font-extrabold shadow-[0_12px_20px_-10px_rgba(109,40,217,0.6)]">
                  K
                </span>
                <div>
                  <h3 className="text-[21px] font-bold tracking-tight text-dark">Katalis Media</h3>
                  <p className="text-slate-500 font-medium text-[14.5px]">Agensi Digital — Magang</p>
                </div>
              </div>
              <span className="text-[11.5px] font-bold uppercase tracking-[0.06em] bg-violet-100 text-primary px-3 py-1.5 rounded-full">
                Magang
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[15.5px] mt-5 max-w-3xl">
              Magang di agensi Katalis Media dengan fokus pada visibilitas digital bisnis:
              mengoptimalkan website, memasang analitik, dan merapikan kehadiran bisnis di
              ekosistem Google.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-6">
              {tasks.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-slate-700 leading-relaxed">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-6 items-start">
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                Pengalaman Kerja
              </p>
              <div className="mt-4">
                <h3 className="font-bold text-dark text-[16.5px]">Crew — Stand Kentang Keriting</h3>
                <p className="text-slate-500 text-[13.5px] font-medium mt-0.5">
                  Jan – Feb 2026 · Jepara
                </p>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-dark text-[16.5px]">
                  Crew — Ikan Bakar Mbak Novi Live Seafood
                </h3>
                <p className="text-slate-500 text-[13.5px] font-medium mt-0.5">2025 · Jepara</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-3xl p-7 text-center bg-white/50">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
                Freelance &amp; Organisasi
              </p>
              <p className="font-bold text-dark text-[16.5px] mt-2">Segera ditambahkan</p>
              <p className="text-slate-500 text-[14px] mt-1">
                Bagian ini akan diisi ketika ada riwayat baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
