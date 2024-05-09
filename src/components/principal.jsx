import { Footer } from "./principal/footer";
import { Header } from "./principal/header";
import { Main } from "./principal/main";
import { Nosotros } from "./principal/nosotros";
import { Servicios } from "./principal/servicios";

export function Principal() {
    return (
        <div id="principal">
            <Header />
            <Main />
            <Servicios />
            <Nosotros />
            <Footer />
        </div>
    )
}