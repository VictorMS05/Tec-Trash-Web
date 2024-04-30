export function CamposRegistro(props){

    if(props.tipoCampo == "conIcono"){
        return(
            <div className="bloques-campos">
                <img className = "iconitos" src={props.urlImg}/>
                <input type="text" required/>
                <label>{props.nombreCampo}</label>      
            </div>
            
        )
    }else{
        return(
            <div className="bloques-campos">
                <input type="text" required/>
                <label>{props.nombreCampo}</label>      
            </div>
            
        )

    }

    
}

export default CamposRegistro

