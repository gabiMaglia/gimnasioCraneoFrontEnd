import React from 'react'

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


import Main from "../../pages/main-app/Main";
import Error404 from "../../pages/error404/Error404";
import UserPanel from '../../pages/userPanel/UserPanel';




const Rutas = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path='/user_panel' element = {<UserPanel/>} />
      <Route exact path="/*" element={<Error404 />} />


    </Routes>
  </Router>  
  )
}

export default Rutas