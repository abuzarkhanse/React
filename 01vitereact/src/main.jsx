import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Abuzar from './abuzar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Abuzar />
  </StrictMode>,
)
