import { Mail, Send, Github, Instagram, Linkedin } from 'lucide-react';

// Ikon sosial bergaya referensi: lingkaran 36px berbingkai, hover terisi primary.
// Semua tautan aktif (data dari Fikri, 2026-10-08): LinkedIn fikri-hikam-1a69ba40a,
// GitHub & Instagram @TillRea.
export default function SocialIcons({
  variant = 'primary',
}: {
  variant?: 'primary' | 'slate' | 'footer';
}) {
  const base =
    'w-10 h-10 mr-2.5 rounded-full flex justify-center items-center transition duration-300';
  const styles =
    variant === 'footer'
      ? 'border border-slate-600 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'
      : 'border border-slate-300 text-slate-600 bg-white hover:border-primary hover:bg-primary hover:text-white shadow-sm';
  return (
    <>
      <a
        href="mailto:fikrihikam9@gmail.com"
        className={`${base} ${styles}`}
        aria-label="Email Fikri Hikam"
        title="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
      <a
        href="https://t.me/TillReaVPS_bot"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
        aria-label="Telegram Fikri Hikam"
        title="Telegram"
      >
        <Send className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/fikri-hikam-1a69ba40a"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
        aria-label="LinkedIn Fikri Hikam"
        title="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/TillRea"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
        aria-label="GitHub TillRea"
        title="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/TillRea"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
        aria-label="Instagram TillRea"
        title="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </>
  );
}
