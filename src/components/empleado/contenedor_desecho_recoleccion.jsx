import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ContenedorDesechoRecoleccion({ idCliente, idDesecho, pesoTotal, costoTotal }) {
    const [cliente, setCliente] = useState({});
    const [direccionCliente, setDireccionCliente] = useState('');
    const [desecho, setDesecho] = useState({});
    const [nombreCliente, setNombreCliente] = useState('');
    // const [inputFoto, setInputFoto] = useState('');
    const [inputPeso, setInputPeso] = useState(0);
    const [inputColor, setInputColor] = useState('#000000');
    const [inputEstatus, setInputEstatus] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://tectrash.pythonanywhere.com/cliente/' + idCliente)
            .then(response => response.json())
            .then(data => {
                var direccionCliente = '';
                setCliente(data.data[0]);
                direccionCliente = data.data[0].calle1 + ' ' + data.data[0].numeroExterior1 + ' ';
                if (data.data[0].numeroInterior1 !== 0) {
                    direccionCliente += data.data[0].numeroInterior1 + ' ';
                }
                direccionCliente += data.data[0].colonia1 + ' ' + data.data[0].referencia1;
                setDireccionCliente(direccionCliente);
                setNombreCliente(data.data[0].nombre + ' ' + data.data[0].apellidoPaterno + ' ' + data.data[0].apellidoMaterno);
                return fetch('https://tectrash.pythonanywhere.com/desecho/' + idDesecho);
            })
            .then(response => response.json())
            .then(data => {
                setDesecho(data.data[0]);
            })
            .catch(error => {
                console.error('Hubo un error al solicitar los desechos del cliente');
            });
    });

    function completarRegistroDesecho(event) {
        event.preventDefault();

        fetch('https://tectrash.pythonanywhere.com/desecho/' + idDesecho + '/completar-registro-desecho', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pesoReal: inputPeso,
                color: inputColor,
                estatusFuncional: inputEstatus,
                pago: (inputPeso * 100)
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('status')) {
                    navigate('/empleado/recoleccion');
                }
            })
            .catch(error => {
                console.error('Hubo un error al completar el registro');
            });
    }

    return (
        <div className="desecho_recoleccion_container">
            <p><span>Nombre del cliente:</span> {nombreCliente}</p>
            <p><span>Dirección:</span> {direccionCliente}</p>
            <p><span>Código postal:</span> {cliente.codigoPostal1}</p>
            <p><span>Desecho:</span> {desecho.nombre}</p>
            <p><span>Modelo:</span> {desecho.modelo}</p>
            <p><span>Marca:</span> {desecho.marca}</p>
            <hr />
            <form onSubmit={completarRegistroDesecho}>
                <label htmlFor="foto_desecho">Haz clic para subir una foto del desecho</label>
                <input type="file" id="foto_desecho" accept="image/*" hidden />
                <div className="contenedor_desecho_input">
                    <span>Peso: <input type="number" min='0' max='2000' step='0.1' value={inputPeso} onChange={event => setInputPeso(event.target.value)} /> kg</span>
                    <span>Color: <input type="color" value={inputColor} onChange={event => setInputColor(event.target.value)} /></span>
                    <span>Estatus: <input type="radio" name='estatus' onChange={() => setInputEstatus(1)} />Funciona     <input type="radio" name='estatus' onChange={() => setInputEstatus(0)} />No funciona</span>
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )
}