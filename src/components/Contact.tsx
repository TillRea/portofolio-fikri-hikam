import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import SocialIcons from './SocialIcons';

import { usePrefs } from '../prefs';

export default function Contact() {
  const { t } = usePrefs();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${name || 'Pengunjung TillRea'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:fikrihikam9@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputCls =
    'w-full bg-white border border-slate-300 text-dark px-4 py-3 rounded-xl text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-violet-100 transition';

  return (
    <section id="contact" className="py-24 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-primary">
              {t('sec_kon_e')}
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
            <div>
              <h2 className="text-3xl sm:text-[40px] leading-[1.15] font-extrabold tracking-tight text-dark">
                {t('sec_kon_h')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-[16.5px] mt-5 max-w-lg">
{t('sec_kon_p')}
              </p>

              <ul className="mt-9 space-y-5">
                <li className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-violet-100 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">Email</p>
                    <a href="mailto:fikrihikam9@gmail.com" className="font-semibold text-dark hover:text-primary">
                      fikrihikam9@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-violet-100 text-primary flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">Telegram</p>
                    <a href="https://t.me/TillReaVPS_bot" target="_blank" rel="noopener noreferrer" className="font-semibold text-dark hover:text-primary">
                      @TillReaVPS_bot
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-violet-100 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">{t('domisili')}</p>
                    <p className="font-semibold text-dark">{t('domisili_v')}</p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center mt-10">
                <SocialIcons variant="primary" />
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.05)] h-fit"
            >
              <div className="mb-5">
                <label htmlFor="name" className="block text-[13.5px] font-bold text-dark mb-2">{t('f_nama')}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('f_nama_ph')}
                  className={inputCls}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-[13.5px] font-bold text-dark mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@anda.com"
                  className={inputCls}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[13.5px] font-bold text-dark mb-2">{t('f_pesan')}</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('f_pesan_ph')}
                  className={`${inputCls} h-32 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold text-[15px] py-3.5 rounded-full shadow-[0_12px_24px_-10px_rgba(109,40,217,0.6)] hover:bg-violet-800 transition-colors"
              >
                {t('f_kirim')}
              </button>
              <p className="mt-3.5 text-center text-[13px] text-slate-400">
                {t('f_note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
