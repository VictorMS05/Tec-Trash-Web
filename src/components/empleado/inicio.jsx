import { useState, useEffect } from 'react';
import { Main } from './../general/main';
import { ContenedorFuncionalidades } from './../general/contenedor_funcionalidades';
import { Funcionalidad } from './../general/funcionalidad';
import recoleccion from './../../images/icon_cliente_recoleccion.png';
import inventario from './../../images/icon_empleado_inventario.png';
import entrega from './../../images/icon_empleado_entrega.png';
import historial_recolecciones from './../../images/icon_empleado_historialreco.png';
import historial_entregas from './../../images/icon_empleado_historialentrega.png';

export function Inicio({ id }) {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        fetch('https://tectrash.pythonanywhere.com/empleado/' + id)
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
            <Main titulo={'Bienvenido/a ' + nombre} />
            <ContenedorFuncionalidades>
                <Funcionalidad titulo='Recolección' urlImagen={recoleccion} textoBoton='Registrar' rutaBoton='/empleado/recoleccion'>Programa y/o realiza una recolección</Funcionalidad>
                <Funcionalidad titulo='Inventario' urlImagen={inventario} textoBoton='Consultar'>Consulta todos los desechos registrados en el sistema</Funcionalidad>
                <Funcionalidad titulo='Entrega' urlImagen={entrega} textoBoton='Registrar'>Registra y/o comienza una entrega de los desechos recolectados</Funcionalidad>
                <Funcionalidad titulo='Historial de recolecciones' urlImagen={historial_recolecciones} textoBoton='Consultar'>Consulta la información de las recolecciones realizadas</Funcionalidad>
                <Funcionalidad titulo='Historial de entregas' urlImagen={historial_entregas} textoBoton='Consultar'>Consulta la información de las entregas realizadas</Funcionalidad>
            </ContenedorFuncionalidades>
        </>
    )
}