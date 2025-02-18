import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Para poder usar las rutas

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Enolvemos la app con el BrowseRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
