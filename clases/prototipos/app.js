// function Animal(nombre, genero){
//     this.nombre = nombre;
//     this.genero = genero;

    
// }
// Animal.prototype.saludar = function(){
//     console.log(`Hola ${this.nombre}`);
// }

// const animal1 = new Animal("perro", "macho");
// // console.log(animal1);

// animal1.saludar();

// function Gato(nombre, genero, raza){
//     this.super = Animal;
//     this.super(nombre, genero);
//     this.raza = raza;
// }

// Gato.prototype = new Animal();
// Gato.prototype.constructor = Gato;

// Gato.prototype.saludar = function(){
//     console.log(`He sobrescrito el método ${this.nombre}`);
// }

// const gato1 = new Gato("gatete", "hembra", "no se")
// gato1.saludar();

class Estudiantes{
    constructor(dni, nombre, apellido){
        this._dni = dni;
        this._nombre = nombre;
        this._apellido = apellido;
    }
}

class EstudiantesHLanz extends Estudiantes{
    constructor(dni, nombre, apellido, ciclo, curso){
        super(dni, nombre, apellido)
        this._ciclo = ciclo
        this._curso = curso;
        this._modulos = new Array();
    }

    set modulos(modulo){
        this._modulos.push(modulo);
    }

    get modulos(){
        return this._modulos;
    }
}

const estudiante1 = new Estudiantes("32121", "carlos", "me");
console.log(estudiante1);

const estudiante2 = new EstudiantesHLanz("31231", "manue", "brook", "daw", "2");
estudiante2.modulos = "diw";
estudiante2.modulos = "dwes";
estudiante2.modulos = "dwec";
estudiante2.modulos = "daw";
console.log(estudiante2);

//crear los metodos modulos que me muestren los modulos que curso y permita modificar los modulos.
//los modulos se almacenarán en un array obligatoriamente.


/**
 * 
 */