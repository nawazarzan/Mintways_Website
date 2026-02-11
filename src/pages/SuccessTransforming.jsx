// Import all homepage sections
import "./SuccessTransforming.css";
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
      "30–45% reduction in administrative workload through automation of billing, scheduling, & records ",
      "40% faster appointment scheduling with online booking and AI-assisted workflows",
      "25% decrease in patient registration and onboarding time",
      "99% system uptime, ensuring uninterrupted clinical operations"
    ]
  },
  {
    title: "Compliance & SOP Adherence",
    color: "#FF8A3C",
    items: [
      "100% digital documentation of patient records and visit history",
      "35% improvement in compliance with clinical and operational SOPs",
      "Zero manual prescription errors through AI-assisted prescription generation",
      "Improved audit readiness with automated process tracking"
    ]
  },
  {
    title: "Patient Experience",
    color: "#23B2D6",
    items: [
      "20-300% increase in patient satisfaction scores",
      "35% reduction in average patient wait time",
      "15–20% improvement in follow-up visit adherence due to automated reminders",
      "Improved care continuity through complete visit history and AI insights"
    ]
  },
  {
    title: "Financial Performance",
    color: "#152B63",
    items: [
      "20% improvement in billing accuracy",
      "15–25% faster payment cycles",
      "Reduction in revenue leakage due to automated invoicing and reconciliation",
      "Higher patient throughput without increasing staff count"
    ]
  }
];

function SuccessTransforming() {
  return (
    <div className="success-layout">

      {/* HERO */}
      <CaseStudyHero
        title="Transforming Healthcare Operations Through Digital Efficiency"
        subtitle="A real-world success story from our healthcare transformation projects"
        imageSrc="/images/ReadMore.png"
      />

      {/* CLIENT OVERVIEW */}
      <OverviewCard
        image="/images/healthcare.png"
        title="Client Overview"
        description="A distinguished medical practitioner specializing in mental health and therapeutic care, based in Virginia, USA. The organization operates multiple clinics across the United States, providing secure teleconferencing and in-person services."
      />

      {/* TWO CARDS SIDE BY SIDE */}
      <div className="two-col-layout">

        {/* LEFT CARD - PROBLEM */}
        <ProblemSolutionCard
          label="Client Problem"
          labelColor="#0B6B57"
          items={[
            {
              icon: "/images/admin.png",
              title: "Administrative Overload",
              points: [
                "Claim submission slow & manual",
                "Manual after-visit summaries took time"
              ]
            },
            {
              icon: "/images/errors.png",
              title: "Errors in documentation",
              points: ["Led to claim rejections & delays"]
            },
            {
              icon: "/images/compilance.png",
              title: "Compliance & Monitoring",
              points: [
                "Challenging to maintain strict healthcare standards",
                "No real-time visibility into provider processes"
              ]
            },
            {
              icon: "/images/doctoroverload.png",
              title: "Doctor Overload",
              points: [
                "Doctors spent too much time on admin tasks",
                "Less time remained for patient care"
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
              title: "Insurance Claims Automation",
              points: [
                "Automated claim submission",
                "Reduces errors & speeds up reimbursement"
              ]
            },
            {
              icon: "/images/ai.png",
              title: "AI-Driven Documentation",
              points: [
                "AI auto-generates notes & insurance codes from conversations"
              ]
            },
            {
              icon: "/images/daily.png",
              title: "Daily Reporting Heatmap",
              points: [
                "Real-time compliance tracking & performance monitoring"
              ]
            },
            {
              icon: "/images/after.png",
              title: "After-Visit Summary System",
              points: [
                "Instant AI-generated visit summaries — saves doctors time"
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
