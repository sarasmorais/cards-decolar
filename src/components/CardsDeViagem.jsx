import React from "react";
import CardPacote from "./CardPacote";
import CardPassagem from "./CardPassagem";
import CardHorizontal from "./CardHorizontal";
import "../css/style.css";

function CardsDeViagem() {
  return (
    <div className="cards-container">
      <div className="section">
        <h2 className="section-title">Pacotes de Viagem</h2>
        <div className="cards-grid">
          <CardPacote />
          <CardPacote />
          <CardPacote />
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Passagens Aéreas</h2>
        <div className="cards-grid">
          <CardPassagem />
          <CardPassagem />
          <CardPassagem />
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Atendimento Personalizado</h2>
        <div className="horizontal-card-container">
          <CardHorizontal />
          <CardHorizontal />
        </div>
      </div>
    </div>
  );
}

export default CardsDeViagem;