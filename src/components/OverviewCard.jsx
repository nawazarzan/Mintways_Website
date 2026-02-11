import "./OverviewCard.css";

function OverviewCard({ image, title, description }) {
  return (
    <section className="overview-container">
      <div className="overview-wrapper">

        <img
          src={image}
          alt="icon"
          className="overview-avatar"
        />

        <div className="overview-text-block">
          <h2 className="overview-title">{title}</h2>
          <p className="overview-description">{description}</p>
        </div>

      </div>
    </section>
  );
}

export default OverviewCard;
