export function Historial({ tipo }) {
    return (
        <>
            {tipo === 'recolecciones' ? 
                <h1>...y el que no lo baile...</h1>
            : 
                <>{tipo === 'entregas' && <h1>...y el que no lo baile...</h1>}</>
            }
        </>
    )
}