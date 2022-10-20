import React from 'react'

import Portada from "../../components/main/portada/Portada";
import Nosotros from "../../components/main/nosotros/Nosotros";
import Actividades from "../../components/main/actividades/Actividades";
import Contacto from "../../components/main/contacto/Contacto";
import Separador from '../../components/common/separador/Separador';
import Footer from '../../components/layout/footer/Footer';
import NavBar from '../../components/layout/nav/Nav';


const Main = () => {
  let log = false
  return (
    <div>
        <header>
          <NavBar tipo = {log}/>
          <Portada/>
        </header>
        <main>
          <Nosotros/>
          <Separador/>
          <Actividades/>
          <Separador/>
          <Contacto/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Main
