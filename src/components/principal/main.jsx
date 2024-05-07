import { Link as Scroll } from 'react-scroll';

export function Main() {
    return (
        <section id="main_principal">
            <p id="main_title">Tec-Trash</p>
            <p id="main_subtitle">Dónde su basura es el tesoro de otros</p>
            <Scroll to='servicios'>
                <button>Conoce más</button>
            </Scroll>
        </section>
    )
}