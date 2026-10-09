const entries = [
  {
    period: 'Mahasiswa Aktif',
    badge: 'Sedang Berjalan',
    title: 'UNISNU Jepara',
    sub: 'Universitas Islam Nahdlatul Ulama Jepara',
    desc: 'S1 Sistem Informasi (semester 5) — menempuh studi sambil membangun dan mengelola infrastruktur web TillRea.',
    active: true,
  },
  {
    period: 'Lulus 2024',
    badge: 'Sekolah Menengah',
    title: 'SMK Negeri 2 Jepara',
    sub: 'Jurusan Kriya Kayu dan Rotan',
    desc: 'Menyelesaikan pendidikan menengah kejuruan pada tahun 2024 sebelum melanjutkan ke jenjang sarjana.',
    active: false,
  },
];

export default function Pendidikan() {
  return (
    <section id="pendidikan" className="py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              03 — Pendidikan
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
            Riwayat pendidikan
          </h2>

          <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            <ol className="relative border-l-2 border-slate-200 ml-2">
              {entries.map((e) => (
                <li key={e.title} className="relative pl-9 pb-12 last:pb-0">
                  <span
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-[3px] border-white shadow ${
                      e.active ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  />
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-[11.5px] font-bold uppercase tracking-[0.06em] px-3 py-1 rounded-full ${
                        e.active
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {e.badge}
                    </span>
                    <span className="text-[13px] font-semibold text-slate-400">{e.period}</span>
                  </div>
                  <h3 className="mt-3 text-[22px] font-bold tracking-tight text-dark">{e.title}</h3>
                  <p className="font-semibold text-primary text-[15px]">{e.sub}</p>
                  <p className="text-slate-600 leading-relaxed text-[15.5px] mt-2 max-w-xl">
                    {e.desc}
                  </p>
                </li>
              ))}
            </ol>

            <aside className="bg-violet-50/70 border border-violet-100 rounded-3xl p-7">
              <h3 className="font-bold text-dark text-[16.5px]">Bootcamp &amp; Komunitas</h3>
              <p className="text-slate-600 text-[14.5px] leading-relaxed mt-2">
                Di luar jalur formal, saya belajar secara otodidak lewat eksperimen langsung —
                membangun dan merawat server sendiri, bot WhatsApp &amp; Telegram, sampai analitik
                web (GA4 &amp; Search Console) yang terpasang di situs-situs saya.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Agen AI', 'Otomasi', 'Analitik Web'].map((c) => (
                  <span
                    key={c}
                    className="text-[12px] font-bold uppercase tracking-[0.06em] text-primary bg-white border border-violet-200 px-3 py-1.5 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
