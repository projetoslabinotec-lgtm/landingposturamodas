import React from 'react';
import { MOSTRUARIO_CATEGORIES } from '../constants';

const Mostruario: React.FC = () => {
  return (
    <section id="mostruario" className="bg-brand-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Mostruário</h2>
          <p className="text-gray-400 mt-2">Explore nossas categorias: bermudas, calças, camisas e sandálias.</p>
        </div>

        <nav className="flex justify-center gap-4 mb-10 flex-wrap">
          {MOSTRUARIO_CATEGORIES.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded text-sm">
              {cat.title}
            </a>
          ))}
        </nav>

        {MOSTRUARIO_CATEGORIES.map(cat => (
          <section id={cat.id} key={cat.id} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">{cat.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map(item => (
                <figure key={item.id} className="bg-white/5 p-4">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <figcaption className="mt-2 text-sm text-gray-200">{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Mostruario;
