import React from "react";

function CardPassagem({ 
  imagem, 
  titulo, 
  origem, 
  companhia, 
  tipo, 
  preco, 
  pontos 
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imagem || "/placeholder.svg"} alt={titulo} />
      </div>
      <div className="card-content">
        <p className="pre-titulo">PASSAGEM</p>
        <h2 className="card-title">{titulo}</h2>
        <p className="card-description">Saindo de {origem}</p>
        <p className="card-description">Por {companhia}</p>
        <div className="tag">{tipo}</div>
        <div className="card-separator" />
        <p className="preco-label">Preço ida e volta</p>
        <div className="preco">
          <span className="moeda">R$</span>
          <span className="valor">{preco}</span>
        </div>
        <div className="passaporte">
          <div className="passaporte-icon">
            <div className="icon-box" />
          </div>
          <div className="passaporte-text">
            <p>Passaporte Decolar</p>
            <p>
              Você acumularia <strong>{pontos} pontos</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CardPassagem;