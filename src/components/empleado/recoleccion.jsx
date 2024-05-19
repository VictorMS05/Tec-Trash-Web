import { useEffect, useState } from 'react';
import { Main } from "../general/main";

export function Recoleccion() {
    const [pesoTotalEstimado, setPesoTotalEstimado] = useState(0);

    useEffect(() => {
        const progress = document.getElementById('progress');
        const button = document.getElementById('recoleccion_button');

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
    });

    return (
        <>
            <Main titulo='Recolección' />
            <section id="funcionalidades">
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
                <button id='recoleccion_button' disabled={pesoTotalEstimado < 2000}>Programar</button>
            </section>
        </>
    )
}