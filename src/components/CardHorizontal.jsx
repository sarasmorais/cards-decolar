import React from "react";

function CardHorizontal() {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-content">
        <div className="icon-container">
          <div className="icon-circle">
            <div className="atendente-icon" />
          </div>
          <div className="icon-decoration" />
        </div>
        <div className="text-content">
          <h2 className="horizontal-title">
            Compre sua viagem
            <br />
            com assessoria personalizada
          </h2>
          <p className="horizontal-description">
            Nossos agentes especializados estão prontos para ajudar a
            concretizar sua viagem. Consulte nossos canais de atendimento!
          </p>
          <button className="access-button">Acessar canais</button>
        </div>
      </div>
    </div>
  );
}

export default CardHorizontal;