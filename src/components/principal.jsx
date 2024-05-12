import { Link as Scroll } from "react-scroll";
import { Footer } from "./general/footer";
import { Header } from "./general/header";
import { Main } from "./general/main";
import { Nosotros } from "./principal/nosotros";
import { Servicios } from "./principal/servicios";

export function Principal() {
    return (
        <> {/*Lo que se devuelve para renderizar debe estar dentro de un solo elemento*/}
            <Header>
                <Scroll className='menu_option' to='servicios' smooth={true}>Servicios</Scroll>
                <Scroll className='menu_option' to='nosotros' smooth={true}>Nosotros</Scroll>
            </Header>
            <Main titulo='Tec-Trash' subtitulo boton />
            <Servicios />
            <Nosotros />
            <Footer />
        </>
    )
}