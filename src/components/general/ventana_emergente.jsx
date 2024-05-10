import { useState, Children } from "react";

export function VentanaEmergente({ botonCerrar, estaActivo, titulo, children }) {
    return (
        <div className="ventana_emergente_background">
            <div className="ventana_emergente_container">
                {botonCerrar && <button onClick={estaActivo}>x</button>} {/*Si botonCerrar existe, se muestra el botón de cerrar*/}
                <p className="nosotros_subtitle">{titulo}</p>
                {children}
            </div>
        </div>
    )
}