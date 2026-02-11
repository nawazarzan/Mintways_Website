
// Import all homepage sections
import HeroSectionInd from "../components/HeroSectionInd.jsx";
import BlackBar from "../components/BlackBar.jsx";
import BeforeAfterSection from "../components/BeforeAfterSection.jsx";
import VitalSyncSection from "../components/VitalSyncSection.jsx";
import "./Healthcare.css";

function Healthcare() {
  return (
    <>

        <div className="healthcare-layout">
            {/* Hero Section */}
            <HeroSectionInd />
            {/* Black Bar */}
            <BlackBar />
            {/* Clinic Management Section */}
            <BeforeAfterSection />
            {/* Vital Sync Section */}
            <VitalSyncSection /> 
        </div>   
    </>
  );
}

export default Healthcare;
