import { Bot, Server, Workflow } from 'lucide-react';

// Fikri tidak menulis blog — bagian ini diisi hobi & eksperimennya (disetujui
// Fikri 2026-10-08): mengulik agen AI dan automasi, persis seperti yang
// dibangun bersama di TillRea. Semua kartu berbasis kegiatan nyata.
const posts = [
  {
    icon: Bot,
    category: 'Agen AI',
    title: 'Mengulik Agen AI & Automasi',
    excerpt:
      'Hobi utama saya: bereksperimen dengan agen AI — menghubungkan asisten pribadi ke router model, gateway chat, dan bot Telegram agar bisa bekerja mandiri 24/7 di VPS.',
    hue: 'from-violet-600 to-purple-400',
  },
  {
    icon: Server,
    category: 'Infrastruktur',
    title: 'Satu VPS, Banyak Website',
    excerpt:
      'Eksperimen infrastruktur TillRea: satu server melayani banyak situs lewat subdomain — Nginx, Cloudflare Tunnel, dan sistem jaga otomatis yang menghidupkan layanan sendiri saat mati.',
    hue: 'from-slate-700 to-slate-400',
  },
  {
    icon: Workflow,
    category: 'Otomasi',
    title: 'Deployment Otomatis via Bot',
    excerpt:
      'Merancang alur publish tanpa sentuh server: pengunjung mengirim ZIP ke bot Telegram, n8n memprosesnya, dan situs langsung live setelah disetujui — seperti galeri tamu di TillRea.',
    hue: 'from-indigo-600 to-violet-400',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              05 — Hobi &amp; Eksperimen
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark">
              Yang sedang saya ulik
            </h2>
            <p className="text-slate-600 max-w-md text-[15.5px] leading-relaxed">
              Saya tidak menulis blog — waktu luang saya habis untuk bereksperimen. Ini yang
              sedang saya oprek:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-violet-300 hover:shadow-[0_20px_36px_-20px_rgba(109,40,217,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                <span
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${post.hue} text-white flex items-center justify-center shadow-md`}
                >
                  <post.icon className="w-6 h-6" />
                </span>
                <p className="mt-5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-primary">
                  {post.category}
                </p>
                <h3 className="mt-2 font-bold text-dark text-[19px] leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed mt-2.5">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-[12px] font-bold uppercase tracking-[0.06em] text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <span className="w-[7px] h-[7px] rounded-full bg-emerald-500" />
                  Eksperimen Berjalan
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
