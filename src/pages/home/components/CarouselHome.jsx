import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const CarouselHome = () => {
  const elements = [
    {id: 1, image:"./digiPediaMed.svg", title:"Révolution Numérique dans le Secteur de la Santé Pédiatrique", slug:"Santé"},
    {id: 2, image:"./logistic.png", title:"Réinvention Digitale : Un Nouvel Horizon pour la Livraison de Courrier en Océanie", slug:"Logistique"},
    {id: 3, image:"./ola.svg", title:"L'Automatisation au Service du Contrôle de Gestion", slug:"Nos produits"},
    {id: 4, image:"./antene-full.png", title:"Plateforme Digitale : Une Réponse Agile aux Défis de la Télécommunication", slug:"Télécommunications"},
    {id: 5, image:"./logistique1.svg", title:"Révolution dans la Gestion des Retours : Un Système de RMA Innovant pour un Géant des Télécoms", slug:"Electronique"},
    {id: 6, image:"./payrollr.svg", title:"La Révolution de la Gestion de Paie au Cameroun", slug:"Nos produits"} 
  ];

  return (
    <section className="flex mt-5 justify-center items-center">
      <div className="h-[70%] shadow-lg shadow-slate-300 rounded-2xl w-[1200px]">
        <Marquee
          gradient={false} 
          pauseOnHover={false} 
          speed={100}
          className="border-t rounded-2xl border-b py-3 overflow-hidden"
        >
          {elements.map((item, index) => (
            <Link to="/case-studies">
            <div key={index} className="flex flex-col justify-center w-[600px] h-[400px] mx-2 cursor-pointer">
              <img src={item.image} className="w-full text-center h-auto object-contain" alt={item.title} />
              <h2 className="text-3xl font-bold mt-4 text-center">{item.title}</h2>
              <button className='text-lg font-semibold text-left border-solid border-black'>{item.slug}</button>
            </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CarouselHome;