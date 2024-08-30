import React from 'react';

const HeroPage = () => {
    return (
<div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 my-8 sm:my-16 md:my-24 lg:my-32">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
    <div className="lg:col-span-3">
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Équipes de développeurs d'élite</h2>
      <p className='my-4 sm:my-6 md:my-8 lg:my-10 text-lg sm:text-xl md:text-2xl'>
        Gagnez en compétitivité en vous appliquant sur des compétences numériques de haut niveau. 
        Embarquez votre équipe dans <span className='font-bold'> quelques jours.</span>
      </p>
      <button className='soli '>Discutons de votre projet</button>
    </div>
  </div>
</div>
    );
};

export default HeroPage;