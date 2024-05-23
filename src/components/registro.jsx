import CamposRegistro from "./login/campos";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Registro() {;

    var [mensaje, setMensaje] = useState('');
    var [tel, setTel] = useState('');
    var [nomb, setNomb] = useState('');
    var [apPat, setApPat] = useState('');
    var [apMat, setApMat] = useState('');
    var [fechaNac, setFechaNac] = useState('');
    var [sexo, setSexo] = useState('');
    var [estadoCivil, setEstadoCivil] = useState('');
    var [calle1, setCalle1] = useState('');
    var [numeroExterior1, setNumeroExterior1] = useState('');
    var [numeroInterior1, setNumeroInterior1] = useState('');
    var [colonia1, setColonia1] = useState('');
    var [codigoPostal1, setCodigoPostal1] = useState('');
    var [referencia1, setReferencia1] = useState('');
    var [email, setEmail] = useState('');
    var [contra, setContra] = useState('');
    const navigate = useNavigate();

    async function insertar(event){
        var url, json, contraIncorrecta, pagina_cliente;
  
        email = document.getElementById("correito").value;
        contra = document.getElementById("password").value;
        contraIncorrecta = document.getElementById("contraIncorrecta");
    
        url = 'https://tectrash.pythonanywhere.com/cliente';
        json ={
            telefono: tel,
            nombre: nomb,
            apellidoPaterno: apPat,
            apellidoMaterno: apMat,
            fechaNacimiento: fechaNac,
            sexo: sexo,
            estadoCivil: estadoCivil,
            calle1: calle1,
            numeroExterior1: numeroExterior1,
            numeroInterior1: numeroInterior1,
            colonia1: colonia1,
            codigoPostal1: codigoPostal1,
            referencia1: referencia1,
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
              console.log("Ya llegó aquí :p");
              console.log(data.hasOwnProperty('status'));
              if(data.hasOwnProperty('status')){
                console.log("Holis");
                alert("Si se pudo jiji");
                navigate('/registro_cliente');
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

    return (
        <div id='body-login'>
            <div className="contenedor">
                <div className="campos-ingresos">
                    <h3>CREAR CUENTA</h3>
                    <label>Ingresa los datos de tu nombre:</label>
                    <CamposRegistro nombreCampo = "Nombre(s)*"/>
                    <CamposRegistro nombreCampo = "Primer apellido*"/>
                    <CamposRegistro nombreCampo = "Segundo apellido*"/>
                    <button type="submit">Siguiente</button>
                    <div id="cuenta-texto">
                        <label className="avisos-texto">¿Eres una empresa?</label>
                        <Link className="crear-cuenta avisos-texto" to = "/registro_empleado">Crear una cuenta</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}