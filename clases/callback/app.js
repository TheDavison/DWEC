/**
 * 
 * @description Uso del CallBack
 * Una función de CallBack es una función que se pasa a otra función como argumento (Es el último argumento),
 * que posteriormente es invocado dentro de una función externa.
 */

const peliculas = [
    {
        id: 1,
        titulo: "titulo película 1",
        sinopsis: "contenido película 1"
    },
    {
        id: 2,
        titulo: "titulo película 2",
        sinopsis: "contenido película 2"
    }
];

const buscarPelicula = (id, callback) => {
    const pelicula = peliculas.find(item => item.id === id);
    if(pelicula) {
        callback(pelicula);
    }else{
        callback("No se ha encontrado la palícula con ID: " + id);
    }
    
}

setTimeout(()=>{
    buscarPelicula(3, (pelicula)=>{
        console.log(pelicula);
        buscarPelicula(2, (pelicula)=>{
            console.log(pelicula);
            buscarPelicula(1, (pelicula)=>{
                console.log(pelicula);
            });
        });
    });
}, 3000)


console.log("Estoy al final");


// let temporizador = setInterval(()=>{
//     let p = document.createElement("p");
//     let texto = document.createTextNode(new Date().toLocaleTimeString());
    
//     if(document.querySelector("div").firstChild){
//         document.querySelector("div").removeChild(document.querySelector("div").firstChild);
//     }
//     p.appendChild(texto);
//     document.querySelector("div").appendChild(p);
// }, 1000);