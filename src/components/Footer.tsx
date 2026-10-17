import SocialIcons from './SocialIcons';

const tautan = [
  { k: 'f_home', href: '#home' },
  { k: 'f_tentang', href: '#about' },
  { k: 'nav_portfolio', href: '#portfolio' },
  { k: 'nav_pendidikan', href: '#pendidikan' },
  { k: 'nav_pengalaman', href: '#pengalaman' },
  { k: 'nav_eksperimen', href: '#blog' },
  { k: 'kon_kontak', href: '#contact' },
];

const kategori = ['Agen AI', 'Infrastruktur', 'Otomasi'];

import { usePrefs } from '../prefs';

export default function Footer() {
  const { t: tr } = usePrefs();
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
{tr('footer_desc')}
            </p>
            <p className="mt-4 text-[14.5px]">
              <a href="https://tillrea.my.id/berkas" className="hover:text-white">{tr('f_berkas')}</a>
              {' • '}
              <a href="https://tillrea.my.id/admin" className="hover:text-white">{tr('f_admin')}</a>
              {' • '}
              <a href="https://tillrea.my.id/" className="hover:text-white">{tr('f_lobi')}</a>
            </p>
            <div className="flex items-center mt-6">
              <SocialIcons variant="footer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-[15px] mb-5">{tr('f_jelajahi')}</h3>
            <ul className="space-y-3">
              {tautan.map((x) => (
                <li key={x.k}>
                  <a href={x.href} className="text-[14.5px] hover:text-white transition-colors">
                    {tr(x.k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-[15px] mb-5">{tr('f_topik')}</h3>
            <ul className="space-y-3">
              {kategori.map((k) => (
                <li key={k}>
                  <a href="#blog" className="text-[14.5px] hover:text-white transition-colors">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-white text-[15px] mt-9 mb-4">{tr('hubungi')}</h3>
            <p className="text-[14.5px]">fikrihikam9@gmail.com</p>
            <p className="text-[14.5px] mt-1">{tr('f_lokasi')}</p>
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
