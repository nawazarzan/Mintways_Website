// Import all homepage sections
import "./Home.css";
import HeroSection from "../components/HeroSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import SuccessStories from "../components/SuccessStories.jsx";
import WhyChooseMintways from "../components/WhyChooseMintways.jsx";
import BannerSection from "../components/BannerSection.jsx";
import CertificationsSection from "../components/CertificationsSection.jsx";

function Home() {
  return (
    <div className="page-layout">
      
      {/* Hero */}
      <HeroSection />

      {/* Clients */}
      <ClientsSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* Why Choose Us */}
      <WhyChooseMintways />

      {/* Banner */}
      <BannerSection />

      {/* Certifications */}
      <CertificationsSection />

    </div>
  );
}

export default Home;
