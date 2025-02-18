import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'

// Components
import NavComponent from './components/NavComponent'

function App() {

  return (
    <>
      <NavComponent />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/characters' element={<CharactersPage />}/>
      </Routes>
    </>
  )
}

export default App
