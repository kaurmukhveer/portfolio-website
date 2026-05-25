// This is the entry point of the React application. It imports necessary modules and renders the App component into the root element of the HTML document.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom.css'
import { FaFirefoxBrowser } from 'react-icons/fa'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </StrictMode>,
)
