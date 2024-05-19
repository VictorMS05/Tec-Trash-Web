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
import { Inicio } from './components/empleado/inicio';
import { Recoleccion } from './components/empleado/recoleccion';
import { Inventario } from './components/empleado/inventario';
import { Entrega } from './components/empleado/entrega';
import { Historial } from './components/empleado/historial';
import { Informes } from './components/empleado/informes';

function App() { // Este es el componente principal de la aplicación
  const [estaAutenticadoCliente, setEstaAutenticadoCliente] = useState(false); // Se define un estado para saber si el cliente está autenticado
  const [estaAutenticadoEmpleado, setEstaAutenticadoEmpleado] = useState(true);
  const [estaAutenticadoEmpresa, setEstaAutenticadoEmpresa] = useState(false);
  const [idCliente, setIdCliente] = useState(0); // Se define un estado para guardar el id del cliente
  const [idEmpleado, setIdEmpleado] = useState('MASV021105H42');
  const [idEmpresa, setIdEmpresa] = useState('');

  return ( // Se regresa un JSX
    <Router> {/* Se envuelve todo en un Router para poder usar rutas */}
      {/* Se usa un Routes para que solo se renderice una a la vez dependiendo la ruta actual*/}
      <Routes>
        {/* <------------------------- PÁGINA PRINCIPAL -------------------------> */}
        {/* Se define la ruta de la página principal y se renderiza*/}
        <Route path="/" element={<Principal />} />
        {/* <------------------------- CLIENTE -------------------------> */}
        <Route path="/login_cliente" element={<Login asignarId={setIdCliente} estaAutenticado={setEstaAutenticadoCliente} />} />
        <Route path="/registro_cliente" element={<Registro />} />
        {/* Se define la ruta del cliente y se renderiza si está autenticado, si no se redirige al login del cliente. Además, se define como una ruta principal que contendra subrutas para la navegación en el menú */}
        <Route path="/cliente" element={estaAutenticadoCliente ? 
          <Cliente id={idCliente} /> 
          : 
          <Navigate to='/login_cliente' replace/>
        } >
          {/* Se define la ruta principal del cliente y se renderiza */}
          <Route index element={<Inicio />} />
          {/* Se define una subruta del cliente y se renderiza */}
          <Route path="define_una_ruta_Fer" element={<h1>Y aqui pon el componente correspondiente</h1>} />
        </Route>
        {/* <------------------------- EMPLEADO -------------------------> */}
        <Route path="/login_empleado" element={<Login asignarId={setIdEmpleado} estaAutenticado={setEstaAutenticadoEmpleado} />} />
        <Route path="/registro_empleado" element={estaAutenticadoEmpleado ? 
          <Registro /> 
          : 
          <Navigate to='/login_empleado' replace/>
        } />
        <Route path="/empleado" element={estaAutenticadoEmpleado ? 
          <Empleado id={idEmpleado} /> 
          : 
          <Navigate to='/login_empleado' replace/>
        } >
          <Route index element={<Inicio id={idEmpleado} />} />
          <Route path="recoleccion" element={<Recoleccion />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="entrega" element={<Entrega />} />
          <Route path="historial/recolecciones" element={<Historial tipo='recolecciones' />} />
          <Route path="historial/entregas" element={<Historial tipo='entregas' />} />
          <Route path="informes" element={<Informes />} />
        </Route>
        {/* <------------------------- EMPRESA -------------------------> */}
        <Route path="/login_empresa" element={<Login asignarId={setIdEmpresa} estaAutenticado={setEstaAutenticadoEmpresa} />} />
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
