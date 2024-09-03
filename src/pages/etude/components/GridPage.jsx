import React from 'react';
import { Link } from 'react-router-dom';

const GridPage = () => {
    const elements = [
        {id: 1, image:"./antene-full.png", title:"Plateforme Digitale : Une Réponse Agile aux Défis de la Télécommunication", slug:"Télécommunications"},
        {id: 2, image:"./logistic.png", title:"Réinvention Digitale : Un Nouvel Horizon pour la Livraison de Courrier en Océanie", slug:"Logistique"},
        {id: 3, image:"./logistique1.svg", title:"Révolution dans la Gestion des Retours : Un Système de RMA Innovant pour un Géant des Télécoms", slug:"Electronique"},
        {id: 4, image:"./digiPediaMed.svg", title:"Révolution Numérique dans le Secteur de la Santé Pédiatrique", slug:"Santé"},
        {id: 5, image:"./ola.svg", title:"L'Automatisation au Service du Contrôle de Gestion", slug:"Nos produits"},
        {id: 6, image:"./payrollr.svg", title:"La Révolution de la Gestion de Paie au Cameroun", slug:"Nos produits"} 
      ];
    return (
        <div className='my-48'>
        {elements.map((element)=>(
            <div key={element.id} className=" h-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 my-40">
            <div className=" ml-28 rounded-lg ">
                <h5 className='text-lg border rounded-3xl py-2 bg-gray-300 px-6  inline-block text-black'>{element.slug}</h5>
                <h2 className='text-4xl font-bold my-10'>{element.title}</h2>
                <Link className="group rounded-3xl relative inline-block overflow-hidden border border-black px-8 py-4 focus:outline-none focus:ring"
  to="#"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-sm font-bold text-black transition-colors duration-500 group-hover:text-white"
  >
    Voir Plus  
  </span>
  <span className="text-xl font-bold ml-2">→</span>
</Link>
            </div>
             <div className="mx-5 rounded-lg">
                <img src={element.image} alt=""  className=''/>
             </div>
        </div>
        ))}
       
        </div>
    );
};

export default GridPage;