
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


import "./FutureSoftware.css";

function FutureSoftware() {
  return (
    <>  

        <div className="futuresoftware-layout">
            {/* Hero Section */}
            <Banner image="/images/certified excellence & global expertise option 2.jpg" title="Future of software development in the LowCode NoCode paradigm" />
            {/* <StartupCulture /> */}
            {/* <WorkCulture /> */}
            {/* <WhyThisMatters /> */}
            {/* <AiiAgentic /> */}
            {/* <AiiLineDraw /> */}
            {/* <AiiBestPractice /> */}
            {/* <AiiCaseStudy /> */}
            {/* <AiiBusinessImpact /> */}
            <AiiLongContent />
        </div>   
    </>
  );
}

export default FutureSoftware;
