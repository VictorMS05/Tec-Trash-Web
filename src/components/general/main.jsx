import { Link as Scroll } from 'react-scroll';

export function Main({ titulo, subtitulo, boton }) {
    return (
        <section id="main_principal">
            <p id="main_title">{titulo}</p>
            {subtitulo && <p id="main_subtitle">Dónde tu basura es el tesoro de otros</p>}
            {boton &&
                <Scroll to='servicios' smooth={true}>
                    <button>Conoce más</button>
                </Scroll>
            }
        </section>
    )
}