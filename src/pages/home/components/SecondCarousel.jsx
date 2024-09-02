import React from 'react';
import Marquee from 'react-fast-marquee';

const SecondCarousel = () => {
  const images = [
    {id: 1, image:"./images/img-color-1.svg"},
    {id: 2, image:"./images/img-color-2.svg"},
    {id: 3, image:"./images/img-color-3.svg"},
    {id: 4, image:"./images/img-color-4.svg"},
    {id: 5, image:"./images/img-color-5.svg"},
    {id: 6, image:"./images/img-color-6.svg"},
    {id: 7, image:"./images/img-color-7.svg"},
    {id: 8, image:"./images/img-color-8.svg"},
    {id: 9, image:"./images/img-color-9.svg"},
    {id: 10, image:"./images/img-color-10.svg"}
    
  ];

  return (
    <>
    <div className='mx-auto px-4  lg:px-32 mt-10 xxl:px-4  max-w-[1400px]'>
    <div className='relative flex flex-col justify-center text-center gap-12 xxl:gap-16'>
        <h2 className='lg:leading-[70px] lg:text-[64px] text-[40px] leading-[44px] font-semibold text-black'>
        Nous concevons et construisons
        des produits innovants.
        </h2>
    </div>
    <p className='text-sm md:text-lg mt-5 text-center '>
    Le numérique est désormais au cœur de chaque entreprise. La capacité d'une entreprise à 
    innover dans ce domaine est un véritable game changer. Chez MBOA DIGITAL, nous comprenons 
    le métier et les processus de nos clients et nous nous engageons à fournir des solutions innovantes 
    qui font la différence. Nous avons des antécédents prouvés de fourniture de logiciels robustes utilisés 
    à grande échelle, et pour cela nous nous appuyons sur une palette technologique en constante évolution.
    </p>
    </div>
    <section className="flex h-[420px] justify-center items-center w-screen">
        <div className=" h-[200px] shadow-lg bg-gray-300 shadow-slate-400 rounded-2xl w-full">
          <Marquee gradient pauseOnHover="true" className=" border-t rounded-2xl border-b py-3 overflow-hidden grid  ">  
          {images.map((item) => (
            <div key={item.id} className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <img src={item.image} className="w-full text-center h-auto object-contain" alt="" />
          </div>
          ))}
        </Marquee>
      </div>
      </section>
     
</>
  );
};

export default SecondCarousel;