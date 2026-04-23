import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Tiny Living', path: '/tiny-living' },
    { name: 'Recipes', path: '/journal' },
    { name: 'Compare', path: '/compare' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden flex flex-col relative w-full">
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>

      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-20 relative">
        <Link to="/" className="text-2xl font-light tracking-[0.4em] uppercase hover:text-cyan-400 transition-colors">
          Zen<span className="font-bold">Cook</span>
        </Link>
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
        {/* Mobile Nav Toggle could go here */}
        <button className="md:hidden text-white/70 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </header>

      <main className="flex-1 flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>

      <footer className="w-full py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] opacity-30 uppercase tracking-[0.2em] relative z-20 mt-auto">
        <div id="contact">
          &copy; {new Date().getFullYear()} ZenCook Advanced Systems. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>London</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Istanbul</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Milan</span>
        </div>
      </footer>
    </div>
  );
}
