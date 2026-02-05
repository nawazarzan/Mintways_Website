
import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ClientsSection from './components/ClientsSection.jsx'
import SuccessStories from './components/SuccessStories.jsx'
import WhyChooseMintways from './components/WhyChooseMintways.jsx'
import BannerSection from './components/BannerSection.jsx'
import CertificationsSection from './components/CertificationsSection.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
    <>
      <div className="container"> 
        <Navbar />
      </div>

      <div className='container'>
        <HeroSection />
      </div>

      <div className='container'>
        <ClientsSection />
      </div>

      <div className='container'>
        <SuccessStories />
      </div>

      <div className='container'>
        <WhyChooseMintways />
      </div>

      <div className='container'>
        <BannerSection />
      </div>

      <div className='container'>
        <CertificationsSection />
      </div>

      <div className="footer-container">
        <Footer />
      </div>

    </>
  )
}

export default App
