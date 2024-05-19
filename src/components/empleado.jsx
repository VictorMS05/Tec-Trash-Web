import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from "./general/header";
import { Footer } from './general/footer';

export function Empleado({ id }) {
    const [esAdministrador, setEsAdministrador] = useState(false);

    useEffect(() => {
        fetch('https://tectrash.pythonanywhere.com/empleado/' + id)
            .then(response => response.json())
            .then(data => {
                if (data.data[0].esAdministrador === 1) {
                    setEsAdministrador(true);
                }
            })
            .catch(error => {
                console.error('Hubo un error al solicitar la información del empleado');
            });
    });

    return (
        <>
            <Header perfil rutaPrincipal='/empleado'>
                <Link className='menu_option' to='recoleccion'>Recolección</Link>
                <Link className='menu_option' to='inventario'>Inventario</Link>
                <Link className='menu_option' to='entrega'>Entrega</Link>
                {/* Manera de implementar un menú desplegable con Header */}
                <div className="desplegable">
                    <p>Historial</p>
                    <nav className="submenu">
                        <div className="submenu_option">
                            <Link to='historial/recolecciones'>Recolecciones</Link>
                        </div>
                        <div className="submenu_option">
                            <Link to='historial/entregas'>Entregas</Link>
                        </div>
                    </nav>
                </div>
                {esAdministrador &&
                    <div className='desplegable'>
                        <p>Administrador</p>
                        <nav className="submenu">
                            <div className="submenu_option">
                                <Link to='informes'>Informes</Link>
                            </div>
                            <div className="submenu_option">
                                <Link to='/registro_empleado'>Crear cuenta</Link>
                            </div>
                        </nav>
                    </div>
                }
            </Header>
            <Outlet />
            <Footer />
        </>
    )
}