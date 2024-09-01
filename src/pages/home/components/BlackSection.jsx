import React from 'react';
import { Link } from 'react-router-dom';

const BlackSection = () => {
    return (
        <div className='grid grid-cols-1 bg-black min-h-screen w-full'>
  <div className="flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 text-white text-center">
    <img src="/teams-working.png" alt="" className='max-w-full h-auto mx-auto' />
    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Une porte grande ouverte vers un nouveau vivier de talents</h2>
    <p className='md:text-lg text-sm'>Dans un contexte marqué par des chantiers de transition digitale majeurs, 
    et une pénurie mondiale de travailleurs qualifiés, MBOA DIGITAL a développé un modèle 
    qui permet de combiner des talents en Europe et en Afrique. Avec sa population jeune, éduquée, 
    l'Afrique est considérée comme un continent d'avenir. Notre réseau, notre savoir-faire, 
    nous permettent d'ouvrir à nos clients une porte sur de nouvelles ressources tout en gardant une 
    proximité qui leur est chère. Plus de projets qui trainent dans les tiroirs, faute de ressources pour exécuter, 
    nous nous inscrivons en partenaire de confiance pour une transformation digitale tout en douceur.</p>
    <div>
    <Link
  className="group rounded-3xl relative inline-block overflow-hidden border border-white px-8 py-4 focus:outline-none focus:ring"
  to="/case-studies"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-sm font-medium text-white transition-colors duration-1000 group-hover:text-black"
  >
   En savoir plus sur nous
  </span>
</Link>
</div>
  </div>
</div>
    );
};

export default BlackSection;