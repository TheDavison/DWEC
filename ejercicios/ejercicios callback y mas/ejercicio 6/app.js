
divMostrarUsuarios = document.querySelector("#mostrarUsuarios");

const listaUsuarios = [
    {id: 1, nombre: "Luis", codPais: 3},
    {id: 2, nombre: "Alfred", codPais: 1},
    {id: 3, nombre: "Pascal", codPais: 2},
];

const listaPaises = {1:"Francia", 2:"España"};

function obtenerUsuarios(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaUsuarios)
        }, 3000)
    })
}

function obtenerPaises(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaPaises)
        }, 2000)
    })
}

obtenerUsuarios()
    .then((usuarios) => {console.log("Usuarios:", usuarios)})


obtenerPaises()
    .then((paises => {console.log("Paises:", paises)}))


const misUsuarios = obtenerUsuarios();    

misUsuarios
    .then((usuarios) => {console.log("Usuarios:", usuarios)})
    .then((paises => {console.log("Paises:", paises)}));

function mostrarUsuarios(){
    while(divMostrarUsuarios.children.length != 0){
        divMostrarUsuarios.removeChild(divMostrarUsuarios.firstChild);
    }

    let ul = document.createElement("ul");
    
    for(let indice in listaUsuarios){
        let li = document.createElement("li");

        for(let info in listaUsuarios[indice]){
            let texto = document.createTextNode(`${info} : ${listaUsuarios[indice][info]}`);
            li.appendChild(texto);
        }
        ul.appendChild(li)
    }
    divMostrarUsuarios.appendChild(ul);
}

setTimeout(() => {
    mostrarUsuarios();
}, 3000);
