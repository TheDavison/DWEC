/**
 * @author Ziji (David) Cheng
 * @description Escuchar los eventos del DOM
 */

const boton = document.querySelector("#boton");
const caja = document.querySelector("#caja");



boton.addEventListener("click", (e) => {
    //e             hace referencia  al evento que genera la acción
    //e.target      elemento html que ha generado la acción
    console.log(`Has pulsado ${e.target}`);
});

boton.addEventListener("dblclick", (e) => {
    caja.classList.replace("red", "blue");
});

caja.addEventListener("mouseenter", (e) => {
    //Método para cambiar o reemplazar una clase de CSS classList.replace(original, nuevo)
    caja.classList.replace("red", "blue");
});

caja.addEventListener("mouseleave", (e) => {
    caja.classList.replace("blue", "red");
});

document.addEventListener("keydown", (e) => {
    if(e.code == "KeyG"){
        caja.classList.replace("red", "green");
    }
});
