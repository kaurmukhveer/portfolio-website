// This is the main component of the React application. It defines the structure and content of the landing page, including a greeting, a brief description, and a button to view the work.
//class is reserved keyword in JavaScript, so we use className instead to apply CSS classes to the div element.
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
function App() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   </div>
  )
}

export default App