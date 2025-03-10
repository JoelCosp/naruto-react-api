import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import ClansPage from './pages/ClansPage'
import VillagesPage from './pages/VillagesPage'
import KekkeiGenkaiPage from './pages/KekkeiGenkaiPage'

// Components
import NavComponent from './components/NavComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <>
      <NavComponent />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/characters' element={<CharactersPage />}/>
        <Route path='/clans' element={<ClansPage />}/>
        <Route path='/villages' element={<VillagesPage />}/>
        <Route path='/kekkei-genkai' element={<KekkeiGenkaiPage />}/>
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
