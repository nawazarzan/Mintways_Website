import "./HeroSectionInd.css";

function HeroSection() {
  return (
    <section className="hero-wrapper">
      
      {/* HEADING */}
      <h1 className="hero-title">
        HEALTHCARE IT SYSTEMS, <br />
        SERVICE AND CONSULTING
      </h1>

      {/* IMAGE BOX with gradient border */}
      <div className="hero-box">
        <img
          src="/images/docttor.png"
          alt="AI Robot Healthcare"
          className="hero-main-image"
        />
      </div>

    </section>
    
    
  );
}

export default HeroSection;
 