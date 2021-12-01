/**
 * @author Cheng, Zijie (David)
 */

let tareas = new Set();
let tareasElminadas = new Array();
let contadorTareas = 0; // El contador que nos dice cuantas tareas se han introducido

function addT(){
    const nombreT = document.querySelector("#nombreTarea"); //input donde escribimos la tarea
    const divMostrar = document.querySelector("#verTarea"); // div donde vemos las tareas
    const contT =  document.querySelector("#contador"); //div al final que lleva el nº de tareas

    if(tareas.has(nombreT.value)){
        cambiarColor("red");//cambiar el fondo del input a rojo cuando la tarea está repetida
    }else{
        tareas.add(nombreT.value);//añadimos la tarea al set con todas las tareas

        /*
        Creamos una tag p, que contendrá la tarea.
        Creamos un text node que guardará lo que escribamos en el input.
        Hacemos el texnode con la tarea hijo del p que creamos.
        Hacemos la tag p hijo del div donde se mostrarán todas las tareas.
        */
        let nuevaTarea = document.createElement("p");
        let texto = document.createTextNode(nombreT.value);
        nuevaTarea.appendChild(texto);
        divMostrar.appendChild(nuevaTarea);

        contadorTareas++;
    }

    if(contT.textContent){
        contT.removeChild(contT.firstChild);//Si el contador tiene ya algo como valor, lo borrará, si no tiene nada, no entrará aquí.
    }
    //Mostramos el contador de tareas
    let texto = document.createTextNode("Número de tareas: "+contadorTareas);
    contT.appendChild(texto);

}

function borrar(event){
    if(event.target.matches("p")){ //Si pulsamos en un p (que será una tarea), entrará, si pulsamos cualquier otra cosa, no entrará en el if, puesto que solo entran los p.
        const divMostrar = document.querySelector("#verTarea");
        let borrarP = event.target;
        
        
        //Añadimos el contenido del p pulsado al array de las tareas elminadas y lo mostramos en la consola de desarrollador.        
        tareasElminadas.push(borrarP.textContent);
        console.log(tareasElminadas[tareasElminadas.length-1]);

        //Por último, borramos la tarea del set y del div donde se muestran todas las tareas
        tareas.delete(borrarP.textContent);
        divMostrar.removeChild(borrarP);
    }
}


function cambiarColor(color = "white"){
    /*Cuando hacemos click en el input para escribir una tarea,
    cambiará el color de fondo a blanco. 
    Se ve su funcionalidad cuando intentamos introducir una tarea ya existente
    e intentamos corregirlo, puesto que el fondo pasará de rojo a blanco.
    */
     document.querySelector("#nombreTarea").style.backgroundColor = color;
}

document.getElementById("addTarea").addEventListener("click", addT, false);

document.getElementById("nombreTarea").addEventListener("keydown", (e) => {
    if(e.code == "Enter"){
        addT();
    }
});

document.getElementById("nombreTarea").addEventListener("click", (e) =>{
    cambiarColor("white");
});
document.getElementById("verTarea").addEventListener("click", borrar, false);
