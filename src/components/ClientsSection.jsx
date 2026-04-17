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

  //  OFFSET (shift by 3)
  const offsetClients = [
    ...clients.slice(3),
    ...clients.slice(0, 3)
  ];

  return (
    <div className="clients-wrapper">
      <div className="clients-container">
        
        <h2>Globally Trusted by Enterprises, SMEs & Tech Companies</h2>

        <div className="slider">

          {/* ROW 1 (normal) */}
          <div className="slide-track">
            {clients.concat(clients).map((logo, idx) => (
              <div className="logo-card" key={"row1-" + idx}>
                <img src={logo} alt="client logo" />
              </div>
            ))}
          </div>

          {/* ROW 2 (offset) */}
          <div className="slide-track reverse">
            {offsetClients.concat(offsetClients).map((logo, idx) => (
              <div className="logo-card" key={"row2-" + idx}>
                <img src={logo} alt="client logo" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default ClientsSection;