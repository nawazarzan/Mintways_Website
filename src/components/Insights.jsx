import "./Insights.css";
import { Link } from "react-router-dom";

const insightsData = [
  {
    title: "Agentic AI in Healthcare diagnosis! Where to draw the line?",
    img: "/images/Healthcare blog 1.jpg",
    link: "/agentic-healthcare",
  },
  {
    title: "Building a Strong Work Culture in Startups: The First Few Years Matter Most",
    img: "/images/Building.png",
    link: "/building-insight",
  },
  {
    title: "Innovations and Technological Expertise in Healthcare",
    img: "/images/AdobeStock_482955950.jpg",
    link: "/innovation-technology",
  },
  {
    title: "Future of software development in the LowCode NoCode paradigm",
    img: "/images/Future.png",
    link: "/future-software",
  },
];

function Insights() {
  return (
    <>
      {/* HERO */}
      <section className="insights-hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>INSIGHTS</h1>
            <p>
              Explore our Customer Stories, Resource Center, and AI Insights to
              discover how we create real business value.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="insights">
        {insightsData.map((item, index) => (
          <div className="insight-card" key={index}>
            
            {/* IMAGE CLICKABLE */}
            <Link to={item.link} className="insight-link">
              <div className="insight-image">
                <img src={item.img} alt={item.title} />
              </div>
            </Link>

            {/* TEXT */}
            <div className="insight-content">

              {/* TITLE CLICKABLE */}
              <Link to={item.link} className="insight-link">
                <h3>{item.title}</h3>
              </Link>

              {/* BUTTON CLICKABLE */}
              <Link to={item.link}>
                <button>Explore</button>
              </Link>

            </div>

          </div>
        ))}
      </section>
    </>
  );
}

export default Insights;