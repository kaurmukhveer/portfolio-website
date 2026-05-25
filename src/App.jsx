// This is the main component of the React application. It defines the structure and content of the landing page, including a greeting, a brief description, and a button to view the work.
//class is reserved keyword in JavaScript, so we use className instead to apply CSS classes to the div element.
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'

import ServicePage from './pages/ServicePage'
import MemoryGamePage from './pages/MemoryGamePage'
import EcommercePage from './pages/EcommercePage'
import AnalyticsPage from './pages/AnalyticsPage'

function App() {

  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/service-site"
          element={<ServicePage />}
        />

        <Route
          path="/memory-game"
          element={<MemoryGamePage />}
        />

        <Route
          path="/ecommerce"
          element={<EcommercePage />}
        />

        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />

      </Routes>

    </>
  )
}

export default App