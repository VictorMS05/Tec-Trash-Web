import {Link} from 'react-router-dom';
import logo from './../../images/logo_TecTrash_BordeBlanco.png';

export function Header() {
    return (
        <header>
            <img id='logo_header' src={logo} alt="Logo" />
            <div id="menu">
                <a href='servicios'>Servicios</a>
                <a href='nosotros'>Nosotros</a>
                <Link to='/login'>Iniciar sesión</Link>
                <Link id='registrarse' to='/registro'>Registrarse</Link>
            </div>
        </header>
    )
}