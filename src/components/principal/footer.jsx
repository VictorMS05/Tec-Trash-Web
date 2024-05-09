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

    function handleAvisoPrivacidad() {
        setAvisoVisible(!isAvisoVisible);
    }

    return (
        <footer>
            <div id="contacto_principal_container">
                <div className='contacto_principal'>
                    <img src={telefono} alt="Icono teléfono" />
                    <p>481-810-1989</p>
                </div>
                <div className='contacto_principal'>
                    <img src={correo_electronico} alt="Icono correo electrónico" />
                    <p>tectrash.contacto@gmail.com</p>
                </div>
            </div>
            <div id="informacion_adicional">
                <p>Tec-Trash © 2024</p>
                <div id="redes_sociales_container">
                    <a href="#"><img src={facebook} alt="Icono Facebook" /></a>
                    <a href="#"><img src={x} alt="Icono X" /></a>
                    <a href="#"><img src={Instagram} alt="Icono Instagram" /></a>
                    <a href="#"><img src={WhatsApp} alt="Icono WhatsApp" /></a>
                    <a href="#"><img src={TikTok} alt="Icono TikTok" /></a>
                </div>
                <p id='aviso_privacidad_button' onClick={ handleAvisoPrivacidad }>Aviso de privacidad</p>
                {isAvisoVisible && <AvisoPrivacidad onClose={handleAvisoPrivacidad} />}
            </div>
        </footer>
    )
}