/**
 * @author Zijie (David) Cheng
 * @description Ocultar/Mostrar una lista, que es hija, de un elemento de otra lista
*/
function accion(e){
    if(e.target.matches("li")){
        if(e.target.children[0].style.display == "none"){
            e.target.children[0].style.display = "block";
        }else{
            e.target.children[0].style.display = "none";
        }
        
    }
}

document.addEventListener("click", accion);