import { useState } from 'react';
import { AvisoPrivacidad } from './aviso_privacidad';
import telefono from '../../images/icon_footer_telefono.png';
import correo_electronico from '../../images/icon_footer_correo.png';
import facebook from '../../images/Facebook.png';
import x from '../../images/logo_x_login.png';
import Instagram from '../../images/Insta.png';
import WhatsApp from '../../images/Whatsapp.png';
import TikTok from '../../images/Tiktok.png';

export function Footer() {
    const [isAvisoVisible, setAvisoVisible] = useState(false);

    function manejarAvisoPrivacidad() {
        setAvisoVisible(!isAvisoVisible);
    }

    return (
        <footer>
            <div id="contacto_principal_container">
                <div className='contacto_principal'>
                    <a href="tel:4818101989">
                        <img src={telefono} alt="Icono teléfono" />
                    </a>
                    <p>481-810-1989</p>
                </div>
                <div className='contacto_principal'>
                    <a href="mailto:tectrash.contacto@gmail.com?subject=Duda, queja o sugerencia sobre la empresa" target="_blank" rel="noopener noreferrer">
                        <img src={correo_electronico} alt="Icono correo electrónico" />
                    </a>
                    <p>tectrash.contacto@gmail.com</p>
                </div>
            </div>
            <div id="informacion_adicional">
                <p className='informacion_adicional_label'>Tec-Trash © 2024</p>
                <div id="redes_sociales_container">
                    <a href="https://www.facebook.com/profile.php?id=61559336495368&mibextid=ZbWKwL" target='_blank' rel='noreferrer'>
                        <img src={facebook} alt="Icono Facebook" />
                    </a>
                    <a href="https://x.com/Tec_Trash?t=9v0lxhZaqtiX1-VHL9-LHg&s=08" target='_blank' rel='noreferrer'><img src={x} alt="Icono X" /></a>
                    <a href="https://www.instagram.com/tec__trash?igsh=MXYyNmx6bjZ2ajFyMA==" target='_blank' rel='noreferrer'>
                        <img src={Instagram} alt="Icono Instagram" />
                    </a>
                    {/* Se utiliza la API de WhatsApp para redireccionar el enlace al chat del número de teléfono asignado al final de la URL */}
                    <a href="https://api.whatsapp.com/send?phone=524811283073" target='_blank' rel='noreferrer'>
                        <img src={WhatsApp} alt="Icono WhatsApp" />
                    </a>
                    <a href="https://www.tiktok.com/@tec.trash?is_from_webapp=1&sender_device=pc" target='_blank' rel='noreferrer'>
                        <img src={TikTok} alt="Icono TikTok" />
                    </a>
                </div>
                <button className='informacion_adicional_label' onClick={manejarAvisoPrivacidad}>Aviso de privacidad</button>
                {isAvisoVisible && <AvisoPrivacidad estaActivo={manejarAvisoPrivacidad} />}
            </div>
        </footer>
    )
}