// import React from "react";
import React, {useState} from "react"
import CamposRegistro from "./campos";
import '../App.css' 

export function ContenedorLogin(props){
    return(
      <div className="contenedor">
        <h2>{props.titulo}</h2>
        <form method="post">
          <div className="campos-ingresos">
            <CamposRegistro tipoCampo = "conIcono" nombreCampo = "Correo electrónico"  urlImg = "https://i.ibb.co/V2dzQWF/icons8-nuevo-post-50.png"/>
            <CamposRegistro tipoCampo = "conIcono" nombreCampo = "Contraseña" urlImagen = "https://i.ibb.co/DfzqL8S/icons8-candado-50-1.png"/>
          </div>
          <a href=".">¿Olvidaste tu contraseña?</a>
          <button>Ingresar</button>
          <div className='redesSociales'>
            <a href='https://www.facebook.com/?locale=es_LA'><img className = "redes" src='http://imgfz.com/i/nfcLyq9.png'/></a>
            <a href='https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjppZX4triFAxXVIUQIHarcBdUQPAgJ'><img className = "redes" src='http://imgfz.com/i/rXwCydP.png'/></a>
            <a href='https://twitter.com/?lang=es'><img className = "redes" src='http://imgfz.com/i/ipHB3Yu.png'/></a>
          </div>
          <label className="preguntarCuenta">¿No tienes una cuenta?</label>
          <a href="#" className="crear-cuenta">Crear una cuenta</a>
        </form>
    </div>
    )
}