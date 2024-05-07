import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';
import { Principal } from './components/principal';
import { Cliente } from './components/cliente';
import { Empleado } from './components/empleado';
import { Empresa } from './components/empresa';

function App() { // Este es el componente principal de la aplicación
  return ( // Se regresa un JSX
    <Router> {/* Se envuelve todo en un Router para poder usar rutas */}
      {/* Se usa un Routes para que solo se renderice una a la vez dependiendo la ruta actual*/}
      <Routes>
        {/* Se define la ruta de la página principal y se renderiza*/}
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/empleado" element={<Empleado />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </Router>
  );
}

export default App;
