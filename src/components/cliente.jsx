import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { Footer } from './principal/footer';


export function Cliente() {
    return (
        <> {/*Lo que se devuelve para renderizar debe estar dentro de un solo elemento*/}
            <header>
                <Scroll className='scroll' to='servicios'>Servicios</Scroll>
                <Scroll className='scroll' to='nosotros'>Nosotros</Scroll>
                <Link to='/login'>Iniciar sesión</Link>
                <Link id='registrarse' to='/registro'>Registrarse</Link>
            </header>
            <Footer />
        </>
    );
}