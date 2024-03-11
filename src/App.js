import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';
import PueblosMagicos from "./components/PueblosMagicos";
import EventosInternacionales from "./components/EventosInternacionales";
import Ecoturismo from "./components/Ecoturismo";
import Contacto from "./components/Contacto";
import LoginFormA from './components/LoginFormA';
import LoginFormR from "./components/LoginFormR";

function App() {
  return (
    <Routes>
      <Route path="/login-form-access" element={<LoginFormA/>}/>
      <Route path="/login-form-register" element={<LoginFormR/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/pueblos-magicos" element={<PueblosMagicos/>}/>
      <Route path="/eventos-internacionales" element={<EventosInternacionales/>}/>
      <Route path="/ecoturismo" element={<Ecoturismo/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
  );
}

export default App;
