import { Header } from "./principal/header";
import { Main } from "./principal/main";
import { Servicios } from "./principal/servicios";

export function Principal() {
    return (
        <div>
            <Header />
            <Main />
            <Servicios />
        </div>
    )
}