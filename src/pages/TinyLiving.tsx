import { motion } from 'motion/react';
import { Layers, Droplets, Zap, Ruler } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TinyLiving() {
  const { t } = useTranslation();
  const specList = t('tinyLiving.specs', { returnObjects: true }) as Array<{ label: string, value: string }>;

  const specs = [
    { icon: <Layers className="w-4 h-4 text-cyan-400" />, ...specList[0] },
    { icon: <Droplets className="w-4 h-4 text-cyan-400" />, ...specList[1] },
    { icon: <Zap className="w-4 h-4 text-cyan-400" />, ...specList[2] },
    { icon: <Ruler className="w-4 h-4 text-cyan-400" />, ...specList[3] },
  ];

  return (
    <div className="flex-1 flex flex-col py-12 px-6 md:px-12 relative">
      
      <div className="absolute right-[-100px] top-[100px] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">{t('tinyLiving.tag')}</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('tinyLiving.title1')}<span className="font-medium">{t('tinyLiving.title2')}</span> {t('tinyLiving.title3')}
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Visual Presentation */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group">
             {/* Schematic overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             
             {/* Module structure representation */}
             <div className="relative w-3/4 h-1/3 bg-white/5 border border-white/20 rounded-xl flex preserve-3d shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Hob area */}
                <div className="w-1/2 h-full border-r border-white/10 relative flex items-center justify-center overflow-hidden">
                   <div className="absolute top-4 left-4 text-[8px] text-cyan-400 uppercase tracking-widest opacity-60">{t('tinyLiving.diagramTag1')}</div>
                   <div className="w-16 h-16 rounded-full border border-cyan-400/30 flex items-center justify-center">
                     <div className="w-10 h-10 rounded-full bg-cyan-400/10 animate-pulse blur-[5px]"></div>
                   </div>
                   <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center">
                     <div className="w-6 h-6 rounded-full bg-cyan-400/10 animate-pulse blur-[3px]"></div>
                   </div>
                </div>
                {/* Sink area */}
                <div className="w-1/2 h-full relative p-4 flex items-center justify-center bg-white/5">
                   <div className="absolute top-4 left-4 text-[8px] text-gray-400 uppercase tracking-widest opacity-60">{t('tinyLiving.diagramTag2')}</div>
                   <div className="w-[80%] h-[70%] rounded-lg border border-white/10 bg-[#111] shadow-inner relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white/10"></div>
                      {/* Faucet representation */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-white/20 rounded-t-sm"></div>
                   </div>
                </div>
             </div>

             <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] uppercase tracking-widest text-white/40">
               <span>{t('tinyLiving.feature1')}</span>
               <span>{t('tinyLiving.feature2')}</span>
             </div>
          </div>

          {/* Copy and Specs */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-light mb-4">{t('tinyLiving.heading')}</h3>
            <p className="text-sm opacity-60 font-light leading-relaxed mb-8">
              {t('tinyLiving.desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {specs.map((spec, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="mt-1">{spec.icon}</div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">{spec.label}</div>
                    <div className="text-sm mt-1">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="self-start px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black rounded-lg text-xs uppercase font-bold tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              {t('tinyLiving.btn')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
