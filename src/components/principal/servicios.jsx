import recoleccion_integral from '../../images/icon_principal_recoleccion.png';
import servicio_de_contenedores from '../../images/icon_principal_contenedor.png';
import informes from '../../images/icon_principal_informes.png';
import pesajes from '../../images/icon_principal_pesajes.png';
import pago_por_material from '../../images/icon_principal_pago.png';

export function Servicios() {
    return (
        <section id="servicios">
            <p id="title">Servicios</p>
            <div className="container">
                <div className="option">
                    <img src={recoleccion_integral} alt="Icono" />
                    <p className='option_title'>Recolección integral</p>
                    <p className="option_description">Proporcionamos un servicio de recolección seguro y óptimo siguiendo las leyes del manejo de desechos tecnológicos</p>
                </div>
                <div className="option">
                    <img src={servicio_de_contenedores} alt="Icono" />
                    <p className='option_title'>Servicio de contenedores</p>
                    <p className="option_description">Contamos con almacenes específicos para tus desechos, instalados con seguridad para proteger la integridad del desecho</p>
                </div>
                <div className="option">
                    <img src={informes} alt="Icono" />
                    <p className='option_title'>Informes</p>
                    <p className="option_description">Proporcionamos informes de los envios realizados incluyendo el peso total de este asi como su monetario </p>
                </div>
            </div>
            <div className="container">
                <div className="option">
                    <img src={pesajes} alt="Icono" />
                    <p className='option_title'>Pesajes</p>
                    <p className="option_description">Contamos con un sistema de pesaje para tus desechos, generando al final un peso total de todo tu registro evitando asi sobre pesajes en cada registro</p>
                </div>
                <div className="option">
                    <img src={pago_por_material} alt="Icono" />
                    <p className='option_title'>Pago por material</p>
                    <p className="option_description">Todos los desechos funcionen o no ¡Tienen un precio!, se te será entregado al momento de la recolección</p>
                </div>
            </div>
        </section>
    )
}