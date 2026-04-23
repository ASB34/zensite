import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Journal() {
  const { t, i18n } = useTranslation();
  const [dbPosts, setDbPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), where('lang', '==', i18n.language));
        const snapshot = await getDocs(q);
        const fetchedPosts: any[] = [];
        snapshot.forEach(doc => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        setDbPosts(fetchedPosts.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()));
      } catch (err) {
        console.error("Error fetching journal posts", err);
      }
    };
    fetchPosts();
  }, [i18n.language]);

  const postsList = t('journal.posts', { returnObjects: true }) as Array<{ category: string, title: string, excerpt: string, date: string }>;

  const staticPosts = [
    {
      id: "static-1",
      ...postsList[0],
      image: 'from-orange-900/20 to-red-900/10',
    },
    {
      id: "static-2",
      ...postsList[1],
      image: 'from-gray-800/40 to-[#111]',
    },
    {
      id: "static-3",
      ...postsList[2],
      image: 'from-cyan-900/20 to-blue-900/10',
    },
    {
      id: "static-4",
      ...postsList[3],
      image: 'from-amber-900/20 to-[#111]',
    }
  ];

  const posts = dbPosts.length > 0 ? dbPosts : staticPosts;

  return (
    <div className="flex-1 py-12 px-6 md:px-12 relative">
      
      <div className="absolute left-[-100px] top-[20%] w-[400px] h-[400px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="flex justify-between items-end mb-16 relative z-10">
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-extralight tracking-tight mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('journal.titlePart1')} <span className="font-medium italic text-cyan-400">{t('journal.titlePart2')}</span>
          </motion.h1>
          <motion.p 
            className="text-sm opacity-50 font-light"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('journal.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Featured Post (Video style) */}
      <motion.div 
        className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#050505] border border-white/10 mb-12 relative overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all scale-90 group-hover:scale-100 z-10">
          <Play className="w-8 h-8 text-white ml-2 opacity-80 group-hover:opacity-100" />
        </div>
        
        <div className="absolute bottom-8 left-8 right-8 z-10">
           <span className="text-cyan-400 text-[10px] uppercase font-bold tracking-widest mb-2 block">{t('journal.masterclassTag')}</span>
           <h2 className="text-3xl font-light mb-2 group-hover:text-cyan-100 transition-colors">{t('journal.masterclassTitle')}</h2>
           <p className="text-sm opacity-60 font-light max-w-lg">{t('journal.masterclassDesc')}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {posts.map((post, i) => (
          <motion.article 
            key={post.id}
            className="group flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
          >
            <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${post.image} border border-white/5 mb-4 relative overflow-hidden`}>
               {/* Abstract placeholder elements for images */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-500"></div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest">{post.category}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span className="text-[10px] text-gray-500 tracking-wider">{post.date}</span>
            </div>
            <h3 className="text-lg font-light mb-2 group-hover:text-cyan-200 transition-colors">{post.title}</h3>
            <p className="text-xs opacity-50 font-light leading-relaxed">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
