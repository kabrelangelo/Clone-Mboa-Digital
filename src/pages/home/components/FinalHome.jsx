import React, { useState } from 'react';
import Accordion from './Accordion';

const FinalHome = () => {
    const [accordions, setAccordion]=useState([
        {id: 1, isOpen:false, title: "Consulting",content:"Nous proposons des services de conseil personnalisés pour aider nos clients à optimiser leurs processus et atteindre leurs objectifs commerciaux plus efficacement. Nos offres incluent l'évaluation, la mise en œuvre et la formation, toutes adaptées aux besoins spécifiques de chaque client. Notre équipe d'experts collabore étroitement avec les clients pour garantir des transitions fluides et efficaces. Chez MBOA DIGITAL, l'accent est mis sur l'humain plutôt que sur la technologie. Nous priorisons l'amélioration de l'expérience utilisateur. Nos experts procèdent à des évaluations des systèmes en place, proposent et déploient des améliorations pertinentes, et assurent la formation des employés sur les nouveaux logiciels ou processus. Le succès de nos interventions est mesuré par l'adoption effective des solutions, les économies réalisées, la valeur ajoutée et l'amélioration de l'expérience utilisateur, plutôt que par la simple livraison de solutions technologiques."},
        {id: 2, isOpen:false, title: "Conception et prototypage",content:"La conception de logiciels représente un investissement substantiel et comporte son lot de risques, notamment le risque que le produit fini ne trouve pas son public, que ce soit par manque de pertinence ou parce que les besoins du marché ont évolué. Pour minimiser ces risques, il est crucial d'impliquer les utilisateurs dès les premières étapes du développement afin de recueillir leurs retours et d'ajuster rapidement la direction du projet si nécessaire. C'est dans cet esprit que nous avons développé nos services spécialisés en conception et prototypage. Notre équipe experte en design de produits et expérience utilisateur est équipée pour développer et tester rapidement des prototypes, permettant des itérations efficaces et la collecte de retours utilisateurs en temps réel. Nos créations ne se limitent pas à être fonctionnelles ; elles sont également esthétiques et conçues pour offrir une expérience utilisateur optimale. Le résultat de notre processus de prototypage offre un modèle concret que l'équipe de développement peut utiliser pour concrétiser le service envisagé et validé avec vous."},
        {id: 3, isOpen:false, title: "Web et Mobile", content:"Nous sommes experts en développement d'applications web robustes et performantes, capables de transformer le niveau de performance de votre entreprise. Notre équipe, forte de nombreuses années d'expérience dans la création de systèmes complexes pour divers secteurs, est spécialisée dans l'élaboration de solutions web adaptées à des besoins très variés. Que vos utilisateurs alternent entre mobiles et ordinateurs de bureau, ils bénéficieront d'une expérience fluide grâce à nos applications web réactives. Besoin d'accéder à des informations en mode hors ligne ? Nous intégrons des fonctionnalités offline. Votre application doit-elle supporter de quelques centaines à plusieurs millions d'utilisateurs ? Nous optimisons votre infrastructure web pour une mise à l'échelle automatique, garantissant une performance inébranlable peu importe la charge. Nos solutions web assurent une utilisation efficace et continue, quel que soit le lieu ou le dispositif utilisé par vos utilisateurs."},
        {id: 4, isOpen:false, title: "Cloud Computing", content:"Chez MBOA DIGITAL, notre service d'ingénierie du cloud inclut la conception, la mise en œuvre et la gestion d'infrastructures et d'applications cloud. Nous exploitons la flexibilité, l'évolutivité et la rentabilité du cloud computing pour soutenir vos objectifs commerciaux. Notre équipe, composée d'ingénieurs certifiés en cloud computing, est prête à évaluer votre infrastructure actuelle pour identifier les meilleures opportunités de migration vers le cloud. Nous créons des architectures sur mesure, utilisant des fournisseurs renommés tels qu'Amazon Web Services, Microsoft Azure et Google Cloud Platform. Une fois votre infrastructure cloud en place, nous assurons sa gestion et son maintien, incluant la surveillance des performances, la sécurité, et le support technique continu. Nous offrons aussi des formations pour aider votre équipe à maîtriser les technologies cloud et adopter les meilleures pratiques. Nos ingénieurs DevOps optimisent la gestion automatisée de votre infrastructure et applications cloud, minimisant les risques tout en maximisant les avantages du cloud computing."},
        {id: 5, isOpen:false, title: "Service Desk", content:"Notre Service Desk est à disposition de nos clients 24 heures sur 24, 7 jours sur 7. À tout moment, nos clients peuvent solliciter notre équipe d'assistance pour résoudre leurs problèmes techniques via téléphone, e-mail ou chat en ligne. Notre équipe, hautement qualifiée et expérimentée, est spécialisée dans le diagnostic et la résolution d'une large gamme de problèmes techniques. Nous offrons également un service de surveillance proactive, permettant de détecter et d'adresser les problèmes avant qu'ils ne dégradent l’expérience utilisateur. Ce service inclut des contrôles systématiques et des mises à jour régulières, accompagnés de notifications en temps réel en cas de problème. Cela garantit une performance optimale des systèmes de nos clients et réduit les interruptions, leur permettant de se concentrer pleinement sur leur cœur de métier tandis que nous veillons sur leurs infrastructures et applications."}
    ])

    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.id === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
   
        setAccordion(updatedAccordions);
    }
        return ( 
            <div> 
             <h5 className='md:col-span-3 md:mb-4 md:text-[32px] text-[24px] md:leading-[40px] mx-20'>Expertises</h5> 

            <div className="flex justify-center items-center h-[400px]">
            <div className="p-2 w-[50%] text-center mx-auto ">
            {accordions.map((accordion) => (
            <Accordion
                key={accordion.id}
                title={accordion.title}
                content={accordion.content}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.id)}
            />
        ))}
    </div>
</div>
</div>
        ); 
    }; 


export default FinalHome;