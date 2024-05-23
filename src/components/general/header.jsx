import { Link } from 'react-router-dom';
import logo from './../../images/logo_TecTrash_BordeBlanco.png';
import icono_perfil from './../../images/icon_header_perfil.png';

export function Header({ perfil, rutaPrincipal, estaAutenticado, children }) {
    return (
        <header>
            <Link to={rutaPrincipal}>
                <img id='logo_header' src={logo} alt="Logo" />
            </Link>
            <nav id="menu">
                {children}
                {perfil ?
                    <>
                        <div className="desplegable">
                            <img id='icono_header' src={icono_perfil} alt="Icono perfil" />
                            <nav className="submenu">
                                <div className="submenu_option">
                                    <Link to=''>Perfil</Link>
                                </div>
                                <div className="submenu_option">
                                    <Link to='/' onClick={() => estaAutenticado(false)}>Cerrar sesión</Link>
                                </div>
                            </nav>
                        </div>
                    </> :
                    <>
                        <Link className='menu_option' to='/login_cliente'>Iniciar sesión</Link>
                        <Link id='registrarse' to='/registro_cliente'>Registrarse</Link>
                    </>
                }
            </nav>
        </header>
    )
}