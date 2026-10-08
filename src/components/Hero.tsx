import SocialIcons from './SocialIcons';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[136px] pb-20 lg:pt-[168px] lg:pb-28">
      {/* Latar: glow ungu lembut + grid samar ala situs modern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(640px 320px at 12% -40px, rgba(109,40,217,0.13), transparent 65%), radial-gradient(720px 360px at 88% -60px, rgba(79,70,229,0.11), transparent 65%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(760px 460px at 50% 0%, black 25%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(760px 460px at 50% 0%, black 25%, transparent 78%)',
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pl-2 pr-4 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
                <span className="w-[7px] h-[7px] rounded-full bg-primary" />
              </span>
              Mahasiswa Sistem Informasi — UNISNU Jepara
            </span>

            <h1 className="mt-7 text-[42px] leading-[1.05] sm:text-6xl lg:text-[64px] font-extrabold tracking-[-0.03em] text-dark">
              Halo, saya
              <span className="block">Fikri Hikam A.</span>
              <span className="block mt-2 text-[26px] sm:text-4xl lg:text-[40px] font-extrabold tracking-[-0.02em] bg-gradient-to-r from-primary via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                Full-Stack Web &amp; Data Analytics
              </span>
            </h1>

            <p className="mt-6 text-[16.5px] lg:text-lg leading-relaxed text-slate-600 max-w-xl">
              Saya merancang dan membangun antarmuka web modern yang cepat dan rapi,
              mengintegrasikan arsitektur sistem, dan mengolah data menjadi eksplorasi
              interaktif — semua karya saya live dan terawat di TillRea.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-[0_12px_24px_-10px_rgba(109,40,217,0.6)] hover:bg-violet-800 hover:-translate-y-px transition-all"
              >
                Lihat Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-dark font-semibold text-[15px] px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 transition-colors"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="mt-10 flex items-center">
              <SocialIcons variant="primary" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-violet-200 via-indigo-100 to-fuchsia-100 rotate-3"
            />
            <img
              src="/foto-fikri.jpg"
              alt="Foto Fikri Hikam A."
              className="relative w-full aspect-[4/5] object-cover object-top rounded-[28px] border border-white shadow-[0_32px_56px_-24px_rgba(76,29,149,0.4)]"
            />
            <div className="absolute top-5 -left-3 sm:-left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[13px] font-semibold text-dark leading-none">
                Terbuka untuk kolaborasi
              </span>
            </div>
            <div className="absolute bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
              <span className="text-[13px] font-semibold text-dark leading-none">
                📍 Jepara, Jawa Tengah
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
