import React from 'react'
import openSpark from "./../../../assets/img/Fondos/footer.png";
import closeSpark from "./../../../assets/img/Fondos/header.png";
import './separador.css'

const Separador = () => {
  return (
      <div className='container-flex'>
        <img src={closeSpark} alt="spark" className="redSpark" />

        <div className="separador">
        </div>

       <img src={openSpark} alt="spark" className="redSpark" />
    </div>
  )
}

export default Separador