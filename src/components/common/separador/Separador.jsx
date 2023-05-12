import React from "react";
import openSpark from "./../../../assets/img/Fondos/footer.png";
import closeSpark from "./../../../assets/img/Fondos/header.png";
import "./separador.css";

const Separador = () => {
  return (
    <div className="separador">
      <img src={closeSpark} alt="spark" className="redSpark top" />
      <img src={openSpark} alt="spark" className="redSpark bottom" />
    </div>
  );
};

export default Separador;
