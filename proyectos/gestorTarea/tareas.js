/**
 * @author Cheng, Zijie (David)
 */

let tareas = new Set();

function mostrar(){
    const divMostrar = document.querySelector("#verTarea");

    while(divMostrar.firstChild){
        divMostrar.removeChild(divMostrar.firstChild);
    }

    tareas.forEach(tarea => {
        let nuevaTarea = document.createElement("p");
        let texto = document.createTextNode(tarea);
        nuevaTarea.appendChild(texto);
        divMostrar.appendChild(nuevaTarea); 
    
    });
}

function addT(){
    const nombreT = document.querySelector("#nombreTarea");
    
    if(tareas.has(nombreT.value)){
        nombreT.style.backgroundColor = "red";
    }else{
        tareas.add(nombreT.value);
    }

    mostrar();
    
}

function borrar(event){
    let borrarLi = event.target;
    
    tareas.delete(borrarLi.textContent);
    mostrar();
}


function cambiarColor(){
    document.querySelector("#nombreTarea").style.backgroundColor = "white";
}

document.getElementById("addTarea").addEventListener("click", addT, false);
document.getElementById("nombreTarea").addEventListener("click", cambiarColor, false);
document.getElementById("verTarea").addEventListener("click", borrar, false);
