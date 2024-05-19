import { Link } from "react-router-dom"

export function Funcionalidad({ rutaBoton, titulo, textoBoton, urlImagen, children }) {
    return (
        <div className="option">
            <img src={urlImagen} alt="Icono" />
            <p className='option_title'>{titulo}</p>
            <p className="option_description">{children}</p>
            {textoBoton && <Link to={rutaBoton}><button>{textoBoton}</button></Link>}
        </div>
    )
}