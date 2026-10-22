const tasks = [
  'Optimalisasi website klien agar lebih cepat dan mudah ditemukan',
  'Pemasangan & pembacaan Google Analytics 4 (GA4)',
  'Pengelolaan Google Business Profile untuk bisnis lokal',
  'Pengelolaan Google Maps Business agar lokasi usaha tampil akurat',
];

import { usePrefs } from '../prefs';

export default function Pengalaman() {
  const { t } = usePrefs();
  return (
    <section id="pengalaman" className="py-24 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              {t('sec_peng_e')}
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
            {t('sec_peng_h')}
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

            <div className="mt-8 border-t border-slate-100 pt-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                Proyek Pilihan
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <img
                  src="/proyek-furniwell.jpg"
                  alt="Contoh produk furnitur Furniwell Indonesia"
                  className="w-full sm:w-44 aspect-square object-cover rounded-2xl border border-slate-200 shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-bold text-dark text-[17px] tracking-tight">
                      Prototipe Website Ekspor — Furniwell Indonesia
                    </h4>
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                      Studi Kasus
                    </span>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed mt-2 max-w-2xl">
                    Website profil perusahaan berbahasa Inggris untuk produsen furnitur kayu
                    solid asal Jawa Tengah yang menyasar buyer internasional — berisi katalog
                    produk, kapabilitas produksi custom, galeri pabrik, dan alur permintaan
                    penawaran (RFQ). Selama magang, saya terlibat dalam penyiapan dan
                    penataan kontennya untuk audiens luar negeri.
                  </p>
                  <p className="text-slate-400 text-[13px] leading-relaxed mt-3">
                    Prototipe ini berjalan di lingkungan uji terpisah dan bukan situs resmi
                    klien — ditampilkan sebagai studi kasus, tanpa tautan.
                  </p>
                </div>
              </div>
            </div>
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
