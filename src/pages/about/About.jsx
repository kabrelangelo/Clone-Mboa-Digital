import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='my-20 md:my-40'>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2 mx-4 lg:ml-20 my-10">
        <h3 className='text-xl md:text-2xl lg:text-3xl text-gray-400 my-6 lg:my-10'>Mission</h3>
        <h1 className='text-4xl md:text-5xl lg:text-7xl w-full'>Une équipe internationale pour relever un défi mondial</h1>
        <p className='my-8 md:my-10 lg:my-12 lg:mr-40 text-base md:text-lg lg:text-lg'>
          MBOA DIGITAL est la réponse au défi d’excellence et de compétitivité des équipes tech en Europe et 
          à l’international. ESN franco-camerounaise, nous sommes le “bras droit caché” des équipes tech de 
          grands groupes en France, Belgique, Allemagne et Nouvelle Zélande. Avec +10 ans d’expérience dans 
          les secteurs du Télécom, E-paiement, Logistique et Transport, nous répondons aux problématiques 
          courantes des directions techniques.
        </p>
      </div>
    </div>
    <div className='mx-10 lg:mx-32'>
        <img src="/teams.png" alt="" />
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5' >
        <div className='col-start-2 col-span-5 my-5'>
          <p className='mx-6 md:mx-5 lg:mx-32 my-10 text-justify'>
          Au cœur de nos opérations se trouvent des équipes d’experts, principalement 
          issus de la France et du vaste bassin de talents africains. Nos talents sont continuellement 
          formés aux nouvelles tendances technologiques grâce à un programme de formation et de mentorat 
          internes sur mesure. Cette dévotion garantit notre alignement avec les exigences dynamiques et 
          compétitives du marché technologique. Fondée en 2018, notre ambition est de créer une niche substantielle 
          dans le paysage technologique mondial, en agissant comme un pont entre les talents européens et africains 
          de premier plan et les principales entreprises technologiques mondiales, 
          favorisant un héritage d'innovation et d'excellence.</p>
          <Link
  className="group lg:mx-32 rounded-3xl relative inline-block overflow-hidden border border-black px-8 py-4 focus:outline-none focus:ring"
  to="#"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-sm font-medium text-black transition-colors duration-500 group-hover:text-white"
  >
    Rencontrez l'équipe
  </span>
</Link>
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-5'>
  <div className='col-start-1 col-span-2'>
    <h3 className='lg:text-3xl text-xl mx-6 sm:mx-20 lg:ml-40 lg:my-20 my-10'>Le saviez-vous ?</h3>
  </div>
  <div className='col-start-1 lg:col-start-3 my-10 lg:my-20 col-span-5 lg:col-span-3'>
    <p className='lg:mr-20 mx-6 sm:mx-auto text-justify'>
      L’Europe, qui compte des talents tech de qualité, fait face à une pénurie, comme partout dans le monde. Cette tendance va s’accentuer dans les prochaines années, avec des centaines de milliers de postes non pourvus dans le digital. Dans le même temps, l'Afrique se distingue comme un bassin particulièrement avantageux, principalement en raison de sa jeunesse. Le continent compte environ 1,46 milliard d'habitants avec un âge moyen d'environ 19,5 ans, ce qui témoigne d'un vaste réservoir de talents technologiques potentiels.
    
      Rechercher des modèles alternatifs; créer dans notre cas des liens Europe - Afrique pour accompagner davantage les entreprises dans leur transition numérique tout en limitant les écueils est aujourd’hui vital pour une entreprise du numérique durable.
    </p>
  </div>
</div>

    </div>
  
  )
}
