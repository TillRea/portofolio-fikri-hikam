import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pendidikan from './components/Pendidikan';
import Pengalaman from './components/Pengalaman';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-dark antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Pendidikan />
        <Pengalaman />
        <Blog />
        <Contact />
      </main>
      <Footer />

      {/* Back to top — muncul setelah halaman discroll, sama seperti referensi. */}
      <a
        href="#home"
        id="to-top"
        aria-label="Kembali ke atas"
        className={`${
          showTop ? 'flex' : 'hidden'
        } justify-center items-center fixed z-[9999] bottom-5 right-5 h-12 w-12 bg-dark text-white rounded-full shadow-xl hover:bg-primary transition-colors`}
      >
        <span className="block h-4 w-4 rotate-45 border-t-2 border-l-2 border-white mt-1.5" />
      </a>
    </div>
  );
}
