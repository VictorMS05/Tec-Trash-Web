import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import logo from './../../images/logo_TecTrash_BordeBlanco.png';

export function Header() {
    return (
        <header>
            <Link to='/'>
                <img id='logo_header' src={logo} alt="Logo" />
            </Link>
            <nav id="menu">
                <Scroll className='scroll' to='servicios' smooth={true}>Servicios</Scroll>
                <Scroll className='scroll' to='nosotros' smooth={true}>Nosotros</Scroll>
                <Link to='/login'>Iniciar sesión</Link>
                <Link id='registrarse' to='/registro'>Registrarse</Link>
            </nav>
        </header>
    )
}