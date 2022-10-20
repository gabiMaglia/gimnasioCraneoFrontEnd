import './App.css';

import 'aos/dist/aos.css';
import Rutas from './components/routes/Rutas';

import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  AOS.init()
  return (
   
    <Rutas></Rutas>
  
  );
};

export default App;
