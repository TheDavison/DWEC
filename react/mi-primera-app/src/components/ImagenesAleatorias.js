import react, {useState} from 'react';
import "./ImagenesAleatorias.css";

const ImagenesAleatorias = (props) => {
    //parte funcional de mi componente
    const [enabled, setEnabled] = useState (true);

    if(props.num == null){
        let src = "https://randomuser.me/api/portraits/lego/0.jpg";
    }

    const src = "https://randomuser.me/api/portraits/women/"+{numero}+".jpg";

    let classNameImg = enabled ? "":"disabled"
    
    let classNamePicture = "";
    if(props.size==="small"){
        classNamePicture = "is-small";
    }else if(props.size==="large"){
        classNamePicture = "is-large";
    }
    
    //parte de pintado
    return (
        <picture className={classNamePicture}>
            <img 
                src={src}
                alt="guarrilla"
                className={classNameImg}
                onClick={() => setEnabled(!enabled)}>
            </img>
            <h3>{props.nombre}</h3>
        </picture>
    )
}

export default ImagenesAleatorias;