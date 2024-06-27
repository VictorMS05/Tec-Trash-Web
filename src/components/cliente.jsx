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
            </Header>
            <Outlet />
            <Footer />
        </>
    )
}