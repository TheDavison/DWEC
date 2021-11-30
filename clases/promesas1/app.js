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

//PROMESAS
//las promesas se construyen con new Promise(resolve, reject)
const buscarPelicula = (id)=>{
    const pelicula = peliculas.find((item) => item.id === id);
    return new Promise((resolve, reject)=>{
        if(pelicula){
            resolve(pelicula);
        }else{
            reject("No existe la película con ID: " + id);
        }
    });
};

/**
 * Para obtener los resolves tengo que llamar a .then
 * Para obtener los reject tengo que llamar a .catch
 * También puedo usar .finally() que se mostraría siempre
 */

setTimeout(()=>{
    buscarPelicula(2)
    .then((pelicula)=>{console.log(pelicula)})
    .catch((error)=>{console.log(error)});
}, 2000)