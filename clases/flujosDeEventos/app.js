/**
 * @author Zijie (David) Cheng
 * @description
*/

const eventosDiv = document.querySelectorAll(".flujos-eventos div")
//console.log(eventosDiv);

function info(evento){
    console.log(`Hola, soy el evento ${this.className} y el click lo realizó ${evento.target.className}`);
}

eventosDiv.forEach((div) => {
    //div.addEventListener("click", info);
    div.addEventListener("click", info, {
        capture: true,
        //once: true, ->Como el nombre indica, el evento solo se ejecuta una vez
    });
});

