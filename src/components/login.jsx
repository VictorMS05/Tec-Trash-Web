import { ContenedorLogin } from "./login/contenedorCampos";

export function Login({ asignarId, estaAutenticado }) {
    return (
        <div id='body-login'>
            <ContenedorLogin asignarId={asignarId} estaAutenticado={estaAutenticado} titulo="Iniciar sesión"/>
        </div>
    )
}
