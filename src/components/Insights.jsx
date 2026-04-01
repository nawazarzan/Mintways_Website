import "./Insights.css";

const insightsData = [
  {
    title: "Agentic AI in Healthcare diagnosis! Where to draw the line?",
    img: "/images/Linked1.png",
    link: "https://www.linkedin.com/pulse/agentic-ai-healthcare-diagnosis-where-hdahc/",
  },
  {
    title: "Building a Strong Work Culture in Startups: The First Few Years Matter Most",
    img: "/images/Building.png",
    link: "https://www.linkedin.com/pulse/building-strong-work-culture-startups-bn6vc/?trackingId=8CXIm%2BskUZwpfuqQF5Vqiw%3D%3D",
  },
  {
    title: "Innovations and Technological Expertise in Healthcare",
    img: "/images/Innovations.jpg",
    link: "https://www.linkedin.com/pulse/innovations-technological-expertise-t5idc/?trackingId=XnHA3CQB0hNjAjAIQdsmIg%3D%3D",
  },
  {
    title: "Future of software development in the LowCode NoCode paradigm",
    img: "/images/Future.png",
    link: "https://www.linkedin.com/pulse/future-software-development-lowcode-ldwpc/?trackingId=4aL4kexZHGvKV5VgD%2Fjg%2Bw%3D%3D",
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
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="insight-link"
            >
              <div className="insight-image">
                <img src={item.img} alt={item.title} />
              </div>
            </a>

            {/* TEXT */}
            <div className="insight-content">

              {/* TITLE CLICKABLE */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="insight-link"
              >
                <h3>{item.title}</h3>
              </a>

              {/* BUTTON CLICKABLE */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Explore</button>
              </a>

            </div>

          </div>
        ))}
      </section>
    </>
  );
}

export default Insights;