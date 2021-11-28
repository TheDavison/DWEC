/**
 * @author Ziji(David) Cheng
 * @description Ambitos del uso del this
 */

this.nombre="Contexto Global";

function saludo(){
    console.log(this.nombre);
}
saludo();

const objeto = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
}

objeto.imprimir();

const objeto2 = {
    nombre: "Contexto Objeto 2",
    imprimir: () =>{
        console.log(this.nombre);
    }
}

objeto2.imprimir();



//Las funciones flechas el problema que acarrean es que heredan el contexto dodne se han creado. 
