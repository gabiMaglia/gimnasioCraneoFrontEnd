import React, { useState, useEffect } from "react";
import "./nosotros.css";
import openSpark from "./../../../assets/img/Fondos/header.png";
import axios from "axios";
import DocenteCard from "../../common/docente-card/DocenteCard";

const Nosotros = () => {
  const [loading, setLoading] = useState(false);
  const [docente, setDocente] = useState([]);

  useEffect(() => {
    const cargarDocentes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/docentes`
        );
        setDocente(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDocentes();
  }, []);

  return (
    <>
      <div className="separator">
        <img src={openSpark} alt="spark" className="redSpark" />
      </div>

      <section id="nosotros" className="nosotros section-container">
        <div className="someWords">
          <h1 className="hover-underline-animation-light">Nuestro TEAM</h1>
          <p className="text">
            Somos un grupo de jovenes de entusiastas del fitness, nos apasiona
            lo que hacemos y creamos un gimnasio donde podemos implementar una
            cultura fisica en donde transmitimos a nuestros clientes la
            importancia de mantenerse activos y realizar ejercicios para mejorar
            sus calidades de vida.
          </p>
        </div>

        {/* puedo volver dinamica una parte del JSX con curlis '{}', brackets... y de esa forma utilizar variables para rellenar los campos */}

        <div className="zonaStaff columns">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            docente.map((item) => (
              <DocenteCard
                key={item.id_docente}
                nombre={item.nombre + " " + item.apellido}
                titulo={item.titulo}
                foto={item.foto}
                instagram={item.instagramAdd}
                facebook={item.facebookAdd}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Nosotros;
