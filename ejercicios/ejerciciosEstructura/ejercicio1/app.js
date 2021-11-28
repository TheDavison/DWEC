/**
 * @author Zijie (David) Cheng
 * @description Ejercicio 1 de la relación de ejercicios "EJERCICIOS ESTRUCTURAS DE DATOS"
 */

let tareas = new Set();
let expresion = new RegExp();

/**
 * Comprueba la validez de la información que se recibe en el input del nombre de la tarea
 * @param {string} nombre 
 */
function comprobarNombre(nombre){
    expresion = /[A-Za-zÀ-ý]+/gm;
    return expresion.test(nombre);
}

/**
 * Comprueba la validez de la información que se recibe en el input de la duración de la tarea
 * @param {string} duracion 
 */
function comprobarDuracion(duracion){
    expresion = /([0-1][0-2]|[0-9]):([0-6][0-9]|[0-9]):[0-6][0-9]/;
    return expresion.test(duracion); 
}

/**
 * Comprueba la validez de la información que se recibe en el input de la fecha de la tarea
 * @param {string} fecha 
 */
function comprobarFecha(fecha){
    expresion = /([0-1][0-2]|[1-9])\/([0-3][0-9]|[1-9])/;
    return expresion.test(fecha); 
}

/**
 * Muestra la tarea pasado como parámetro
 * @param {object} tarea 
 */
function mostrar(tarea){
    let div = document.querySelector("#mostrar");
 
    let p = document.createElement("p");
    p.innerHTML = 
        `<h2>${tarea.nombre}</h2> 
        Duración: ${tarea.duracion}<br/>
        Fecha límite: ${tarea.fechaLimite}<br/>
        Completado: ${tarea.completado}`;
    div.appendChild(p);
    
}

function tarea(){
    let cajaNombre = document.querySelector("#nombre");
    let cajaDuracion = document.querySelector("#duracion");
    let cajaFecha = document.querySelector("#fecha");
    let radio = document.querySelector("#completado");
    let finished = radio.checked;
    
    if(!comprobarNombre(cajaNombre.value)){
        cajaNombre.focus();
    }else if(!comprobarDuracion(cajaDuracion.value)){
        cajaDuracion.focus();
    }else if(!comprobarFecha(cajaFecha.value)){
        cajaFecha.focus();
    }else{
        let tarea ={
            nombre: cajaNombre.value,
            duracion: cajaDuracion.value,
            fechaLimite: fecha.value,
            completado: finished
        };
        tareas.add(tarea);
        mostrar(tarea);
    }

    cajaNombre.value = "";
    cajaDuracion.value = "";
    cajaFecha.value = "";
    radio.checked = false;
}

document.querySelector("#boton").addEventListener("click", tarea, false);