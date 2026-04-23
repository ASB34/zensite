import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.tinyLiving'), path: '/tiny-living' },
    { name: t('nav.recipes'), path: '/journal' },
    { name: t('nav.compare'), path: '/compare' },
    { name: t('nav.contact'), path: '#contact' },
  ];

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'ar', label: 'عرب' }
  ];

  const cities: string[] = t('footer.cities', { returnObjects: true }) as string[];

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden flex flex-col relative w-full ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Background Glow Effects */}
      <div className="fixed left-0 top-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      <div className="fixed right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>

      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-50 relative">
        <Link to="/" className="text-2xl font-light tracking-[0.4em] uppercase hover:text-cyan-400 transition-colors">
          Zen<span className="font-bold">Cook</span>
        </Link>
        <div className="flex items-center gap-6 lg:gap-12">
          <nav className="hidden md:flex gap-8 lg:gap-12 text-[10px] uppercase tracking-[0.2em] opacity-80">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:opacity-100 hover:text-cyan-300 transition-all ${
                  location.pathname === item.path ? 'opacity-100 text-cyan-400 font-bold border-b border-cyan-400/50 pb-1' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Compact Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest opacity-80 hover:text-cyan-400 hover:opacity-100 transition-colors"
            >
              {langs.find(l => l.code === i18n.language)?.label || 'EN'}
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-4 bg-[#111] border border-white/10 rounded-lg py-2 flex flex-col min-w-[80px] shadow-2xl z-50 backdrop-blur-xl">
                {langs.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setIsLangMenuOpen(false); }}
                    className={`text-[10px] uppercase tracking-widest text-left px-5 py-3 hover:bg-white/5 transition-colors ${i18n.language === lang.code ? 'text-cyan-400 font-bold' : 'text-white/70'}`}
                    dir="ltr"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#0A0A0A]/95 backdrop-blur-md z-40 flex flex-col px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-6 text-sm uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 border-b border-white/5 hover:text-cyan-400 transition-colors ${
                  location.pathname === item.path ? 'text-cyan-400 font-bold' : 'text-white/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>

      <footer className="w-full py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] opacity-40 uppercase tracking-[0.2em] relative z-20 mt-12 bg-black/50 border-t border-white/5">
        <div id="contact" className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
           {cities && cities.map((city: string, index: number) => (
             <div key={city} className="flex items-center gap-2 sm:gap-4">
                <span className="whitespace-nowrap">{city}</span>
                {index < cities.length - 1 && <span className="w-1 h-1 bg-white rounded-full"></span>}
             </div>
           ))}
        </div>
      </footer>
    </div>
  );
}
