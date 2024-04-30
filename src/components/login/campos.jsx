export function CamposRegistro(props){

    if(props.urlImg){
        return(
            <div className="bloques-campos">
                <img className = "iconitos" src={props.urlImg}/>
                <input type={props.tipo} required/>
                <label>{props.nombreCampo}</label>      
            </div>
            
        )
    }else{
        return(
            <div className="bloques-campos">
                <input type={props.tipo} required/>
                <label>{props.nombreCampo}</label>      
            </div>
            
        )

    }

    
}

export default CamposRegistro

