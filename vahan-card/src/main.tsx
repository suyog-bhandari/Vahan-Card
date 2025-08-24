import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import './CSS/home.css'
import './CSS/navbar.css'
import './CSS/components.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
