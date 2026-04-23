import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col px-6 md:px-12 relative min-h-[calc(100vh-140px)]">
      
      <div className="mt-12 md:mt-24 lg:mt-32 max-w-2xl z-10 relative">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('home.titlePart1')} <br/>
          <span className="font-medium italic text-cyan-400">{t('home.titleTech')}</span>,
          <br /> {t('home.titlePart2')}
        </motion.h1>
        <motion.p 
          className="mt-6 md:mt-8 text-sm md:text-base opacity-60 font-light leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t('home.subtitle')}
        </motion.p>
        
        <motion.div 
          className="mt-10 flex gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/products" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-md">
            {t('home.explore')}
          </Link>
          <Link to="/tiny-living" className="text-xs uppercase tracking-[0.2em] border-b border-transparent hover:border-cyan-400 text-cyan-400 pb-1 transition-all">
            {t('home.tinyLink')} &rarr;
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="absolute right-[-20%] md:right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[300px] md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-[#111111]/80 backdrop-blur-2xl rounded-tl-[150px] rounded-bl-3xl shadow-[0_0_100px_rgba(34,211,238,0.05)] border border-white/5 relative overflow-hidden flex items-center justify-center">
          
          {/* Simulate the counter surface light beam */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 perspective-[1000px] rotate-x-60 -rotate-z-12 transform-style-preserve-3d shadow-2xl">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.1)]"></div>
              
              {/* Inner animated heating rings */}
              <motion.div 
                className="absolute inset-[10%] rounded-full border border-cyan-400/40"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                  boxShadow: [
                    "0 0 20px rgba(34,211,238,0)",
                    "0 0 60px rgba(34,211,238,0.2)",
                    "0 0 20px rgba(34,211,238,0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div 
                className="absolute inset-[25%] rounded-full border border-cyan-300/50"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                  boxShadow: [
                    "0 0 30px rgba(34,211,238,0.1)",
                    "0 0 80px rgba(34,211,238,0.3)",
                    "0 0 30px rgba(34,211,238,0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Core glow */}
              <div className="absolute inset-[40%] rounded-full bg-cyan-400/10 blur-[10px]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
                 <motion.div 
                   className="w-[1px] h-32 md:h-48 bg-gradient-to-t from-transparent via-cyan-400/80 to-transparent blur-[1px]"
                   animate={{ height: ["100px", "150px", "100px"], opacity: [0.4, 0.8, 0.4] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 />
              </div>
          </div>
          
          <div className="absolute bottom-12 right-12 text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t('home.sensorInfo')}
          </div>
        </div>
      </motion.div>

      {/* Value props floating at the bottom */}
      <motion.div 
        className="mt-auto mb-4 pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 z-10 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="/tiny-living" className="group bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex flex-col h-full transform hover:-translate-y-1">
          <div className="text-cyan-400 text-[10px] uppercase font-bold tracking-widest mb-3">{t('home.card1Tag')}</div>
          <h3 className="text-lg font-light mb-2 group-hover:text-cyan-200 transition-colors">{t('home.card1Title')}</h3>
          <p className="text-xs opacity-50 mb-6 flex-1">{t('home.card1Desc')}</p>
          <span className="text-[10px] border-b border-white/30 pb-1 self-start group-hover:border-cyan-400 transition-colors uppercase tracking-[0.1em]">{t('home.card1Link')}</span>
        </Link>

        <Link to="/journal" className="group bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex flex-col h-full transform hover:-translate-y-1">
          <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-3">{t('home.card2Tag')}</div>
          <h3 className="text-lg font-light mb-2 group-hover:text-cyan-200 transition-colors">{t('home.card2Title')}</h3>
          <p className="text-xs opacity-50 mb-6 flex-1">{t('home.card2Desc')}</p>
          <span className="text-[10px] border-b border-white/30 pb-1 self-start group-hover:border-cyan-400 transition-colors uppercase tracking-[0.1em]">{t('home.card2Link')}</span>
        </Link>

        <Link to="/compare" className="group bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex flex-col h-full transform hover:-translate-y-1">
          <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-3">{t('home.card3Tag')}</div>
          <h3 className="text-lg font-light mb-2 group-hover:text-cyan-200 transition-colors">{t('home.card3Title')}</h3>
          <p className="text-xs opacity-50 mb-6 flex-1">{t('home.card3Desc')}</p>
          <span className="text-[10px] border-b border-white/30 pb-1 self-start group-hover:border-cyan-400 transition-colors uppercase tracking-[0.1em]">{t('home.card3Link')}</span>
        </Link>
      </motion.div>
    </div>
  );
}
