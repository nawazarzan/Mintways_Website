// FILE: ProblemSolutionCard.jsx

import "./ProblemSolutionCard.css";

function ProblemSolutionCard({ label, labelColor, items }) {
  return (
    <div className="ps-card">
      {/* Top Label */}
      <div className="ps-card-label" style={{ backgroundColor: labelColor }}>
        {label}
      </div>

      {/* Items */}
      <div className="ps-card-body">
        {items.map((item, index) => (
          <div key={index} className="ps-item">
            <img src={item.icon} className="ps-icon" />

            <div>
              <h3 className="ps-title">{item.title}</h3>
              <ul className="ps-list">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemSolutionCard;
