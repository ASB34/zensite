import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
    { code: 'ar', label: 'العربية' }
  ];

  const cities: string[] = t('footer.cities', { returnObjects: true }) as string[];

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden flex flex-col relative w-full ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>

      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-20 relative">
        <Link to="/" className="text-2xl font-light tracking-[0.4em] uppercase hover:text-cyan-400 transition-colors">
          Zen<span className="font-bold">Cook</span>
        </Link>
        <div className="flex items-center gap-8 lg:gap-12">
          <nav className="hidden md:flex gap-8 lg:gap-12 text-[10px] uppercase tracking-[0.2em] opacity-70">
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
          
          {/* Language Switcher */}
          <div className="flex gap-3 text-[10px] uppercase tracking-widest opacity-80">
            {langs.map(lang => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`hover:text-cyan-400 transition-colors ${i18n.language === lang.code ? 'text-cyan-400 font-bold' : ''}`}
                dir="ltr"
              >
                {lang.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Nav Toggle could go here */}
          <button className="md:hidden text-white/70 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>

      <footer className="w-full py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] opacity-30 uppercase tracking-[0.2em] relative z-20 mt-auto">
        <div id="contact">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </div>
        <div className="flex items-center gap-4">
           {cities && cities.map((city: string, index: number) => (
             <div key={city} className="flex items-center gap-4">
                <span>{city}</span>
                {index < cities.length - 1 && <span className="w-1 h-1 bg-white rounded-full"></span>}
             </div>
           ))}
        </div>
      </footer>
    </div>
  );
}
