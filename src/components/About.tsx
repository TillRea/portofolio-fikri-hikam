import SocialIcons from './SocialIcons';

const skills = [
  {
    title: 'Frontend',
    desc: 'React, Next.js, TypeScript, Tailwind CSS — antarmuka modern, responsif, dan cepat.',
  },
  {
    title: 'Backend & Sistem',
    desc: 'REST API, integrasi arsitektur sistem, Nginx & Linux VPS untuk deployment live.',
  },
  {
    title: 'Data',
    desc: 'Data Analytics dan visualisasi data interaktif untuk keputusan berbasis data.',
  },
  {
    title: 'Desain',
    desc: 'UI/UX Engineering — tampilan rapi dan konsisten di semua ukuran layar.',
  },
];

const facts = [
  { k: 'Kampus', v: 'UNISNU Jepara' },
  { k: 'Program Studi', v: 'Sistem Informasi' },
  { k: 'Domisili', v: 'Jepara, Jawa Tengah' },
  { k: 'Fokus', v: 'Web Full-Stack & Data' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              01 — Tentang Saya
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark max-w-2xl">
            Membangun web yang cepat, rapi, dan benar-benar dipakai orang
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
            <div>
              <p className="text-slate-600 leading-relaxed text-[16.5px]">
                Saya mahasiswa <strong className="text-dark">Sistem Informasi</strong> yang
                berfokus pada pengembangan web full-stack. Saya merancang dan membangun
                antarmuka modern yang responsif, mengintegrasikan arsitektur sistem, dan
                mengolah data menjadi eksplorasi yang interaktif.
              </p>
              <p className="text-slate-600 leading-relaxed text-[16.5px] mt-5">
                Semua karya saya terhubung ke deployment live di{' '}
                <strong className="text-dark">TillRea</strong> — galeri web pribadi tempat satu
                server melayani banyak situs lewat subdomain: dari website usaha lokal, situs
                demo, hingga pameran tamu yang dideploy otomatis lewat bot.
              </p>
              <p className="text-slate-600 leading-relaxed text-[16.5px] mt-5">
                Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau peluang
                profesional baru.
              </p>
              <div className="flex items-center mt-8">
                <SocialIcons variant="primary" />
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-10 max-w-md">
                {facts.map((f) => (
                  <div key={f.k}>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
                      {f.k}
                    </dt>
                    <dd className="mt-1 font-semibold text-dark text-[15px]">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-4">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-violet-300 hover:shadow-[0_16px_32px_-20px_rgba(109,40,217,0.35)] transition-all"
                >
                  <h3 className="font-bold text-dark text-[16px] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed mt-1.5">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
