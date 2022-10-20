import React from "react";
import "./perfil-personal.css";
import craneo from "./../../../assets/img/Logos/craneo_white.png";
const PerfilPersonal = () => {
  return (
    <div id="perfilPersonal" className="user-container row g-0 ">
      <div className="personal col-xl-2 bg-black">
        <div className="img-cont">
          <img className="img-thumbnail" src={craneo} alt="profilePic " />
        </div>

        <div className="data-cont">
          <h2 className="mt-4">Nombre y apellido</h2>
          <ul className="data-list mt-5">
            <li>Edad</li>
            <li>Telefono</li>
            <li>Direccion</li>
            <li>Miembro desde</li>
          </ul>
        </div>

        <button className="button btn btn-black">Modificar Datos</button>
      </div>

      <div className="rutina col-xl-9 bg-black">
        <h2>Rutina</h2>  
        <div className="rutina-cont">
          <table class="table-dark">
            <thead>
              <tr>
                <th scope="col">Ejercicio</th>
                <th scope="col">RM</th>
                <th scope="col">Series</th>
                <th scope="col">Repeticiones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Press de banco</th>
                <td>80kg</td>
                  <td>
                    <td>75%</td>
                    <td>80%</td>
                    <td>85%</td>
                    <td>90%</td>        
                  </td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Sentadillas</th>
                <td>100kg</td>
                <td>
                    <td>75%</td>
                    <td>80%</td>
                    <td>85%</td>
                    <td>90%</td>        
                  </td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Peso Muerto</th>
                <td>140kg</td>
                <td>
                    <td>75%</td>
                    <td>80%</td>
                    <td>85%</td>
                    <td>90%</td>        
                  </td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="algo col-xl-1 bg-black"></div>
    </div>
  );
};

export default PerfilPersonal;
