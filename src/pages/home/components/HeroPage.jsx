import React from 'react';
import {Link} from 'react-router-dom'

const HeroPage = () => {
    return (
<div
  className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 md:my-24 lg:my-32"
  style={{
    transform: 'translateX(-100%)',
    opacity: 0,
    animation: 'slideInFromLeft 1s ease-out forwards'
  }}
>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
    <div className="lg:col-span-3">
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Équipes de développeurs d'élite</h2>
      <p className='my-4 sm:my-6 md:my-8 lg:my-10 text-lg sm:text-xl md:text-2xl'>
        Gagnez en compétitivité en vous appliquant sur des compétences numériques de haut niveau. 
        Embarquez votre équipe dans <span className='font-bold'> quelques jours.</span>
      </p>
      <Link
  className="group rounded-3xl relative inline-block overflow-hidden border border-black px-8 py-4 focus:outline-none focus:ring"
  to="#"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-sm font-medium text-black transition-colors group-hover:text-white"
  >
    Discutons de votre projet
  </span>
</Link>
    </div>
  </div>
</div>
    );
};

export default HeroPage;