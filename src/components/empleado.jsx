import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from "./general/header";
import { Footer } from './general/footer';
import { Main } from './general/main';

export function Empleado({ id }) {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/empleado/' + id)
            .then(response => response.json())
            .then(data => {
                setNombre(data.data[0].nombre);
            })
            .catch(error => {
                console.error('Hubo un error al solicitar la información del empleado');
            });
    });

    return (
        <>
            <Header perfil>
                <Link className='menu_option' to=''>Recolecciones</Link>
                <Link className='menu_option' to=''>Inventario</Link>
                <Link className='menu_option' to=''>Entregas</Link>
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
            <Main titulo={'Bienvenido/a ' + nombre} />
            <Footer />
        </>
    )
}