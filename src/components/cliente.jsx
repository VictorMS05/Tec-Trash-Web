import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';


export function Cliente() {
    return(
        <nav id="menu">
                <Scroll className='scroll' to='servicios'>Servicios</Scroll>
                <Scroll className='scroll' to='nosotros'>Nosotros</Scroll>
                <Link to='/login'>Iniciar sesión</Link>
                <Link id='registrarse' to='/registro'>Registrarse</Link>
        </nav>
    );
}