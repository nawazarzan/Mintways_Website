// Import all homepage sections
import "./Optimizing.css";
import CaseStudyHero from "../components/CaseStudyHero.jsx";
import OverviewCard from "../components/OverviewCard.jsx";
import ProblemSolutionCard from "../components/ProblemSolutionCard.jsx";
import BusinessImpact from "../components/BusinessImpact.jsx";

// ⭐ BUSINESS IMPACT DATA VIA PROPS (NO HARDCODE INSIDE COMPONENT)
const healthcareImpact = [
  {
    title: "Operational Efficiency",
    color: "#854CE7",
    items: [
      "50–60% faster trademark & patent processing through workflow automation ",
      "Drastic reduction in email/phone-based tasks",
      "End-to-end online filing reduced paperwork and manual entry",
      "Centralized platform improved team coordination and case handling speed"
    ]
  },
  {
    title: "Compliance & Process Accuracy",
    color: "#FF8A3C",
    items: [
      "100% digital documentation of all filings and submissions",
      "Automated validation reduced errors in forms and legal documents",
      "Audit-ready records with centralized secure storage",
      "Real-time compliance monitoring ensures every filing meets regulatory standards without manual oversight."
      
    ]
  },
  {
    title: "Client Experience & Transparency",
    color: "#23B2D6",
    items: [
      "Real-time application tracking improved visibility for clients",
      "Online filing & payments made the process faster and easier",
      "Automated notifications kept clients constantly updated",
      "Improved care continuity through complete visit history and AI insights"
    ]
  },
  {
    title: "Financial Performance",
    color: "#152B63",
    items: [
      "30–40% higher revenue throughput due to faster processing",
      "Faster payment cycles through integrated online payment gateway",
      "Reduced operational cost by eliminating manual admin efforts",
      "Higher case volume handled without hiring extra staff"
    ]
  }
];

function SuccessTransforming() {
  return (
    <div className="success-layout">

      {/* HERO */}
      <CaseStudyHero
        title="Optimizing Asset Visibility with Smart Tracking Solutions"
        subtitle="A real-world success story from our legal automation projects."
        imageSrc="/images/Automation.png"
      />

      {/* CLIENT OVERVIEW */}
      <OverviewCard
        image="/images/trade.png"
        title="Client Overview"
        description="KAFILING LLC — Florida-based law offering trademark, patent, & design registration services across USA, Europe, UK, and India."
      />

      {/* TWO CARDS SIDE BY SIDE */}
      <div className="two-col-layout">

        {/* LEFT CARD - PROBLEM */}
        <ProblemSolutionCard
          label="Client Problem"
          labelColor="#0B6B57"
          items={[
            {
              icon: "/images/Manuall.png",
              title: "Manual Registration Workflow",
              points: [
                "Phone & email-based processing",
                "Slow, inefficient, not scalable"
              ]
            },
            {
              icon: "/images/copy.png",
              title: "No Online Application Filing",
              points: ["All applications filed manually with paperwork"]
            },
            {
              icon: "/images/security.png",
              title: "Lack of Online Payments",
              points: [
                "No secure online payment options",
              ]
            },
            {
              icon: "/images/nottracking.png",
              title: "No Application Tracking",
              points: [
                "No real-time status updates for clients",
              ]
            }
          ]}
        />

        {/* RIGHT CARD - SOLUTIONS */}
        <ProblemSolutionCard
          label="Our Solution"
          labelColor="#007BFF"
          items={[
            {
              icon: "/images/insurance.png",
              title: "Cloud-Based Automated Platform",
              points: [
                "Online registration & filing",
                "Secure online payments"
              ]
            },
            {
              icon: "/images/ai.png",
              title: "Real-Time Application Tracking",
              points: [
                "Applicants receive live status updates"
              ]
            },
            {
              icon: "/images/daily.png",
              title: "Secure Online Payments",
              points: [
                "Integrated payment options for applicants"
              ]
            },
            {
              icon: "/images/after.png",
              title: "Workflow-Driven Admin Processing",
              points: [
                "Automated admin tasks & country-wise reports"
              ]
            }
          ]}
        />

      </div>

      {/* ⭐ BUSINESS IMPACT SECTION (NOW PROPS-DRIVEN & REUSABLE) */}
      <BusinessImpact
        title="Business Impact"
        categories={healthcareImpact}
      />

    </div>
  );
}

export default SuccessTransforming;
