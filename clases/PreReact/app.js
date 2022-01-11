// 1.- Templates literals

// const nombre = "Carlos";
// const apellidos = "García";
// console.log(`${nombre} --- ${apellidos}`);

// function Componente({backgroundColor}){
//     return(
//         <div className = {` `}></div>
//     )
// }

// 2.- Short and property names (Acortadores de nombres)
const nombre = "Carlos";
const apellidos = "García";
const edad = 38;

// const alumno = {
//     nombre: nombre,
//     apellidos: apellidos,
//     edad: edad,
// }

const alumno = {
    nombre,
    apellidos,
    edad,
}

// 3.- Arrows function

const datos = () => {
    return "hola";
}

const datos2 = () => "hola";

// 4.- Destructuring

const figura = {
    x: 10,
    y: 10,
}

function area(figura){
    return figura.x * figura.y;
}

function area2(figura){
    const { x, y }  = figura;
    return x * y ;
}

const area3 = ({ x, y }) => x*y;
area3(figura);

// 5.- Parámetros por defecto
    function suma(a = 0, b = 0){
        return a+b;
    }
    console.log(suma(2));

// 6.- El operador spread

const array = [1, 2, 3, 4, 5];
const otroArray = [6, 7, 8, 9, 10];

const nuevoArray = array.concat(otroArray);
const nuevoArray2 = [...array, ...otroArray];

// console.log(nuevoArray2);

// 7.- 
// 8.- Operador ternario *if corto*
// 9.- Pormise async await
// 10.- Nullish coalescing operator (??)
function sumaNullish (a, b){
    a = a ?? 0; //Si a es null o undefined, obetendrá valor 0, en caso contrario, el valor definido anteriormente
    b = b ?? 0; //Si b es null o undefined, obetendrá valor 0, en caso contrario, el valor definido anteriormente
    return a+b;
}
console.log(sumaNullish(2, 5));
