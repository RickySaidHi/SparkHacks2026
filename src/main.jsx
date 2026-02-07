import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './landing/Home.jsx'
import Hero from './landing/Hero.jsx'
import Landing from './landing/Landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing/>
  </StrictMode>,
)
