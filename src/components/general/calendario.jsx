import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale'; // Se importa el idioma español
import 'react-datepicker/dist/react-datepicker.css';

export function Calendario({ fechaProgramada, setFechaProgramada, titulo }) {
    const mañana = new Date()
    mañana.setDate(mañana.getDate() + 1)

    return (
        <div className='calendario_container'>
            {titulo && <p className='calendario_title'>{titulo}</p>}
            <div className="calendario">
                <DatePicker
                    className='calendario_input'
                    closeOnScroll={true} // Se cierra el calendario al hacer scroll
                    dateFormat='dd MMMM yyyy, h:mm aa' // Se define el formato de la fecha
                    filterDate={isWeekday => isWeekday.getDay() !== 0 && isWeekday.getDay() !== 6} // Filtra los días que no son laborales {sábado y domingo}
                    filterTime={isTimeDisabled => isTimeDisabled.getHours() >= 14 && isTimeDisabled.getHours() < 22} // Filtra las horas que no son laborales {14:00 - 22:00}
                    locale={es} // Se asigna el idioma español
                    minDate={mañana} // No se puede seleccionar el día de hoy ni los anteriores
                    onChange={fechaSeleccionada => setFechaProgramada(fechaSeleccionada)} // Se asigna la fecha seleccionada al estado
                    selected={fechaProgramada} // Se asigna la fecha programada al calendario
                    showIcon // Muestra el icono del calendario
                    showTimeSelect // Muestra la opción de seleccionar la hora
                />
            </div>
        </div>
    )
}