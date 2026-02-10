import "./Home.css";

// Import all homepage sections
import HeroSection from "../components/HeroSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import SuccessStories from "../components/SuccessStories.jsx";
import WhyChooseMintways from "../components/WhyChooseMintways.jsx";
import BannerSection from "../components/BannerSection.jsx";
import CertificationsSection from "../components/CertificationsSection.jsx";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Why Choose Mintways Section */}
      <WhyChooseMintways />

      {/* Banner Section */}
      <BannerSection />

      {/* Certifications Section */}
      <CertificationsSection />
    </>
  );
}

export default Home;
