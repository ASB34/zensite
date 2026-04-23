import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';

export default function Compare() {
  const models = ['Zen 2-Burner', 'Zen 4-Burner', 'Zen 6-Burner Pro', 'ZenNomad Module'];
  
  const features = [
    { name: 'Cooking Zones', values: ['2', '4', '6 (Bridge)', '2 + Sink'] },
    { name: 'Max Power Output', values: ['3.6 kW', '7.2 kW', '10.8 kW', '3.6 kW'] },
    { name: 'Surface Material Compatibility', values: ['12-20mm Porcelain', '12-20mm Porcelain', '12-20mm Porcelain (All)', 'Included Surface'] },
    { name: 'Light Beam Interface', values: [<Check />, <Check />, <Check />, <Check />] },
    { name: 'Smartphone Connect', values: [<Minus />, <Check />, <Check />, <Check />] },
    { name: 'Automated Pan Sensing', values: [<Minus />, <Minus />, <Check />, <Minus />] },
    { name: 'Booster Function', values: [<Check />, <Check />, <Check />, <Check />] },
    { name: 'Installation', values: ['Professional', 'Professional', 'Professional', 'Plug & Play'] },
  ];

  return (
    <div className="flex-1 py-12 px-6 md:px-12 relative flex flex-col items-center">
      
      <div className="text-center max-w-2xl mb-16 relative z-10">
        <motion.h1 
          className="text-4xl font-extralight tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Compare <span className="font-medium text-cyan-400">Specifications</span>
        </motion.h1>
        <motion.p 
          className="text-sm opacity-50 font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Analyze the technical aspects of the ZenCook series to find the perfect configuration for your architectural project.
        </motion.p>
      </div>

      <motion.div 
        className="w-full max-w-5xl overflow-x-auto relative z-10 pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <table className="w-full min-w-[800px] border-collapse text-left">
          <thead>
            <tr>
              <th className="p-4 border-b border-white/20 text-xs font-normal uppercase tracking-widest text-gray-400 w-1/4">Feature</th>
              {models.map(model => (
                <th key={model} className="p-4 border-b border-white/20 text-sm font-light h-20 align-bottom w-[18.75%]">
                  {model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors group">
                <td className="p-4 border-b border-white/5 text-xs text-gray-300 font-light group-hover:text-cyan-200 transition-colors">
                  {feature.name}
                </td>
                {feature.values.map((val, j) => (
                  <td key={j} className="p-4 border-b border-white/5 text-sm font-light text-center text-gray-400 group-hover:text-white transition-colors">
                    <span className="inline-flex items-center justify-center">
                      {typeof val === 'string' ? val : <span className="text-cyan-500 opacity-80">{val}</span>}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      
      {/* Visual flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent pointer-events-none z-0"></div>
    </div>
  );
}
