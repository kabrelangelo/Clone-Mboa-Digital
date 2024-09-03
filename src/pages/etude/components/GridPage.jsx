import React from 'react';

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
            <div key={element.id} className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 my-20">
            <div className=" ml-28 rounded-lg ">
                <h5 className='text-2xl text-black'>{element.slug}</h5>
                <h2 className='text-4xl w-[80%] font-bold'>{element.title}</h2>
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