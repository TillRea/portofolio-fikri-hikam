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

          <div className="grid lg:grid-cols-2 gap-6 mt-6 items-start">
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                Pengalaman Kerja
              </p>
              <div className="mt-4">
                <h3 className="font-bold text-dark text-[16.5px]">Crew — Stand Kentang Keriting</h3>
                <p className="text-slate-500 text-[13.5px] font-medium mt-0.5">
                  Jan – Feb 2026 · ±1 bulan · Jepara
                </p>
                <ul className="mt-2.5 space-y-2">
                  {[
                    'Mengoperasikan stand hampir sendirian: membentuk, membalur tepung, dan menggoreng kentang',
                    'Membuat minuman dan melayani pembeli secara langsung',
                    'Berjualan di samping lokasi Saestu Coffee dan pada event UMKM di Alun-Alun Jepara',
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[14.5px] text-slate-700 leading-relaxed">
                      <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-dark text-[16.5px]">
                  Crew — Ikan Bakar Mbak Novi Live Seafood
                </h3>
                <p className="text-slate-500 text-[13.5px] font-medium mt-0.5">
                  2025 · ±2,5 bulan · Pantai Clumik, Jepara
                </p>
                <ul className="mt-2.5 space-y-2">
                  {[
                    'Kasir sekaligus mencatat pemasukan harian',
                    'Membuat minuman sachet dan mengantar makanan & minuman ke pelanggan',
                    'Membantu dapur — mengupas, memotong, membungkus, menggoreng — serta cleaning area',
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[14.5px] text-slate-700 leading-relaxed">
                      <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                Freelance &amp; Organisasi
              </p>
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="font-bold text-dark text-[16.5px]">Website Reny HikZar Collection</h3>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed mt-1.5">
                    Situs bisnis untuk penjahit di Sinanggul, Mlonggo, Jepara — saya rancang, bangun,
                    dan rawat, termasuk analitik kunjungannya. Pesanan pelanggan masuk lewat WhatsApp
                    dari situs ini (renyhikzar.tillrea.my.id).
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <h3 className="font-bold text-dark text-[16.5px]">Hosting Website TillRea</h3>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed mt-1.5">
                    Layanan hosting situs statis di server saya sendiri. Tamu mengajukan situs lewat
                    bot Telegram; setelah persetujuan, situsnya langsung live sebagai subdomain —
                    salah satunya cpi.tillrea.my.id.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <h3 className="font-bold text-dark text-[16.5px]">Bot &amp; Sistem Otomasi</h3>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed mt-1.5">
                    Merancang dan mengoperasikan bot WhatsApp penagih urunan kuota serta sistem
                    deployment otomatis yang berjalan terus di infrastruktur TillRea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
