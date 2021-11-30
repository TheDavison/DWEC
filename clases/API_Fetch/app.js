/**
 * La API Fetch proporciona una interfaz para recuperar recursos de internet.
 * Sustituye a XMLHttRequest
 */
const tabla = document.querySelector("table")

// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) =>response.json())
//     .then(json => console.log(json.map((accion) => {
//         let fila = document.createElement("tr");
        
//         for(let argumento in accion){
//             let columna = document.createElement("td");
//             let texto = document.createTextNode(accion[argumento]);
//             columna.appendChild(texto);
//             fila.appendChild(columna);
//         }
//         tabla.appendChild(fila);
//     })));

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then(json => console.log(json.map((accion) => {
//         let fila = document.createElement("tr");

//         for(let argumento in accion){
//             if(argumento == "id"){
//                 let columna = document.createElement("td");
//                 let texto = document.createTextNode(accion[argumento]);
//                 columna.appendChild(texto);
//                 fila.appendChild(columna);
//             }else if(argumento == "thumbnailUrl"){
//                 let columna = document.createElement("td");
//                 let img = document.createElement("img");
//                 img.setAttribute("src", accion[argumento]);
//                 columna.appendChild(img);
//                 fila.appendChild(columna);
//             }  
//         }
//         tabla.appendChild(fila);
//     })));

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => console.log(json.map((accion) => {
        let fila = document.createElement("tr");
        
        for(let argumento in accion){
            if(argumento == "name"){
                let columna = document.createElement("td");
                let texto = document.createTextNode(accion[argumento]);
                columna.appendChild(texto);
                fila.appendChild(columna);
            }else if(argumento == "email"){
                let columna = document.createElement("td");
                let texto = document.createTextNode(accion[argumento]);
                columna.appendChild(texto);
                fila.appendChild(columna);
            }else if(argumento == "address"){
                for(let address in accion[argumento]){
                    if(address == "geo"){
                        for(let geo in accion[argumento][address]){
                            
                        }
                    }
                }
            }
        }
    })));