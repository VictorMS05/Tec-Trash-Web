import { Link as Scroll } from "react-scroll";
import { Footer } from "./general/footer";
import { Header } from "./general/header";
import { Main } from "./general/main";
import { Nosotros } from "./principal/nosotros";
import { ContenedorFuncionalidades } from "./general/contenedor_funcionalidades";
import recoleccion_integral from '../images/icon_principal_recoleccion.png';
import servicio_de_contenedores from '../images/icon_principal_contenedor.png';
import informes from '../images/icon_principal_informes.png';
import pesajes from '../images/icon_principal_pesajes.png';
import pago_por_material from '../images/icon_principal_pago.png';
import { Funcionalidad } from "./general/funcionalidad";

export function Principal() {
    return (
        <> {/*Lo que se devuelve para renderizar debe estar dentro de un solo elemento*/}
            <Header rutaPrincipal='/'>
                <Scroll className='menu_option' to='servicios' smooth={true}>Servicios</Scroll>
                <Scroll className='menu_option' to='nosotros' smooth={true}>Nosotros</Scroll>
            </Header>
            <Main titulo='Tec-Trash' subtitulo boton />
            <ContenedorFuncionalidades titulo='Servicios'>
                <Funcionalidad titulo='Recolección integral' urlImagen={recoleccion_integral}>Proporcionamos un servicio de recolección seguro y óptimo siguiendo las leyes del manejo de desechos tecnológicos</Funcionalidad>
                <Funcionalidad titulo='Servicio de contenedores' urlImagen={servicio_de_contenedores}>Contamos con almacenes específicos para tus desechos, instalados con seguridad para proteger la integridad del desecho</Funcionalidad>
                <Funcionalidad titulo='Informes' urlImagen={informes}>Proporcionamos informes de los envios realizados incluyendo el peso total de este asi como su monetario</Funcionalidad>
                <Funcionalidad titulo='Pesajes' urlImagen={pesajes}>Contamos con un sistema de pesaje para tus desechos, generando al final un peso total de todo tu registro evitando asi sobre pesajes en cada registro</Funcionalidad>
                <Funcionalidad titulo='Pago por material' urlImagen={pago_por_material}>Todos los desechos funcionen o no ¡Tienen un precio!, se te será entregado al momento de la recolección</Funcionalidad>
            </ContenedorFuncionalidades>
            <Nosotros />
            <Footer />
        </>
    )
}