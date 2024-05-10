import { Footer } from "./principal/footer";
import { Header } from "./principal/header";
import { Main } from "./principal/main";
import { Nosotros } from "./principal/nosotros";
import { Servicios } from "./principal/servicios";

export function Principal() {
    return (
        <> {/*Lo que se devuelve para renderizar debe estar dentro de un solo elemento*/}
            <Header />
            <Main />
            <Servicios />
            <Nosotros />
            <Footer />
        </>
    )
}