import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import Healthcare from "./pages/Healthcare";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthcare" element={<Healthcare />} /> 
        {/* Healthcare yeh line add karney yahan par to hero mein problem arhey success mein */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
