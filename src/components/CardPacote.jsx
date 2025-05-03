import React from "react";

function CardPacote() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="#"
          alt="Praia em Maceió"
        />
        <span className="dias-noites">29 DIAS / 28 NOITES</span>
      </div>
      <div className="card-content">
        <p className="pre-titulo">PACOTE</p>
        <h2 className="card-title">Pacotes para Maceió</h2>
        <div className="rating">
          <span className="nota">8.8</span>
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="empty-star">★</span>
            <span className="empty-star">★</span>
          </div>
        </div>
        <p className="card-description">Saindo de São Paulo</p>
        <p className="card-description">Hotel + Aéreo</p>
        <div className="card-separator" />
        <p className="preco-label">Preço por pessoa</p>
        <div className="preco">
          <span className="moeda">R$</span>
          <span className="valor">4.706</span>
        </div>
        <p className="taxas">Taxas e impostos não inclusos</p>
      </div>
    </div>
  );
}

export default CardPacote;