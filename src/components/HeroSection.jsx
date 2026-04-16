import "./Hero.css";

function Hero() {
  return (
    <div className="hero-video">
      <video autoPlay muted loop playsInline>
        <source src="/videos/mint1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;