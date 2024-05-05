export function MainSection() {
    const manejarClicBoton = () => {
        window.location.href = "/servicios";
    }

    return (
        <section id="main_section_principal">
            <p id="title">Tec-Trash</p>
            <p id="subtitle">Dónde su basura es el tesoro de otros</p>
            <button onClick={manejarClicBoton}>Conoce más</button>
        </section>
    )
}