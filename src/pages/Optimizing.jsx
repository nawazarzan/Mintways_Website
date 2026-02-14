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
      "60–70% faster shipment processing with real-time tracking",
      "Automated asset intake drastically reduced manual entry",
      "Centralized dashboard boosted team coordination",
      "Faster condition-based bid evaluation accelerated workflow"
    ]
  },
  {
    title: "Compliance & Process Accuracy",
    color: "#FF8A3C",
    items: [
      "100% digital asset documentation with photos & barcodes",
      "Automated defect & condition scoring reduced audit errors",
      "Standardized asset intake improved data consistency",
      "Secure centralized storage ensured audit-ready records"
    ]
  },
  {
    title: "Client Experience & Transparency",
    color: "#23B2D6",
    items: [
      "Live shipment visibility improved trust & communication",
      "Automated status updates kept stakeholders informed",
      "Clear documentation reduced back-and-forth approvals",
      "Photo-based defect reporting increased transparency"
    ]
  },
  {
    title: "Financial Performance",
    color: "#152B63",
    items: [
      "Faster evaluation cycles improved resale turnaround",
      "Automated processes reduced operational cost significantly",
      "Higher shipment accuracy minimized financial losses",
      "Improved bid pricing consistency increased profitability"
    ]
  }
];

function Optimizing() {
  return (
    <div className="success-layout">

      {/* HERO */}
      <CaseStudyHero
        title="Optimizing Asset Visibility with Smart Tracking Solutions"
        subtitle="A real-world success story from our legal automation projects."
        imageSrc="/images/streamm.png"
      />

      {/* CLIENT OVERVIEW */}
      <OverviewCard
        image="/images/client1.png"
        title="Client Overview"
        description="A global e-waste refurbishment company operating in 13 countries, specializing in refurbishing and recycling corporate electronic assets to drive sustainability."
      />

      {/* TWO CARDS SIDE BY SIDE */}
      <div className="two-col-layout">

        {/* LEFT CARD - PROBLEM */}
        <ProblemSolutionCard
          label="Client Problem"
          labelColor="#0B6B57"
          items={[
            {
              icon: "/images/shipment.png",
              title: "Lack of Shipment Visibility",
              points: [
                "Shipments tracked manually",
                "Delays in knowing shipment status",
              ]
            },
            {
              icon: "/images/asset.png",
              title: "Inefficient Asset Registration",
              points: ["Led to claim rejections & delays",
                "Manual entry caused errors",
              ]
            },
            {
              icon: "/images/documentation.png",
              title: "Inaccurate Documentation",
              points: [
                "Barcode & serial number mismatches",
                "Photos missing during inspections",
              ]
            },
            {
              icon: "/images/pricing.png",
              title: "Slow Pricing & Evaluation",
              points: [
                "Bid price calculation was manual",
                "Inconsistent pricing between branches",
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
              icon: "/images/real.png",
              title: "Real-Time Shipment Tracking",
              points: [
                "GPS-based multi-location tracking",
                "Live shipment status updates",
              ]
            },
            {
              icon: "/images/smart.png",
              title: "Smart Asset Registration System",
              points: [
                "Barcode scanning for instant entry",
                "Auto-capture of condition & defect images",
              ]
            },
            {
              icon: "/images/centralized.png",
              title: "Centralized Documentation Hub",
              points: [
                "All asset data stored in one platform",
                "Photos + barcode + metadata linked automatically",
              ]
            },
            {
              icon: "/images/automated.png",
              title: "Automated Bid Price Evaluation",
              points: [
                "AI-based condition scoring",
                "Auto-calculated bid price suggestions",
              ]
            },
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

export default Optimizing;
