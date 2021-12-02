/**
 * @Author Zijie(Cheng) David
 * @description Gestor de tareas
 */

let tareas = new Array();
let tareasElminadas = new Array(); 
let contadorTareas = 0;

const divMostrar = document.querySelector("#verTarea"); //div donde se mostrarán todas las tareas guardadas en el array tareas
const divContador =  document.querySelector("#contador");
const inputTarea = document.querySelector("#nombreTarea");

/**
 * Primero borra todas las tareas que haya en la página y el mensaje del contador, tras eso
 * puede hacer dos cosas dependiendo de si se ha pasado parámetro o no:
 * El listado se hace añadiendo la fecha de la tarea al div seguido de una etiqueta p
 * en la que hemos añadido cada tarea
 * Si no se pasa parámetro:
 *  Listará todas las tareas guardadas en el array tareas.
 * Si se pasa parámetro:
 *  Listará todas las tareas que empiecen por el string pasado como parámetro
 * @param {String} buscar 
 */
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

            let fecha = document.createTextNode(tareas[tarea].fecha)

            let textoTarea = document.createTextNode(tareas[tarea].nombre);
            
            divMostrar.appendChild(fecha);

            pTarea.appendChild(textoTarea);
            

            divMostrar.appendChild(pTarea);
        }
    }

    let texto = document.createTextNode("Número de tareas: "+contadorTareas);
    divContador.appendChild(texto); 
}

/**
 * Cambia el color del input, donde escribimos la tarea que queremos registrar, al color
 * que se pase como parámetro (en inglés)
 * @param {String} color 
 */
function cambiarColor(color){
    inputTarea.style.backgroundColor = color;
}

/**
 * Función que hace de "filtro", si la tarea no está repetida se creará un objeto con la tarea
 * y la fecha en la que se registró, y la guardará en el array; en caso contrario solo cambiará 
 * el color del input a rojo con la función cambiarColor
 */
function addT(){
    let existe = false;

    for(let tarea in tareas){
        if(tareas[tarea].nombre == inputTarea.value){
            existe = true;
        }
    }

    if(existe){
        cambiarColor("red");
    }else{
        
        let tarea = {
            nombre: inputTarea.value,
            fecha: new Date().toLocaleDateString()
        }
        tareas.push(tarea);
        contadorTareas++;
    }
    mostrar();
    inputTarea.value= "";
}

/**
 * Si hemos hecho click sobre una etiqueta p (solo las tareas tienen etiquetas p).
 * Añadiremos la tarea asociada a dicha etiqueta p al array de tareasElminadas,
 * la mostramos por consola de desarrollador y la borramos del array de tareas.
 * Acto seguido "actualizamos" la página con el metodo mostrar() 
 * @param {object} event 
 */
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
        mostrar();
    }
}


// ---------------EVENTOS--------------
/**
 * Cuando hacemos click sobre el botón de crear tarea estamos llamando a este evento:
 */
document.querySelector("#addTarea").addEventListener("click", (e)=>{
    if(inputTarea.value != ""){
        addT()
    }
});

/**
 * Hace lo mismo que el evento anterior pero si en vez de hacer click sobre el botón, 
 * presionamos la tecla enter
 */
inputTarea.addEventListener("keydown", (e) => {
    if(e.code == "Enter" && inputTarea.value != ""){
        addT();
    }
});

/**
 * Cuando hacemos click sobre el input de registro de tareas cambiará el color a blanco,
 * independientemente del color que tenía.
 */
inputTarea.addEventListener("click", (e) => {
    cambiarColor("white");
});

/**
 * Hace lo mismo que el evento anterior solo que cambia el color cuando escribimos la primera
 * letra de la siguiente tarea que se intenta registrar
 */
inputTarea.addEventListener("keyup", (e)=>{
    if(inputTarea.value.length > 0){
        cambiarColor("white");
    }
});

/**
 * Cuando hacemos click sobre alguna parte del div donde se muestran las tareas.
 * No importa que no hagamos click sobre una tarea, ya que la funcion borrar solo acepta que 
 * haamos click sobre las etiquetas p
 */
divMostrar.addEventListener("click", borrar, false);

/**
 * Buscador, cada vez que hacemos pulsamos una tecla, el buscador borrará todas las tareas
 * listadas en el div, y buscará las tareas con la nueva condición
 */
document.querySelector("#buscar").addEventListener("keyup", (e)=>{
    mostrar(document.querySelector("#buscar").value);
});

