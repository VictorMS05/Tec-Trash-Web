import { Link, Outlet } from "react-router-dom";
import { Header } from "./general/header";
import { Footer } from "./general/footer";
import { useEffect, useState } from "react";

export function Empresa({ id, estaAutenticado }) {
    return (    
        <>
            <Header perfil rutaPrincipal='/empresa' estaAutenticado={estaAutenticado} >
                <Link className='menu_option' to='entregas'>Entregas</Link>
                <Link className='menu_option' to='asistencia'>Asistencia</Link>
            </Header>
            <Outlet />
            <Footer />
        </>
    )
}