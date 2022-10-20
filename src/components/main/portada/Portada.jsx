import React from 'react'
import Separador from '../../common/separador/Separador'
import craneoLogo from "../../..//assets/img/Logos/Craneo_inicio.png";
import './portada.css'
import Frases from '../frases/Frases';

const Portada = () => {
  return (
    <section id='homepage'>
    
      <div className="homePage">
        <img src={craneoLogo} alt="Craneo" className="mainLogo"></img>
      </div>

      <Separador/>
      
      <Frases/>

    </section>
  )
}

export default Portada