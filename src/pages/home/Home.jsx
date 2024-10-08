import React from 'react'
import HeroPage from './components/HeroPage'
import GridBloc from './components/GridBloc'
import BlackSection from './components/BlackSection'
import CarouselHome from './components/CarouselHome'
import SecondCarousel from './components/SecondCarousel'
import FinalHome from './components/FinalHome'

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <GridBloc/>
      <BlackSection/>
      <CarouselHome/>
      <SecondCarousel/>
      <FinalHome/>
    </div>
  )
}