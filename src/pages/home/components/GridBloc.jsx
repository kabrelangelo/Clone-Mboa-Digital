import React, { useState, useEffect } from 'react';

const GridBloc = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { title: '100+', description: 'Projets réalisés' },
    { title: 'Millions', description: "D'utilisateurs finaux satisfaits" },
    { title: '30 à 50%', description: "D'économie" },
    { title: 'Millions $', description: 'De retour sur Investissement' },
    { title: 'Certified', description: 'Clouds AWS & Azure' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 my-8 px-5 mx-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="h-44 rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 z-10">
            <h2 className="text-3xl font-bold text-center py-8">{stat.title}</h2>
            <p className="text-center text-lg">{stat.description}</p>
          </div>
          <div 
            className={`absolute inset-0 bg-gray-200 transition-transform duration-300 ${
              index === activeIndex 
                ? 'translate-x' 
                : index < activeIndex 
                  ? 'translate-x-full' 
                  : 'translate-x-full'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default GridBloc;