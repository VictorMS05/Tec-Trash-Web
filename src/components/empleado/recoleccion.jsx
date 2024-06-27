import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from "../general/main";
import { Calendario } from '../general/calendario';
import { ContenedorDesechoRecoleccion } from './contenedor_desecho_recoleccion';

export function Recoleccion({ id }) {
    const [desechos, setDesechos] = useState([]); // Se inicializa como un arreglo vacío []
    const [estatusRecoleccion, setEstatusRecoleccion] = useState('SIN PROGRAMAR');
    const [nombreEmpleado, setNombreEmpleado] = useState('');
    const [fechaProgramada, setFechaProgramada] = useState(new Date()); // new Date() regresa la fecha actual
    const [idRecoleccion, setIdRecoleccion] = useState(0);
    const [pesoTotalEstimado, setPesoTotalEstimado] = useState(0);
    const [pesoTotal, setPesoTotal] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => { // Se ejecuta al cargar la página
        const progress = document.getElementById('progress');
        const button = document.getElementById('recoleccion_button');

        fetch('https://tectrash.pythonanywhere.com/recoleccion/todos')
            .then(response => response.json())
            .then(data => {
                if (data.data[0].estatus === 'REALIZADA') {
                    setEstatusRecoleccion('SIN PROGRAMAR');
                } else {
                    setEstatusRecoleccion(data.data[0].estatus);
                }
                setIdRecoleccion(data.data[0].idRecoleccion);
                if (estatusRecoleccion === 'SIN PROGRAMAR' && data.data[0].fechaRecoleccion === null) {
                    fetch('https://tectrash.pythonanywhere.com/desecho/peso-total-estimado')
                        .then(response => response.json())
                        .then(data => {
                            setPesoTotalEstimado(data.data.pesoTotalEstimado);
                            progress.style.width = (data.data.pesoTotalEstimado / 20) + '%';
                            if (pesoTotalEstimado < 2000) {
                                button.style.backgroundColor = '#C0D8F5';
                            } else {
                                button.style.backgroundColor = '#5C9BE6';
                            }
                        })
                        .catch(error => {
                            console.error('Hubo un error al solicitar el peso total estimado');
                        });
                }
                if (estatusRecoleccion === 'PROGRAMADA') {
                    fetch('https://tectrash.pythonanywhere.com/empleado/' + data.data[0].idEmpleado)
                        .then(response => response.json())
                        .then(data => {
                            setNombreEmpleado(data.data[0].nombre + ' ' + data.data[0].apellidoPaterno + ' ' + data.data[0].apellidoMaterno);
                        })
                        .catch(error => {
                            console.error('Hubo un error al solicitar el nombre del empleado');
                        });
                }
                if (estatusRecoleccion === 'EN PROCESO') {
                    fetch('https://tectrash.pythonanywhere.com/desecho/todos')
                        .then(response => response.json())
                        .then(data => {
                            if (data.data.length > 0) {
                                console.log(data.data);
                                setDesechos(data.data);
                            } else {
                                return fetch('https://tectrash.pythonanywhere.com/recoleccion/' + idRecoleccion, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        estatus: 'REALIZADA',
                                        pesoFinal: pesoTotal,
                                        costoFinal: costoTotal
                                    })
                                });
                            }
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            setEstatusRecoleccion('SIN PROGRAMAR');
                            navigate('/empleado/recoleccion');
                        })
                        .catch(error => {
                            console.error('Hubo un error al solicitar los desechos de la recolección');
                        });
                }
            })
            .catch(error => {
                console.error('Hubo un error al solicitar los datos de las recolecciones');
            });

    });

    //* <------------------------- PROGRAMAR RECOLECCIÓN -------------------------> */
    function programarRecoleccion() {
        //* Se inserta una nueva recolección en la base de datos
        fetch('https://tectrash.pythonanywhere.com/recoleccion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idEmpleado: id,
                fechaProgramada: fechaProgramada
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //* Se obtiene el id de la recolección recién insertada
                return fetch('https://tectrash.pythonanywhere.com/recoleccion/todos')
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.data[0].idRecoleccion)
                // setEstatusRecoleccion(data.data[0].estatus);
                // console.log(data.data[0].estatus)
                //* Se asigna el id y estatus de la recolección recién insertada, con ayuda del id recién obtenido
                return fetch('https://tectrash.pythonanywhere.com/recoleccion/' + data.data[0].idRecoleccion + '/asignar-desechos', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate('/empleado/recoleccion');
            })
            .catch(error => {
                console.error('Hubo un error al solicitar el id de la recolección o al actualizar la id y estatus de la recolección a los desechos');
            });
    }

    //* <------------------------- INICIAR RECOLECCIÓN -------------------------> */
    function iniciarRecoleccion() {
        fetch('https://tectrash.pythonanywhere.com/recoleccion/' + idRecoleccion, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                estatus: 'EN PROCESO'
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Hubo un error al solicitar el inicio de la recolección');
            });
    }

    return (
        <>
            <Main titulo='Recolección' />
            <section id="funcionalidades">
                {estatusRecoleccion === 'SIN PROGRAMAR' ?
                    <>
                        {pesoTotalEstimado < 1000 ?
                            <p className="etiqueta">Se podrá programar cuando la barra se llene de desechos</p>
                            :
                            <>
                                {pesoTotalEstimado < 2000 ?
                                    <p className="etiqueta">Ya casi está completa para su programación</p>
                                    :
                                    <p className="etiqueta">Ya puedes programarla</p>
                                }
                            </>
                        }
                        <div id="progress_bar_container">
                            <div id="progress_bar">
                                <div id="progress"></div>
                            </div>
                        </div>
                        {pesoTotalEstimado >= 2000 &&
                            <Calendario fechaProgramada={fechaProgramada} setFechaProgramada={setFechaProgramada} titulo={'Ingresa la fecha en la que se realizará la recolección'} />
                        }
                        <button id='recoleccion_button' disabled={pesoTotalEstimado < 2000} onClick={programarRecoleccion}>Programar</button>
                    </>
                    :
                    <>
                        {estatusRecoleccion === 'PROGRAMADA' ?
                            <>
                                <p className="etiqueta">Hay una recolección programada por el empleado {nombreEmpleado}</p>
                                <button id='recoleccion_button' onClick={iniciarRecoleccion}>Iniciar</button>
                            </>
                            :
                            <>
                                {desechos.map((arreglo, indice) => (
                                    <ContenedorDesechoRecoleccion idCliente={arreglo.idCliente} idDesecho={arreglo.idDesecho} />
                                ))}
                            </>
                        }
                    </>
                }
            </section>
        </>
    )
}