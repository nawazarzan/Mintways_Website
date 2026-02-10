import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SuccessTransforming from "./pages/SuccessTransforming";
import Optimizing from "./pages/Optimizing";
import Streamlining from "./pages/Streamlining";
import "./App.css";
import Healthcare from "./pages/Healthcare";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="healthcare" element={<Healthcare />} /> 
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
