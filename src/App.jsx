

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

// Layout Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";


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
      </Routes>

      {/* Footer will show on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
