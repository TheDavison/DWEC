let tareas = new Array();
let tareasElminadas = new Array();
let contadorTareas = 0;

const divMostrar = document.querySelector("#verTarea");
const divContador =  document.querySelector("#contador");
const inputTarea = document.querySelector("#nombreTarea");

function addT(){
    if(tareas.indexOf(inputTarea.value) != -1){
        console.log("He entrado en el if de addT");
        cambiarColor("red");
    }else{
        let tarea = {
            nombre: inputTarea.value,
            fecha: new Date()
        }
        tareas.push(tarea);
        contadorTareas++;
    }
    mostrar();
}

function mostrar(buscar = ""){
    while(divMostrar.children.length != 0){
        divMostrar.removeChild(divMostrar.firstChild);
    }

    if(divContador.textContent){
        divContador.removeChild(divContador.firstChild);
    }

    for(let tarea in tareas){
        if(tareas[tarea].nombre.startsWith(buscar)){
            let pTarea = document.createElement("p");
            let textoTarea = document.createTextNode(tareas[tarea].nombre);
            pTarea.appendChild(textoTarea);
            divMostrar.appendChild(pTarea);
        }
    }

    let texto = document.createTextNode("Número de tareas: "+contadorTareas);
    divContador.appendChild(texto); 
}   


function borrar(event){
    if(event.target.matches("p")){
        let borrarP = event.target.textContent;
        for(let tarea in tareas){
            if(tareas[tarea].nombre == borrarP){
                tareasElminadas.push(tareas[tarea]);
                console.log(tareasElminadas[tareasElminadas.length-1].nombre);
                tareas.splice(tarea, 1);
            }
        }
        mostrar()
    }
}

function cambiarColor(color){
    document.querySelector("#nombreTarea").style.backgroundColor = color;
}

document.getElementById("addTarea").addEventListener("click", addT, false);
document.getElementById("nombreTarea").addEventListener("keydown", (e) => {
    if(e.code == "Enter"){
        addT();
    }
});

document.getElementById("nombreTarea").addEventListener("click", (e) => {
    cambiarColor("white");
});
document.getElementById("verTarea").addEventListener("click", borrar, false);

document.getElementById("buscar").addEventListener("keydown", (e)=>{
    console.log(document.getElementById("buscar").innerHTML);
    mostrar(document.getElementById("buscar").textContent);
});