import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pay from './Pay'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pay />
  </StrictMode>
)
