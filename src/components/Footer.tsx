import SocialIcons from './SocialIcons';

const tautan = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Eksperimen', href: '#blog' },
  { label: 'Kontak', href: '#contact' },
];

const kategori = ['Agen AI', 'Infrastruktur', 'Otomasi'];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0b0b10] text-slate-400">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-indigo-600 text-white flex items-center justify-center font-extrabold text-[17px]">
                F
              </span>
              <span className="font-bold text-[17px] tracking-tight text-white">
                fikrihikam<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-5 text-[14.5px] leading-relaxed max-w-sm">
              Portofolio Fikri Hikam A. — Full-Stack Web &amp; Data Analytics. Bagian dari
              museum digital TillRea di tillrea.my.id.
            </p>
            <p className="mt-4 text-[14.5px]">
              <a href="https://tillrea.my.id/berkas" className="hover:text-white">Berkas</a>
              {' • '}
              <a href="https://tillrea.my.id/admin" className="hover:text-white">Admin Pameran</a>
              {' • '}
              <a href="https://tillrea.my.id/" className="hover:text-white">Lobi TillRea</a>
            </p>
            <div className="flex items-center mt-6">
              <SocialIcons variant="footer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-[15px] mb-5">Jelajahi</h3>
            <ul className="space-y-3">
              {tautan.map((t) => (
                <li key={t.label}>
                  <a href={t.href} className="text-[14.5px] hover:text-white transition-colors">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-[15px] mb-5">Topik Eksperimen</h3>
            <ul className="space-y-3">
              {kategori.map((k) => (
                <li key={k}>
                  <a href="#blog" className="text-[14.5px] hover:text-white transition-colors">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-white text-[15px] mt-9 mb-4">Hubungi Saya</h3>
            <p className="text-[14.5px]">fikrihikam9@gmail.com</p>
            <p className="text-[14.5px] mt-1">Jepara, Jawa Tengah</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 py-6 flex flex-wrap justify-between gap-3 text-[13px] text-slate-500">
          <span>© {new Date().getFullYear()} Fikri Hikam A. — TillRea.</span>
          <span>portofolio.tillrea.my.id</span>
        </div>
      </div>
    </footer>
  );
}
