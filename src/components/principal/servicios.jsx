import recoleccion_integral from '../../images/icon_principal_recoleccion.png';
import servicio_de_contenedores from '../../images/icon_principal_contenedor.png';
import informes from '../../images/icon_principal_informes.png';
import pesajes from '../../images/icon_principal_pesajes.png';
import pago_por_material from '../../images/icon_principal_pago.png';

export function Servicios() {
    return (
        <section id="servicios">
            <p id="title">Servicios</p>
            <div id="servicios_container">
                <div className="servicio">
                    <img src={recoleccion_integral} alt="Reciclaje" />
                    <p id='option_title'>Recolección integral</p>
                </div>
                <div className="servicio">
                    <img src={servicio_de_contenedores} alt="Reciclaje" />
                    <p id='option_title'>Servicio de contenedores</p>
                </div>
                <div className="servicio">
                    <img src={informes} alt="Reciclaje" />
                    <p id='option_title'>Informes</p>
                </div>
                <div className="servicio">
                    <img src={pesajes} alt="Reciclaje" />
                    <p id='option_title'>Pesajes</p>
                </div>
                <div className="servicio">
                    <img src={pago_por_material} alt="Reciclaje" />
                    <p id='option_title'>Pago por material</p>
                </div>
            </div>
        </section>
    )
}