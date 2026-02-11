import SolutionHero from "../components/SolutionHero";
import Navbar from "../components/Navbar";
import "./AISolution.css";
import AIModernizationSteps from "../components/AIModernization";
import AIIntegration from "../components/AIIntegrationSection";
import AINativeDevelopment from "../components/AINativeDevelopment";
import AIExtraSections from "../components/AIExtraSections";


function AISolution() {
  return (
    <main>
      <Navbar /> 
      <SolutionHero />
      <AIIntegration />
      <AIModernizationSteps />
      <AINativeDevelopment />
      <AIExtraSections />  
    </main>
  );
}

export default AISolution;
