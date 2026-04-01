// Import all homepage sections
import "./Home.css";
import HeroSection from "../components/HeroSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import SuccessStories from "../components/SuccessStories.jsx";
import WhyChooseMintways from "../components/WhyChooseMintways.jsx";
import BannerSection from "../components/BannerSection.jsx";
import CertificationsSection from "../components/CertificationsSection.jsx";
import TrustedTechCards from "../components/TrustedTechCards.jsx";
import WhatWeDo from "../components/WhatWeDo.jsx";
import OurProcess from "../components/OurProcess.jsx";

function Home() {
  return (
    <div className="page-layout">
      
      {/* Hero */}
      <HeroSection />

      {/* Trusted Tech Cards */}
      <TrustedTechCards />

      {/* Clients */}
      <ClientsSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* What We Do */}
      <WhatWeDo />

      {/* Why Choose Us */}
      <WhyChooseMintways />

      {/* Our Process */}
      <OurProcess />

      {/* Banner */}
      <BannerSection />

      {/* Certifications */}
      <CertificationsSection />

    </div>
  );
}

export default Home;
