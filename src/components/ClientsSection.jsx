import React from "react";
import "./Clients.css";

function ClientsSection() {
  const clients = [
    "/icons/linvest21.png",
    "/icons/KA.png",
    "/icons/birla.png",
    "/icons/AI Global.png",
    "/icons/alchemoil.png",
    "/icons/careclinic.png",
    "/icons/tt.png",
    "/icons/coastal.png",
    "/icons/kaglobal.png",
    "/icons/truglobal.png"
  ];

  return (
    <div className="clients-wrapper">
      <div className="clients-container">
        
        <h2>Globally trusted by enterprises, SMEs, and tech companies</h2>

        <div className="logos-grid">
          {clients.map((logo, idx) => (
            <div className="logo-card" key={idx}>
              <img src={logo} alt="client logo" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ClientsSection;
