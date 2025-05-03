import React from "react";
import CardPacote from "./CardPacote";
import CardPassagem from "./CardPassagem";
import CardHorizontal from "./CardHorizontal";
import "../css/style.css";
import FortalImg from "../imgs/fortaleza1.jpg";
import SalvadorImg from "../imgs/salvador.jpg";
import NatalImg from "../imgs/natal.jpeg";
import BrasiliaImg from "../imgs/brasilia.jpg";



function CardsDeViagem() {
  return (
    <div className="cards-container">
      <div className="section">
        <h2 className="section-title">Pacotes de Viagem</h2>
        <div className="cards-grid">
          <CardPacote 
            imagem={FortalImg}
            diasNoites="10 DIAS / 9 NOITES"
            titulo="Pacotes para Fortaleza"
            nota="7.6"
            origem="São Paulo"
            tipo="Hotel + Aéreo"
            preco="3.338"
          />
          
          <CardPacote 
            imagem={SalvadorImg}
            diasNoites="5 DIAS / 4 NOITES"
            titulo="Pacotes para Salvador"
            nota="8.5"
            origem="Brasília"
            tipo="Hotel + Aéreo + Passeios"
            preco="2.980"
          />
          <CardPacote 
            imagem={NatalImg}
            diasNoites="12 DIAS / 11 NOITES"
            titulo="Pacotes para Natal"
            nota="8.8"
            origem= "São Paulo"
            tipo="Hotel + Aéreo + Passeios"
            preco="1.708"
          />
          
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Passagens Aéreas</h2>
        <div className="cards-grid">
          <CardPassagem 
            imagem={FortalImg}
            titulo="Voos para Fortaleza"
            origem="São Paulo"
            companhia="Gol"
            tipo="Somente Ida"
            preco="829"
            pontos="14"
          />
          
          <CardPassagem 
            imagem={SalvadorImg}
            titulo="Voos para Salvador"
            origem="São Paulo"
            companhia="Latam"
            tipo="Somente Ida"
            preco="563"
            pontos="9"
          />
          
          <CardPassagem 
            imagem={BrasiliaImg}
            titulo="Voos para Brasília"
            origem="São Paulo"
            companhia="Azul"
            tipo="Ida e Volta"
            preco="512"
            pontos="8"
          />
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Atendimento Personalizado</h2>
        <div className="horizontal-card-container">
          <CardHorizontal 
            titulo="Compre sua viagem com assessoria personalizada"
            descricao="Nossos agentes especializados estão prontos para ajudar a concretizar sua viagem. Consulte nossos canais de atendimento!"
            botaoTexto="Acessar canais"
          />
          <CardHorizontal 
            titulo="Planeje sua viagem com Inteligência Artificial"
            descricao="Está pensando em viajar, mas não sabe por onde começar? Deixe que a SOFIA, nossa assistente de viagens com IA, te guie."
            botaoTexto="Conversar com a SOFIA"
          />
        </div>
      </div>
    </div>
  );
}

export default CardsDeViagem;