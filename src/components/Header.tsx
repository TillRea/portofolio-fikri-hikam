import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Eksperimen', href: '#blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/85 backdrop-blur-md shadow-[inset_0_-1px_0_0_rgba(15,23,42,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px] max-w-6xl mx-auto">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Kembali ke atas">
            <span className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-indigo-600 text-white flex items-center justify-center font-extrabold text-[17px] shadow-[0_8px_16px_-8px_rgba(109,40,217,0.7)]">
              F
            </span>
            <span className="font-bold text-[17px] tracking-tight text-dark">
              fikrihikam<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[14.5px] font-semibold text-white bg-dark px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
            >
              Hubungi Saya
            </a>
          </nav>

          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-dark"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-5">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[15px] font-medium text-dark hover:bg-violet-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 mt-1 rounded-xl text-[15px] font-semibold text-white bg-primary text-center"
              >
                Hubungi Saya
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
