import React from "react";
import "./BusinessImpact.css";

function BusinessImpact({ title, categories }) {
  if (!categories || categories.length === 0) return null;

  // Rows count = maximum items in any category
  const maxRows = Math.max(...categories.map(cat => cat.items.length));

  return (
    <section className="bi-section">
      <div className="bi-wrapper">

        {/* Title */}
        {title && <h2 className="bi-title">{title}</h2>}

        {/* Header Tabs */}
        <div className="bi-header-row">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bi-header-card"
              style={{ backgroundColor: cat.color }}
            >
              {cat.title}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="bi-body">
          {Array.from({ length: maxRows }).map((_, rowIndex) => (
            <div className="bi-row" key={rowIndex}>
              {categories.map((cat, colIndex) => (
                <div className="bi-cell" key={colIndex}>
                  <p>{cat.items[rowIndex] || ""}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BusinessImpact;
