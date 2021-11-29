/**
 * 
 * https://jsonplaceholder.typicode.com/users
 * Crear una tabla dinamica que almacene por filas el nombre y el apellido, el email y la geolocalización
 * de todos los usuarios de ese fichero json.
 * Crear una cookie que contenga el nº de usuarios que he insertado en la tabla.
 * Crear utilizanco web storage una clave que contenga el código de colores asignado a vuestra página web
 * y a la tabla
 */


const JSONData = 
'[{"id":1,"name":"Leanne Graham","username":"Bret"},{"id":2,"name":"Lincolm","username":"Abraham"}]';

const objData = JSON.parse(JSONData);

const tabla = document.querySelector("table");


// for(let i = 0; i < objData.length; i++) {
//     let fila = document.createElement("tr");
//     for(let key in objData[i]) {
//         let columna = document.createElement("td");
//         let texto = document.createTextNode(objData[i][key]);
//         columna.appendChild(texto);
//         fila.appendChild(columna);
//     }
//     tabla.appendChild(fila);
// }

for(let user of objData) {
    let fila = document.createElement("tr");
    for(let key in user) {
        let columna = document.createElement("td");
        let texto = document.createTextNode(user[key]);
        columna.appendChild(texto);
        fila.appendChild(columna);
    }
    tabla.appendChild(fila);
}


function addCookie(){
    document.cookie = `Usuarios = ${objData.length}`;
    let fecha = new Date();
}
