import React from "react";
import "./docente-card.css";
const docenteCard = (props) => {
  const { nombre, apellido, titulo, foto, facebook, instagram } = props;

  return (
    <div className="card-cont">
      <figure className="card">
        <div className="title">
          <div className="text">
            <h2>
              {nombre} {apellido}
            </h2>
            <p>{titulo}</p>
          </div>
        </div>
        
        <div className="picCont">
          <img src={foto} alt={apellido} className="picture" />
        </div>

        <div className="socialStuff">
          <a
            href={"http://www.facebook.com/" + facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-facebook"></i>
          </a>
          <a
            href={"http://www.instagram.com/" + instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-instagram"></i>
          </a>
        </div>
      </figure>
    </div>
  );
};

export default docenteCard;
