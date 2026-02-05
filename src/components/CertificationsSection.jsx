import "./CertificationsSection.css";

function CertificationsSection() {
  return (
    <section className="cert-section">

      {/* ---- Certification Cards ---- */}
      <div className="cert-cards">

        <div className="cert-card">
          <img src="/icons/ISO.png" alt="ISO Certified" />
        </div>

        <div className="cert-card">
          <img className="cert-img2" src="/icons/EGAC.png" alt="EGAC" />
        </div>

        <div className="cert-card">
          <img className="cert-img" src="/icons/startup.png" alt="Startup India" />
        </div>

        <div className="cert-card">
          <img className="cert-img1" src="/icons/pyramid.png" alt="PYRAMID" />
        </div>

      </div>

      {/* ---- 8 Flags ---- */}
      <div className="flags-row">
        <img src="/icons/Australia.svg.png" alt="Australia" />
        <img src="/icons/China flag.png" alt="China" />
        <img src="/icons/Indian flag.png" alt="India" />
        <img src="/icons/Malaysia.svg.png" alt="Malaysia" />
        <img src="/icons/New_Zealand.png" alt="New Zealand" />
        <img src="/icons/south.png" alt="South Korea" />
        <img src="/icons/United_Arab.png" alt="UAE" />
        <img src="/icons/United_States.svg.webp" alt="USA" />
      </div>

    </section>
  );
}

export default CertificationsSection;
