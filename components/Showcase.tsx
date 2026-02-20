import React, { useState } from 'react';
import { WHATSAPP_LINK, MOSTRUARIO_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Showcase: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="showcase" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Acabou de Chegar</span>
                <h3 className="text-3xl md:text-5xl font-serif font-medium text-black">
                    Mostruário<br/>Exclusivo
                </h3>
            </div>
            <div className="mt-6 md:mt-0">
                <p className="text-gray-500 text-sm max-w-xs text-right hidden md:block">
                    Confira a variedade de cores e modelos disponíveis em loja.
                </p>
            </div>
        </div>

        {/* categorias nav */}
        <nav className="flex justify-center gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 text-sm rounded ${active===null? 'bg-black text-white' : 'bg-gray-100'}`}>
            Todos
          </button>
          {MOSTRUARIO_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 text-sm rounded ${active===cat.id? 'bg-black text-white' : 'bg-gray-100'}`}>
              {cat.title}
            </button>
          ))}
        </nav>

        {/* seções por categoria (ou todas) */}
        {MOSTRUARIO_CATEGORIES.map(cat => {
          if (active && active !== cat.id) return null;
          return (
            <section id={cat.id} key={cat.id} className="mb-12">
              <h4 className="text-xl font-semibold mb-4">{cat.title}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {cat.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative aspect-square overflow-hidden bg-gray-100 rounded-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Consultar <ArrowRight size={14}/>
                      </a>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-black">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-12 text-center">
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">E muito mais na loja física</p>
        </div>

      </div>
    </section>
  );
};

export default Showcase;