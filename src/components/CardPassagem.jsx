import React from "react";

function CardPassagem() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="imgs/turismo-no-rio-de-janeiro-veja-o-que-visitar-na-cidade-maravilhosa.jpg"
          alt="Vista do Rio de Janeiro"
        />
      </div>
      <div className="card-content">
        <p className="pre-titulo">PASSAGEM</p>
        <h2 className="card-title">Voos para Rio de Janeiro</h2>
        <p className="card-description">Saindo de São Paulo</p>
        <p className="card-description">Por Gol</p>
        <div className="tag">Ida e Volta</div>
        <div className="card-separator" />
        <p className="preco-label">Preço ida e volta</p>
        <div className="preco">
          <span className="moeda">R$</span>
          <span className="valor">334</span>
        </div>
        <div className="passaporte">
          <div className="passaporte-icon">
            <div className="icon-box" />
          </div>
          <div className="passaporte-text">
            <p>Passaporte Decolar</p>
            <p>
              Você acumularia <strong>5 pontos</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPassagem;