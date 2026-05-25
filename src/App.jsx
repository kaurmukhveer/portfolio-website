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