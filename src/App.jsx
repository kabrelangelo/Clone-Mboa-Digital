import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import CaseStudy from './pages/etude/CaseStudy'
import Pricing from './pages/tarifs/Pricing'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App(){
  return(
    <>
    <Header/>
     <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/about-us/mission' element={<About />}/>
      <Route path='/about-us/teams' element={<About />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/case-studies' element={<CaseStudy />}/>
      <Route path='/contact-us' element={<Contact />}/>
     </Routes>
     <Footer/>
    </>
  )
}
