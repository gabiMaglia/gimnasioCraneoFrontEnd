import React from 'react'
import NavBar from '../../components/layout/nav/Nav'
import PerfilPersonal from '../../components/_user/perfil-personal/PerfilPersonal'
import Header from "../../components/_user/header/Header";

const userPanel = () => {
  let log = true

  return (
    <div>
        <NavBar tipo = {log}/>
        <PerfilPersonal/>
        <Header/>
       
    </div>
  )
}

export default userPanel