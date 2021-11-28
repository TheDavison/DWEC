/**
 * @author Zijie (David) Cheng
 * @description Ejercicio 3 de la relación de ejercicios "EJERCICIOS ESTRUCTURAS DE DATOS"
 */
let caja = document.querySelector("#expresion");
let personas = new Set();

function realizar(){
    let expresion = new RegExp();
    expresion = /[0-9]{8}[A-Z]{1}/;
    if(expresion.test(caja.value)){
        color("green");
        let nombre = prompt("Nombre de la persona con este DNI");
        usuario(nombre, caja.value);
    }else{
        color("red")
    }
    caja.value = "";
}

/**
 * Cambia el color del input donde introducimos el DNI al color indicado. 
 * @param {string} color 
 */
function color(color = "white"){
    caja.style.backgroundColor = color;
}

/**
 * Añade al set un objecto, con el nombre y DNI recibido como parámetros. 
 * Del set substraemos la información y la añadimos a los p para mostrarlos. 
 * Y por último, utilizamos size para mostrar el nº de personas.
 * @param {string} nombre 
 * @param {string} dni 
 */
function usuario(nombre, dni){
    let persona = {
        nombre: nombre,
        dni: dni
    };

    personas.add(persona);

    console.log(persona);

    
    let p2 = document.querySelector("#p2");
    let p3 = document.querySelector("#p3");
    console.log(personas.size);
    
    if(personas.size == 1){
        p2.removeChild(p2.firstChild);    
    }
    p3.removeChild(p3.firstChild);
    let nuevoP2 = document.createElement("p");
    nuevoP2.appendChild(document.createTextNode("Nombre: "+persona.nombre+", con DNI: "+persona.dni));
    
    p2.appendChild(nuevoP2);
    
    p3.appendChild(document.createTextNode(personas.size));

}

document.querySelector("#ejecutar").addEventListener("click", realizar, false);