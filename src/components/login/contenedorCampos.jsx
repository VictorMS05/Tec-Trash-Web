import CamposRegistro from "./campos";
import correito from "./../../images/icon_correo_login.png";
import candadito from "./../../images/icon_contra_login.png";
import logo_facebook from "./../../images/logo_facebook_login.png"
import logo_google from "./../../images/logo_google_login.png"
import logo_x from "./../../images/logo_x_login.png"

export function ContenedorLogin(props){
    return(
      <div className="contenedor">
        <h2>{props.titulo}</h2>
        <form method="post">
          <div className="campos-ingresos">
            <CamposRegistro tipoCampo = "conIcono" nombreCampo = "Correo electrónico"  urlImg = {correito}/>
            <CamposRegistro tipoCampo = "conIcono" nombreCampo = "Contraseña" urlImg = {candadito}/>
          </div>
          <a href=".">¿Olvidaste tu contraseña?</a>
          <button>Ingresar</button>
          <div className='redesSociales'>
            <a href='https://www.facebook.com/?locale=es_LA'><img className = "redes" src={logo_facebook}/></a>
            <a href='https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjppZX4triFAxXVIUQIHarcBdUQPAgJ'><img className = "redes" src={logo_google}/></a>
            <a href='https://twitter.com/?lang=es'><img className = "redes" src={logo_x}/></a>
          </div>
          <label className="preguntarCuenta">¿No tienes una cuenta?</label>
          <a href="#" className="crear-cuenta">Crear una</a>
        </form>
    </div>
    )
}