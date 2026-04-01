import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <video
        src="/videos/mint1.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "500px" }}
      />
    </section>
  );
}

export default Hero;