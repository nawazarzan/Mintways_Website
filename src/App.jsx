import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


// Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import VitalSyncDetails from "./pages/VitalSyncDetails.jsx";
import MintCommerce from "./pages/MintCommerce.jsx";
import GurukulSaarthi from "./pages/GurukulSaarthi.jsx";
import AISolution from "./pages/AISolution";
import AILanding from "./pages/AILanding";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import AutomationPage from "./pages/AutomationPage.jsx";
import Healthcare from "./pages/Healthcare.jsx";
import SuccessTransforming from "./pages/SuccessTransforming.jsx";
import Optimizing from "./pages/Optimizing";
import Streamlining from "./pages/Streamlining";
import ScrollToTop from "./components/ScrollToTop";
import Insight from "./pages/Insight.jsx";
import Privacy from "./pages/Privaccy.jsx";
import SuccessStory from "./pages/SuccessStory.jsx";
import Producct from "./pages/Producct.jsx";
import AgenticAISection from "./components/AgenticAISection.jsx";
import Homter from "./pages/Homter.jsx";
import BuildingInsight from "./pages/BuildingInsight.jsx";
import AgenticHealthCare from "./pages/AgenticHealthCare.jsx";
import InnovationTechnology from "./pages/InnovationTechnology.jsx";
import FutureSoftware from "./pages/FutureSoftware.jsx";



function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <Router>
      <ScrollToTop />
      {/* <div className="container"> */}
        <Navbar />
      {/* </div> */}
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vital-sync" element={<VitalSyncDetails />} />
        <Route path="/mint-commerce" element={<MintCommerce />} />
        <Route path="/gurukul-saarthi" element={<GurukulSaarthi />} />
        <Route path="/solutions/ai" element={<AISolution />} />
        <Route path="ai-landing" element={<AILanding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/solutions/automation" element={<AutomationPage />} />
        <Route path="/industries/healthcare" element={<Healthcare />} /> 
        <Route path="success/transforming" element={<SuccessTransforming />} /> 
        <Route path="success/optimizing" element={<Optimizing />} />
        <Route path="success/streamlining" element={<Streamlining />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/success-stories" element={<SuccessStory />} />
        <Route path="/products" element={<Producct />} />
        {/* <Route path="/agentic-ai-healthcare" element={<AgenticAISection />} /> */}
        <Route path="/homter" element={<Homter />} />
        <Route path="/building-insight" element={<BuildingInsight />} />
        <Route path="/agentic-healthcare" element={<AgenticHealthCare />} />
        <Route path="/innovation-technology" element={<InnovationTechnology />} />
        <Route path="/future-software" element={<FutureSoftware />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
