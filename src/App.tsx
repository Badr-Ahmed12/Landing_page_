import AboutSection from "./components/About"
import CompaniesSwiper from "./components/Companies"
import Contact from "./components/Contect"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import ServicesSection from "./components/servcies"
import Testmoinal from "./components/Testmoinal"


function App() {
  
  return (
    <>
     <Navbar/> 
     <Hero/>
     <CompaniesSwiper/>
     <AboutSection />
     <ServicesSection />
     <Testmoinal />
     <Contact />
     <Footer />
    </>
  )
}

export default App
