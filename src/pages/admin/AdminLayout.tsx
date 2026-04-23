import { useState, useEffect } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { LayoutDashboard, FileText, File, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">Loading...</div>;
  }

  if (!user || user.email !== 'asbajans@gmail.com') {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Posts', path: '/admin/posts', icon: <FileText className="w-4 h-4" /> },
    { name: 'Pages', path: '/admin/pages', icon: <File className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="text-xl font-light tracking-[0.2em] uppercase">Zen<span className="font-bold">Cook</span> CMS</div>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname.startsWith(item.path) ? 'bg-cyan-900/30 text-cyan-400' : 'hover:bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-sm tracking-wide">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => signOut(auth)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900/20 text-red-400 w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#050505]">
        <header className="px-8 py-6 border-b border-white/10 flex justify-between items-center bg-[#0A0A0A]">
          <h1 className="text-xl font-light">Admin Panel</h1>
          <div className="text-sm text-gray-500">{user.email}</div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
