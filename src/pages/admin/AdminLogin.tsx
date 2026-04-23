import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Ensure it's the correct user. If not, sign out.
      if (auth.currentUser?.email !== 'asbajans@gmail.com') {
         await auth.signOut();
         setError('Unauthorized user.');
         return;
      }
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center relative p-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl z-10 shadow-2xl">
         <div className="text-center mb-8">
            <div className="text-3xl font-light tracking-[0.2em] uppercase mb-2">Zen<span className="font-bold">Cook</span></div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Admin Portal</div>
         </div>

         {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
               {error}
            </div>
         )}
         <div className="mb-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg text-yellow-200 text-xs text-center leading-relaxed">
            Firebase Authentication'da "Email/Password" sağlayıcısının etkin olduğundan ve <b>asbajans@gmail.com</b> kullanıcısının (şifre: <b>asb1212@</b>) manuel olarak oluşturulduğundan emin olun.
         </div>

         <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
               <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                 required
               />
            </div>
            <div className="flex flex-col gap-2">
               <label className="text-xs uppercase tracking-widest text-gray-400">Password</label>
               <input 
                 type="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                 required
               />
            </div>
            <button 
              type="submit"
              className="mt-4 w-full py-4 bg-cyan-400 text-black uppercase font-bold tracking-[0.2em] text-xs rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
               Login to System
            </button>
         </form>
      </div>
    </div>
  );
}
