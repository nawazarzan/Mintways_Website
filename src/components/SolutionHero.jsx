import "./SolutionHero.css";
import Brain from "../assets/Brain.png";
import { Link } from "react-router-dom";

export default function SolutionHero() {
    console.log("SOLUTION HERO MOUNTED");
  return (
    <section className="solution-hero">
      <div className="solution-container">

        {/* LEFT CONTENT */}
        <div className="solution-content">
          <span className="solution-badge">Artificial Intelligence</span>

          <h1>
            Transforming <br />
            Business with <br />
            Intelligent Solutions
          </h1>

          <p>
            Unlock new possibilities by integrating AI into your existing
            software infrastructure or building custom intelligent systems
            from the ground up.
          </p>

          <div className="solution-buttons">
            <Link to="/services" className="btn-primary">Explore Solutions</Link>
            <Link to="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="solution-image">
          <img src={Brain} alt="Brain" />
        </div>

      </div>
    </section>
  );
}
console.log("SOLUTION HERO MOUNTED");
