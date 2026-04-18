
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
import ButtonLink from "../components/ButtonLink.jsx";


import "./BuildingInsight.css";

function BuildingInsight() {
  return (
    <>  

        <div className="buildinsigh-layout">
            {/* Hero Section */}
            <Banner image="/images/certified excellence & global expertise option 2.jpg" title="Building a Strong Work Culture in Startups: The First Few Years Matter Most" />
            <StartupCulture />
            <WorkCulture />
            <WhyThisMatters />
            {/* <AiiAgentic /> */}
            {/* <AiiLineDraw /> */}
            {/* <AiiBestPractice /> */}
            {/* <AiiCaseStudy /> */}
            {/* <AiiBusinessImpact /> */}
            {/* <AiiLongContent /> */}
            <ButtonLink to="/contact" text="Request a Demo" center />
        </div>   
    </>
  );
}

export default BuildingInsight;
