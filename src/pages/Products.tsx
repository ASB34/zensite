import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const productsList = t('products.list', { returnObjects: true }) as Array<{ name: string, subtitle: string, desc: string }>;

  const products = [
    {
      id: 'zen-2',
      ...productsList[0],
      imageClass: 'from-[#111] to-[#0A0A0A]',
      zones: 2,
    },
    {
      id: 'zen-4',
      ...productsList[1],
      imageClass: 'from-[#1A1A1A] to-[#111]',
      zones: 4,
    },
    {
      id: 'zen-6',
      ...productsList[2],
      imageClass: 'from-[#222] to-[#111]',
      zones: 6,
    }
  ];

  return (
    <div className="flex-1 py-12 px-6 md:px-12 relative flex flex-col items-center">
      
      <div className="text-center max-w-2xl mb-16 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-extralight tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('products.titlePart1')} <span className="font-medium">{t('products.titleHighlight')}</span> {t('products.titlePart2')}
        </motion.h1>
        <motion.p 
          className="text-sm opacity-50 font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('products.subtitle')}
        </motion.p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12 lg:gap-24 relative z-10">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Product Image Representation */}
            <div className={`w-full lg:w-1/2 h-[300px] md:h-[400px] bg-gradient-to-br ${product.imageClass} rounded-2xl border border-white/5 relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Virtual Hob Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap gap-8 justify-center w-3/4 max-w-[400px] perspective-[800px] rotate-x-45 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-x-30">
                {Array.from({ length: product.zones }).map((_, i) => (
                  <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.05)] flex items-center justify-center relative">
                    <div className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full top-0"></div>
                    <div className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full bottom-0"></div>
                    <div className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full left-0"></div>
                    <div className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full right-0"></div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-6 left-6 text-[10px] text-cyan-400/50 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                {t('products.mapVis')}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="text-[10px] uppercase text-gray-400 tracking-[0.2em] mb-2">{product.subtitle}</div>
              <h2 className="text-3xl lg:text-4xl font-light mb-6">{product.name}</h2>
              <p className="text-sm opacity-60 font-light leading-relaxed mb-8 max-w-md">
                {product.desc}
              </p>
              
              <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 tracking-wider mb-1">{t('products.maxPower')}</span>
                    <span className="text-sm font-medium">{product.zones * 1800}W</span>
                 </div>
                 <div className="w-[1px] h-8 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 tracking-wider mb-1">{t('products.surfaceConfig')}</span>
                    <span className="text-sm font-medium">{product.zones} {t('products.zones')}</span>
                 </div>
              </div>

              <div className="mt-8">
                <Link to="/compare" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors group/link pb-1 border-b border-transparent hover:border-cyan-400">
                  {t('products.compareLink')} 
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
