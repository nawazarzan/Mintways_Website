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
        <Route path="/solutions/ai-landing" element={<AILanding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/solutions/automation" element={<AutomationPage />} />
        <Route path="/industries/healthcare" element={<Healthcare />} /> 
        <Route path="success/transforming" element={<SuccessTransforming />} /> 
        <Route path="success/optimizing" element={<Optimizing />} />
        <Route path="success/streamlining" element={<Streamlining />} />

        {/* Healthcare yeh line add karney yahan par to hero mein problem arhey success mein */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
