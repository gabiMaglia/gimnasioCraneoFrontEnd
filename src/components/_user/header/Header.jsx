import React from 'react'
import './header.css'
import cranito from './../../../assets/img/Logos/Craneo_inicio.png'

const Header = () => {
  return (
    <div>
        <div id="header">
          <img className='cranito' src={cranito} alt="logo" />
        </div>
    </div>
  )
}

export default Header
