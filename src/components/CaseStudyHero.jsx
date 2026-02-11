
import "./CaseStudyHero.css";

function CaseStudyHero({ title, subtitle, imageSrc }) {
  return (
    <section className="case-hero">
      <div className="case-card">
        <div className="case-content">
          <h1 className="case-title">{title}</h1>

          <p className="case-subtitle">{subtitle}</p>

          <img
            src={imageSrc}
            alt="Healthcare"
            className="case-hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyHero;

