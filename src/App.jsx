

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

// Layout Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


// Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import VitalSyncDetails from "./pages/VitalSyncDetails.jsx";
import MintCommerce from "./pages/MintCommerce.jsx";
import GurukulSaarthi from "./pages/GurukulSaarthi.jsx";





function App() {
  return (
    <Router>
      {/* Navbar will show on all pages */}
      <div className="container">
        <Navbar />
      </div>
      

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vital-sync" element={<VitalSyncDetails />} />
        <Route path="/mint-commerce" element={<MintCommerce />} />
        <Route path="/gurukul-saarthi" element={<GurukulSaarthi />} />


      </Routes>

      {/* Footer will show on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
