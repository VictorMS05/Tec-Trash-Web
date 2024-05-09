import equipo_tectrash from "../../images/image_principal_quienesomos.png";
import mision from "../../images/icon_principal_mision.png";
import vision from "../../images/icon_principal_vision.png";

export function Nosotros() {
  return (
    <section id="nosotros">
      <div id="nosotros_title">Nosotros</div>
      <div id="quienes_somos_container">
        <div>
            <p className="nosotros_subtitle">¿Quiénes somos?</p>
            <p id="quienes_somos_description">En Tec Trash, somos una empresa dedicada a la intermediación de desechos tecnológicos en México, con una capacidad para conectar a nuestros clientes con empresas responsables del procesamiento y reciclaje de desechos. <br />Nos enorgullecemos de ofrecer un servicio integral y eficiente que aborda las necesidades únicas de cada cliente, garantizando al mismo tiempo el cumplimiento de los más altos estándares ambientales y de seguridad de datos.</p>
        </div>
        <img id="equipo_tectrash" src={equipo_tectrash} alt="Equipo de Tec-Trash" />
      </div>
      <div id="mision_container">
        <img className="nosotros_image" src={mision} alt="Icono misión" />
        <div>
            <p className="nosotros_subtitle">Misión</p>
            <p id="mision_description">Facilitar la recolección y gestión responsable de desechos tecnológicos en todo México. Actuamos como intermediarios confiables entre nuestros clientes y las empresas encargadas del procesamiento y reciclaje de estos materiales, asegurando un proceso eficiente y ético en cada etapa. <br />Nos comprometemos a reducir el impacto ambiental y proteger la privacidad de la información de nuestros clientes, promoviendo al mismo tiempo prácticas sostenibles en el manejo de desechos tecnológicos.</p>
        </div>
      </div>
      <div id="vision_container">
        <div>
            <p className="nosotros_subtitle">Visión</p>
            <p id="vision_description">Ser una empresa líder en la intermediación de desechos tecnológicos en México, estableciendo relaciones sólidas y duraderas con nuestros clientes y empresas asociadas. <br />Buscamos ser reconocidos como líderes en la promoción de prácticas sostenibles y avanzadas en la gestión de residuos electrónicos, contribuyendo así a un futuro más limpio, seguro y tecnológicamente avanzado para todos.</p>
        </div>
      <img className="nosotros_image" src={vision} alt="Icono visión" />
      </div>
      <div id="valores_container">
        <p className="nosotros_subtitle">Valores</p>
        <p className="valor_element_verde"><b>Integridad y confianza:</b> Actuamos con integridad y transparencia en todas nuestras operaciones, manteniendo la confianza de nuestros clientes y empresas asociadas en todo momento. Nos comprometemos a cumplir con los más altos estándares éticos y profesionales en cada interacción.</p>
        <p className="valor_element_azul"><b>Responsabilidad social:</b> Nos preocupamos por el bienestar de nuestras comunidades y nos esforzamos por contribuir positivamente a su desarrollo. Apoyamos iniciativas sociales y medioambientales que promuevan la educación, la inclusión y el crecimiento sostenible.</p>
        <p className="valor_element_verde"><b>Servicio al cliente:</b> Nos comprometemos a brindar un servicio excepcional que supere las expectativas de nuestros clientes. Escuchamos activamente sus necesidades y nos esforzamos por ofrecer soluciones personalizadas y efectivas que agreguen valor.</p>
        <p className="valor_element_azul"><b>Sostenibilidad ambiental:</b> Priorizamos la reducción, reutilización y reciclaje de desechos tecnológicos para minimizar nuestro impacto ambiental y contribuir al cuidado del planeta. Nos esforzamos por promover prácticas sostenibles en todas nuestras operaciones.</p>
        <p className="valor_element_verde"><b>Colaboración y asociación:</b> Valoramos las relaciones de colaboración con empresas responsables en la gestión de desechos tecnológicos. Buscamos establecer asociaciones sólidas y mutuamente beneficiosas que nos permitan ofrecer soluciones integrales y efectivas a nuestros clientes.</p>
      </div>
      <div id="ubicacion_container">
        <p className="nosotros_subtitle">Nos ubicamos en</p>
        <iframe id="ubicacion_tectrash" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.9188459959067!2d-99.01776218081234!3d21.985418389231707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d67381c82f2991%3A0x9b64de796a5c2414!2sEl%20Grillito%20Cantor!5e0!3m2!1ses!2smx!4v1715071471838!5m2!1ses!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa"></iframe>
        <p id="direccion">Miguel Hidalgo #228, Centro, 79000 Ciudad. Valles, S.L.P</p>
      </div>
    </section>
  );
}