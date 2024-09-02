import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Evaluation = () => {
    const [analysis, setAnalysis]=useState(0)
    const [design, setDesign]=useState(0)
    const [front, setFront]=useState(0)
    const [devops, setDevops]=useState(0)
    const [quality, setQuality]=useState(0)

    const skills=[
    {label:"Analysis", value: analysis ,setValue:setAnalysis},
    {label:"UI UX Design", value: design ,setValue:setDesign},
    {label:"Front End", value: front ,setValue:setFront},
    {label:"DevOps", value: devops , setValue:setDevops},
    {label:"Quality Analysis", value: quality ,setValue:setQuality}
]

const total=`${(analysis+design+front+devops+quality)*300} EUR`


    const increment=(setter)=>{
        setter(prev=>prev+1)      
    }

    const decrement=(setter, value)=>{
        setter(prev=>prev-1)
        if(value<=0){
            setter(0)
        }
    }

    return (  
        <div className='flex flex-col md:flex-row w-full my-40'>
    <div className=' mx-[10%] w-[80%] max-w-md'>
        <h3 className='text-3xl font-serif mx-5 mb-5'>Evaluer mon projet</h3>
        {skills.map((skill) => (
            <div key={skill.label} className="flex items-center justify-between rounded border border-gray-200 p-2 mb-4">
                <label className='flex-1 text-left text-sm md:text-lg font-medium'>
                    {skill.label}
                </label>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <button
                        type="button"
                        className="text-xl md:text-2xl text-gray-900 font-bold transition hover:opacity-75"
                        onClick={() => decrement(skill.setValue, skill.value)}
                    >
                        -
                    </button>
                    
                    <input
                        type="number"
                        value={skill.value}
                        readOnly
                        className="h-10 w-16 md:h-12 md:w-24 border-transparent font-bold text-center text-sm md:text-xl"
                    />

                    <h5 className="text-sm md:text-lg font-medium">Jour(s)</h5>

                    <button
                        type="button"
                        className="text-xl md:text-2xl text-gray-900 font-bold transition hover:opacity-75"
                        onClick={() => increment(skill.setValue)}
                    >
                        +
                    </button>
                </div>
            </div>
        ))}
        <h3 className='text-xl md:text-2xl font-semibold mt-4'>Total</h3>
        <input 
            type="text" 
            className='text-xl md:text-3xl font-bold w-full text-center border border-gray-300 mt-2 p-2' 
            value={total} 
            readOnly 
        />
          <Link
  className="group rounded-3xl my-16 relative inline-block overflow-hidden border border-black px-8 py-4 focus:outline-none focus:ring"
  to="#"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-sm font-medium text-black transition-colors duration-500 group-hover:text-white"
  >
    Discutons de votre projet
  </span>
</Link>
<p className='text-sm'>
(*) Ceci est un outil de simulation, et n’a aucune valeur contractuelle. 
Merci de nous contacter pour discuter de votre projet, notre équipe se chargera d’établir une évaluation.
</p>
    </div>

    <div className='my-12 mx-auto w-full max-w-md px-10'>
    <h4 className='text-xl font-bold'>Nos offres</h4>
    <h2 className='text-3xl my-5'>   Equipe de développement As A Service</h2>
        <p className='text-xl'>
Pour les entreprises qui recherchent une équipe pour compléter un projet dans un délai 
court ou qui ont besoin de capacités supplémentaires ponctuelles. Ou à la recherche d'une équipe 
dédiée pour s'attaquer à leur important backlog de produits. 
Un partenaire long terme, qui développe une expertise sur vos métiers.
        </p>
    <h2 className='text-3xl my-5'>   Service Desk As A Service</h2>
        <p className='text-xl '>
        Pour les entreprises dédiées à offrir un service fiable à leurs utilisateurs finaux. 
        Notre Service Desk fournit des SLA exigeants sur une base 24/7, 
        avec une culture de résolution d'incidents centrée sur l'utilisateur final.
        </p>
        <h4 className='text-xl font-bold my-10'>Nos engagements</h4>
        <ul>
            <li className='list-disc my-5 text-xl'>
            Garantie satisfaction, corrections à nos frais en cas de malfaçons
            </li>
            <li className='list-disc my-5 text-xl'>
            Un interlocuteur senior, qualifié, qui suit votre projet avec vous
            </li>
            <li className='list-disc my-5 text-xl'>
            Haut niveau de service avec des SLAs support exigeants
            </li>
            <li className='list-disc my-5 text-xl'>
            Visibilité budget/réalisation, avec du reporting mensuel
            </li>
        </ul>
</div>

</div>
    );
};

export default Evaluation;