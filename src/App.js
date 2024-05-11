// import './App.css';
import './css/cliente.css';
import './css/empleado.css';
import './css/empresa.css';
import './css/general.css';
import './css/login.css';
import './css/pagina_principal.css';
import './css/registro.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cliente } from './components/cliente';
import { Empleado } from './components/empleado';
import { Empresa } from './components/empresa';
import { Login } from './components/login';
import { Principal } from './components/principal';
import { Registro } from './components/registro';

function App() { // Este es el componente principal de la aplicación
  return ( // Se regresa un JSX
    <Router> {/* Se envuelve todo en un Router para poder usar rutas */}
      {/* Se usa un Routes para que solo se renderice una a la vez dependiendo la ruta actual*/}
      <Routes>
        {/* Se define la ruta de la página principal y se renderiza*/}
        <Route path="/" element={<Principal />} />
        <Route path="/login_cliente" element={<Login />} />
        <Route path="/registro_cliente" element={<Registro />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/empleado" element={<Empleado />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </Router>
  );
}

export default App;
