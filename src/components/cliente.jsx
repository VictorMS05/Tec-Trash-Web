import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from "./general/header";
import { Footer } from './general/footer';

export function Cliente({ id, estaAutenticado }) {

    return (
        <>
            <Header perfil rutaPrincipal='/cliente' estaAutenticado={estaAutenticado} >
                <Link className='menu_option' to='registro'>Registro</Link>
                <Link className='menu_option' to='historial'>Historial</Link>
                <Link className='menu_option' to='asistencia'>Asistencia</Link>
                {/* Manera de implementar un menú desplegable con Header */}
                <div className="desplegable">
                    <p>Historial</p>
                    <nav className="submenu">
                        <div className="submenu_option">
                            <Link to='historial/recolecciones'>Perfil</Link>
                        </div>
                        <div className="submenu_option">
                            <Link to='historial/entregas'>Cerrar sesión</Link>
                        </div>
                    </nav>
                </div>
            </Header>
            <Outlet />
            <Footer />
        </>
    )
}