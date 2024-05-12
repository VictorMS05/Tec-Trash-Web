// import './App.css';
import './css/cliente.css';
import './css/empleado.css';
import './css/empresa.css';
import './css/general.css';
import './css/login.css';
import './css/pagina_principal.css';
import './css/registro.css';
import { useState } from 'react'; // Se importa useState para poder usar estados
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Cliente } from './components/cliente';
import { Empleado } from './components/empleado';
import { Empresa } from './components/empresa';
import { Login } from './components/login';
import { Principal } from './components/principal';
import { Registro } from './components/registro';

function App() { // Este es el componente principal de la aplicación
  const [estaAutenticadoCliente, setEstaAutenticadoCliente] = useState(false); // Se define un estado para saber si el cliente está autenticado
  const [estaAutenticadoEmpleado, setEstaAutenticadoEmpleado] = useState(true);
  const [estaAutenticadoEmpresa, setEstaAutenticadoEmpresa] = useState(false);
  const [idCliente, setIdCliente] = useState(0); // Se define un estado para guardar el id del cliente
  const [idEmpleado, setIdEmpleado] = useState('PEMJ031122H89');
  const [idEmpresa, setIdEmpresa] = useState('');

  function manejarLoginCliente() { // Función para manejar el inicio de sesión del cliente
    setEstaAutenticadoCliente(!estaAutenticadoCliente); // Se cambia el estado de autenticado del cliente
  }

  function manejarLoginEmpleado() {
    setEstaAutenticadoEmpleado(!estaAutenticadoEmpleado);
  }

  function manejarLoginEmpresa() {
    setEstaAutenticadoEmpresa(!estaAutenticadoEmpresa);
  }

  function manejarIdCliente(id) { // Función para manejar el id del cliente
    setIdCliente(id); // Se guarda el id del cliente
  }

  function manejarIdEmpleado(id) {
    setIdEmpleado(id);
  }

  function manejarIdEmpresa(id) {
    setIdEmpresa(id);
  }

  return ( // Se regresa un JSX
    <Router> {/* Se envuelve todo en un Router para poder usar rutas */}
      {/* Se usa un Routes para que solo se renderice una a la vez dependiendo la ruta actual*/}
      <Routes>
        {/* Se define la ruta de la página principal y se renderiza*/}
        <Route path="/" element={<Principal />} />
        <Route path="/login_cliente" element={<Login asignarId={manejarIdCliente} estaAutenticado={manejarLoginCliente} />} />
        <Route path="/registro_cliente" element={<Registro />} />
        {/* Se define la ruta del cliente y se renderiza si está autenticado, si no se redirige al login del cliente */}
        <Route path="/cliente" element={estaAutenticadoCliente ? 
          <Cliente id={idCliente} /> 
          : 
          <Navigate to='/login_cliente' replace/>
        } />
        <Route path="/login_empleado" element={<Login asignarId={manejarIdEmpleado} estaAutenticado={manejarLoginEmpleado} />} />
        <Route path="/registro_empleado" element={estaAutenticadoEmpleado ? 
          <Registro /> 
          : 
          <Navigate to='/login_empleado' replace/>
        } />
        <Route path="/empleado" element={estaAutenticadoEmpleado ? 
          <Empleado id={idEmpleado} /> 
          : 
          <Navigate to='/login_empleado' replace/>
        } />
        <Route path="/login_empresa" element={<Login asignarId={manejarIdEmpresa} estaAutenticado={manejarLoginEmpresa} />} />
        <Route path="/registro_empresa" element={<Registro />} />
        <Route path="/empresa" element={estaAutenticadoEmpresa ? 
          <Empresa id={idEmpresa} /> 
          : 
          <Navigate to='/login_empresa' replace/>
        } />
      </Routes>
    </Router>
  );
}

export default App;
