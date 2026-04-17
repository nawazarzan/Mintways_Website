
// Import all homepage sections
import Banner from "../components/Banner.jsx";
import StartupCulture from "../components/StartupCulture.jsx";
import WorkCulture from "../components/WorkCulture.jsx";
import WhyThisMatters from "../components/WhyThisMatters.jsx";
import AiiAgentic from "../components/AiiAgentic.jsx";
import AiiLineDraw from "../components/AiiLineDraw.jsx";
import AiiBestPractice from "../components/AiiBestPractice.jsx";
import AiiCaseStudy from "../components/AiiCaseStudy.jsx";
import AiiBusinessImpact from "../components/AiiBusinessImpact.jsx";
import AiiLongContent from "../components/AiiLongContent.jsx";


import "./AgenticHealthCare.css";

function AgenticHealthCare() {
  return (
    <>  

        <div className="agentichealthcare-layout">
            {/* Hero Section */}
            <Banner image="/images/certified excellence & global expertise option 2.jpg" title="Agentic AI in Healthcare diagnosis! Where to draw the line?" />
            {/* <StartupCulture /> */}
            {/* <WorkCulture /> */}
            {/* <WhyThisMatters /> */}
            <AiiAgentic />
            <AiiLineDraw />
            <AiiBestPractice />
            {/* <AiiCaseStudy />
            <AiiBusinessImpact />
            <AiiLongContent /> */}
        </div>   
    </>
  );
}

export default AgenticHealthCare;
