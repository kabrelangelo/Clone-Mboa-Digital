import React from 'react'
import HeroPage from './components/HeroPage'
import GridBloc from './components/GridBloc'
import BlackSection from './components/BlackSection'

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <GridBloc/>
      <BlackSection/>
    </div>
  )
}