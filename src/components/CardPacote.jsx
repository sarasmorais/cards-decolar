import React from "react";

function CardHorizontal({ titulo, descricao, botaoTexto }) {
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
          <h2 className="horizontal-title">{titulo}</h2>
          <p className="horizontal-description">{descricao}</p>
          <button className="access-button">{botaoTexto}</button>
        </div>
      </div>
    </div>
  );
}

export default CardHorizontal;