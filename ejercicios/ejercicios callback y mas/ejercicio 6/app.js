
divMostrarUsuarios = document.querySelector("#mostrarUsuarios");

const listaUsuarios = [
    {id: 1, nombre: "Luis", codPais: 3},
    {id: 2, nombre: "Alfred", codPais: 1},
    {id: 3, nombre: "Pascal", codPais: 2},
];

function mostrarUsuarios(){
    while(divMostrarUsuarios.children.length != 0){
        divMostrarUsuarios.removeChild(divMostrarUsuarios.firstChild);
    }

    let ul = document.createElement("ul");
    
    for(let indice in listaUsuarios){
        let li = document.createElement("li");

        for(let info in listaUsuarios[indice]){
            let texto = document.createTextNode(`${info} : ${listaUsuarios[indice][info]}  `);
            li.appendChild(texto);
        }
        ul.appendChild(li)
    }
    divMostrarUsuarios.appendChild(ul);
}

setTimeout(() => {
    mostrarUsuarios();
}, 3000);
