/**
 * @author Ziji (David) Cheng
 * @description Crear un efecto acordeón cuando pulsemos sobre un botón
 */

const eleAcordeon = document.getElementsByClassName("acordeon");

for(let elemento of eleAcordeon){
    elemento.addEventListener("click", (e)=>{
        let panel = elemento.nextElementSibling;
        
        if(panel.style.display=="block"){
            panel.style.display="none";
        }else{
            panel.style.display="block";
        }


    });
    
    elemento.addEventListener("mouseenter", (e)=>{
        elemento.style.backgroundColor = "orange";
    });

    elemento.addEventListener("mouseleave", (e)=>{
        elemento.style.backgroundColor = "#fed120";
    });
}

