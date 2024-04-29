import logo from './logo.svg';
import './App.css';
import CamposRegistro, { Campos } from './components/campos';
import { ContenedorLogin } from './components/contenedorCampos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* <h1>Hola Mundo </h1> */}
        </p>
       <ContenedorLogin titulo = "Iniciar sesión" />
        
      </header>
    </div>
  );
}

export default App;
