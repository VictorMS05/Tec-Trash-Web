import { Link, Outlet } from 'react-router-dom';
import { Header } from "./general/header";
import { Footer } from './general/footer';

export function Empleado() {
    return (
        <>
            <Header perfil rutaPrincipal='/empleado'>
                <Link className='menu_option' to='recoleccion'>Recolección</Link>
                <Link className='menu_option' to=''>Inventario</Link>
                <Link className='menu_option' to=''>Entrega</Link>
                {/* Manera de implementar un menú desplegable con Header */}
                <div className="desplegable">
                    <p>Historial</p>
                    <nav className="submenu">
                        <div className="submenu_option">
                            <Link to=''>Recolecciones</Link>
                        </div>
                        <div className="submenu_option">
                            <Link to=''>Entregas</Link>
                        </div>
                    </nav>
                </div>
            </Header>
            <Outlet />
            <Footer />
        </>
    )
}