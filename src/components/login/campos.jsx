export function CamposRegistro(props){
    
    if(props.urlImg ){
        return(
            <div className="bloques-campos">
                <img className = "iconitos" src={props.urlImg}/>
                <input type={props.tipo} value={props.nombJson} name={props.nombre} id={props.id} onChange={props.evento} required/>
                <label>{props.nombreCampo}</label> 
                <img className = "ojito" id = {props.idOjito} onClick = {props.eventoClic} src={props.urlImg2}/>     
            </div>
        )
    }else{
        return(
            <div className="bloques-campos">
                <input type={props.tipo} value={props.nombJson} name={props.nombre} id={props.id} onChange={props.evento} required/>
                <label >{props.nombreCampo}</label>  
                    
            </div>
            
        )

    }

    
}
export default CamposRegistro

