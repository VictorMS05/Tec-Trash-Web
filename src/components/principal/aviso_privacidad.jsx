import { VentanaEmergente } from "../general/ventana_emergente";

export function AvisoPrivacidad({ estaActivo }) {
    return (
        <VentanaEmergente botonCerrar estaActivo={estaActivo} titulo={"Aviso de privacidad"}>
            <div id="aviso_privacidad_content">
                <center><b><p>Política de privacidad de Tec-Trash</p></b></center>
                <br />
                <p>En Tec-Trash, nos comprometemos a salvaguardar la privacidad y seguridad de la información personal recopilada y procesada en el curso de nuestras operaciones. Esta política de privacidad detalla cómo manejamos la información personal de nuestros clientes, empresas asociadas y empleados, con un requisito de edad mínima de 18 años y un límite de edad máxima de 80 años para utilizar nuestros servicios.</p>
                <ol>
                    <li>Información Personal Recopilada:</li>
                    <br />
                    <p>Con el fin de ofrecer un servicio eficaz y personalizado, Tec-Trash recolecta datos personales de sus usuarios, incluyendo, pero no limitado a:</p>
                    <br />
                    <ul>
                        <li><u>Clientes:</u> Al utilizar nuestros servicios de recolección de desechos tecnológicos, recopilamos información como nombre completo, dirección (calle, número exterior, colonia, código postal), direcciones de correo electrónico, número de teléfono y detalles sobre los dispositivos electrónicos a ser recolectados. Asimismo, al crear una cuenta, se solicitará la creación de una contraseña segura.</li>
                        <li><u>Empresas asociadas:</u> Proporcionan información como su RFC, nombre de la empresa, dirección (calle, número exterior, colonia, ciudad, estado), número de contacto, dirección de correo electrónico, así como también se solicita la creación de una contraseña segura al establecer una cuenta, nombre completo del responsable de la empresa, preferencias sobre el envío de desechos tecnológicos, si desean que Tec-Trash los recoja, y se establece un peso para los desechos tecnológicos.</li>
                        <li><u>Empleados:</u> Para gestionar nuestras operaciones y actividades comerciales, recopilamos información personal de empleados, incluyendo su RFC, nombre completo y números de teléfono. Al igual que con los clientes y las empresas asociadas, se solicita a los empleados que creen una contraseña segura para su cuenta y definan su rol en la empresa (administrador o no).</li>
                    </ul>
                    <br />
                    <li>Uso de la información personal:</li>
                    <br />
                    <p>La información recopilada se utiliza para proporcionar servicios específicos y personalizados a nuestros usuarios:</p>
                    <br />
                    <ul>
                        <li>La información de los clientes se emplea para programar recolecciones, confirmar servicios y resolver cualquier problema relacionado.</li>
                        <li>La información de las empresas asociadas se utiliza para coordinar entregas, mantener registros y facilitar la comunicación.</li>
                        <li>La información de los empleados se emplea para gestionar eficientemente las operaciones internas y mantener una comunicación adecuada.</li>
                    </ul>
                    <br />
                    <li>Creación de contraseñas:</li>
                    <br />
                    <ul>
                        <li>Al establecer una cuenta en Tec-Trash, ya sea como cliente, empresa asociada o empleado, se requiere la creación de una contraseña segura. Esta contraseña es esencial para proteger la privacidad y seguridad de la cuenta y los datos personales asociados.</li>
                        <li>La contraseña elegida debe ser única y mantenerse confidencial. No compartirla con otras personas ayuda a proteger la cuenta contra accesos no autorizados.</li>
                        <li>Tec-Trash nunca solicitará su contraseña por correo electrónico u otros medios no seguros. En caso de necesitar restablecer su contraseña, se le guiará a través de un proceso seguro para hacerlo.</li>
                        <li>Es su responsabilidad elegir una contraseña segura. Se recomienda utilizar una combinación de letras, números y caracteres especiales, evitando contraseñas fáciles de adivinar, como fechas de nacimiento o nombres comunes.</li>
                        <li>Tenga en cuenta que es su responsabilidad proteger su contraseña y mantenerla segura. Tec-Trash no se hace responsable de ningún acceso no autorizado a su cuenta debido al mal uso o la divulgación de su contraseña.</li>
                        <li>Si sospecha que su contraseña ha sido comprometida o experimenta algún problema de seguridad con su cuenta, comuníquese con nosotros de inmediato para que podamos tomar las medidas necesarias para proteger su información personal y garantizar la seguridad de su cuenta.</li>
                    </ul>
                    <br />
                    <li>Divulgación de la información personal:</li>
                    <br />
                    <ul>
                        <li>Divulgamos información personal a terceros solo cuando sea necesario para brindar servicios o cumplir con obligaciones legales.</li>
                        <li>Podemos compartir información con empresas para recoger los desechos o entidades involucradas en la prestación de servicios.</li>
                    </ul>
                    <br />
                    <li>Seguridad de la información personal:</li>
                    <br />
                    <ul>
                        <li>Implementamos medidas de seguridad para proteger la información contra el acceso no autorizado, divulgación o alteración.</li>
                        <li>Limitamos el acceso solo al personal autorizado necesario para cumplir con sus responsabilidades laborales.</li>
                    </ul>
                    <br />
                    <li>Retención de la información personal:</li>
                    <br />
                    <ul>
                        <li>Retenemos la información personal durante el tiempo necesario para cumplir con los fines para los que fue recopilada, según lo permita la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento, y demás disposiciones aplicables en México.</li>
                    </ul>
                    <br />
                    <li>Consentimiento y derechos del usuario:</li>
                    <br />
                    <ul>
                        <li>Al proporcionar su información personal, los usuarios consienten su procesamiento de acuerdo con esta política de privacidad.</li>
                        <li>Los usuarios tienen derecho a acceder, corregir, eliminar o solicitar la limitación del procesamiento, de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento, y demás disposiciones aplicables en México.</li>
                    </ul>
                    <br />
                    <li>Cambios en la política de privacidad:</li>
                    <br />
                    <ul>
                        <li>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento y publicar actualizaciones en nuestro sitio web.</li>
                    </ul>
                    <br />
                    <li>Contacto:</li>
                    <br />
                    <ul>
                        <li>Para preguntas o solicitudes relacionadas con esta política de privacidad, comuníquese con nosotros a través de los datos de contacto en nuestro sitio web.</li>
                    </ul>
                </ol>
                <p>En caso de requerimientos legales, consultas, o cualquier asunto relacionado con Tec-Trash, nuestra empresa se encuentra ubicada en la siguiente dirección:</p>
                <br />
                <center>
                    <p>
                        Miguel Hidalgo 228,
                        <br />Zona Centro,
                        <br />Código Postal 79000
                        <br />Cd. Valles, S.L.P.
                    </p>
                </center>
                <br />
                <p>Esta dirección física constituye el núcleo central de nuestras acciones y donde nos reunimos para tomar decisiones importantes para esforzamos por ofrecer un servicio excepcional a nuestros clientes y empresas asociadas de Tec-Trash, además proporciona un punto de contacto tangible para cualquier interacción que requiera una presencia física.</p>
            </div>
        </ VentanaEmergente>
    )
}