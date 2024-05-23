import { ContenedorLogin } from "./login/contenedorCampos";

export function Login({ asignarId, estaAutenticado, tipoUsuario }) {
    return (
        <div id='body-login'>
            <ContenedorLogin asignarId={asignarId} estaAutenticado={estaAutenticado} titulo="Iniciar sesión" tipo_usuario={tipoUsuario}/>
        </div>
    )
}
