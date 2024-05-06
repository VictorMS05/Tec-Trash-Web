import { Link as Scroll } from 'react-scroll';

export function Main() {
    return (
        <section id="main_principal">
            <p id="main_title">Tec-Trash</p>
            <p id="main_subtitle">Dónde tu basura es el tesoro de otros</p>
            <Scroll to='servicios' smooth={true}>
                <button>Conoce más</button>
            </Scroll>
        </section>
    )
}