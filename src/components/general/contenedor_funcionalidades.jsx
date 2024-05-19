export function ContenedorFuncionalidades({ titulo, children }) {
    return (
        <section id="funcionalidades">
            {titulo && <p id="title">{titulo}</p>}
            <div className="container">
                {children}
            </div>
        </section>
    )
}