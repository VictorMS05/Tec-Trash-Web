import CamposRegistro from "./campos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import correito from "./../../images/icon_correo_login.png";
import candadito from "./../../images/icon_contra_login.png";
import logo_facebook from "./../../images/logo_facebook_login.png"
import logo_google from "./../../images/logo_google_login.png"
import logo_x from "./../../images/logo_x_login.png"
import ojito from "./../../images/icon_mostrarcontra_login.png"
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Cliente } from './../cliente';



export function ContenedorLogin(props){
  
  var [email, setEmail] = useState('');
  var [contra, setContra] = useState('');
  var [mensaje, setMensaje] = useState('');

  async function ingresar(event){
      var url, json, contraIncorrecta, pagina_cliente;

  email = document.getElementById("correito").value;
  contra = document.getElementById("password").value;
  contraIncorrecta = document.getElementById("contraIncorrecta");

  
  

  url = 'http://127.0.0.1:5000/cliente/iniciar-sesion';
  json ={
    correo: email,
    contrasenia: contra
  }
  event.preventDefault(); //Evitar que el form actualice la página

  fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    }) // Hago una petición POST al servidor
        .then(response => response.json())// Devuelve otra promesa

        .then(data => { // Devuelve otra promesa
            // Manejar la respuesta de la API
            // console.log(data);
            
            console.log(data.hasOwnProperty('status'));
            if(data.hasOwnProperty('status')){
              console.log("Holis");
              alert("Si se pudo jiji");
              contraIncorrecta.style.display = "none";
            }else{
              console.log("Adios");
              alert("No se pudo jiji");
              contraIncorrecta.style.display = "block";
            }
            
        })
        .catch(error => { // Devuelve otra promesa
            setMensaje("Hubo un error al intentar iniciar sesión.");
            alert("ASDFGHJK")
        });

  }

  
    

    return(
      <div className="contenedor">
        <Routes>
          <Route path="/cliente" element={<Cliente />} />
        </Routes>
        <h3>{props.titulo}</h3>
        <form onSubmit={ingresar} >
          <div className="campos-ingresos">
            <CamposRegistro  type="text" nombreCampo = "Correo electrónico"  urlImg = {correito} nombre = "correito" id="correito" evento = {(e) => setEmail(e.target.value)}/>
            <CamposRegistro tipo="password" nombreCampo = "Contraseña" urlImg = {candadito} urlImg2 = {ojito}  idOjito = "mostrar_contra" nombre = "password" id="password" evento = {(e) => setContra(e.target.value)}/>

            <p id = "contraIncorrecta" className="contraIncorrecta esconder">Contraseña incorrecta</p>
            <p className="error esconder">Error al iniciar sesión</p>
            <Link to='/login' className="avisos-texto">¿Olvidaste tu contraseña?</Link>
            <Link to ='/cliente'><button type="submit">Ingresar</button></Link>
          </div>
          
          <div className='redesSociales'>
            <a href='https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjppZX4triFAxXVIUQIHarcBdUQPAgJ'><img className = "redes" src={logo_google}/></a>
            <a href='https://www.facebook.com/?locale=es_LA'><img className = "redes" src={logo_facebook}/></a>
            <a href='https://twitter.com/?lang=es'><img className = "redes" src={logo_x}/></a>
          </div>
          <div id="cuenta-texto">
            <label className="avisos-texto" >¿No tienes una cuenta?</label>
            <Link className="crear-cuenta avisos-texto">Crear una</Link><br/>
            <label className="avisos-texto">¿Tienes una empresa?</label>
            <Link className="crear-cuenta avisos-texto">Inicia sesión</Link>
          </div>
        </form>
      </div>
      
    )
    
}

