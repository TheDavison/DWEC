import React, { Component } from 'react';

/**
 * Hay dos formas de crear un componente:
 *      -Componente de clase.
 *      -Componente de función
 */

//Componente de clase

// class Componente extends Component {
//     constructor(props) {
//         super(props);
//         this.nombre = props.nombre;
//         this.pintar = true;
//     }
//     render() {
//         return( <h1>Mi Primer Componente {this.nombre}</h1> );
//     }
// }


//Componente funcional

// function Componente(props){
//     if(props.pintar == true){
//         return( <h1>Voy a pintarlo</h1> );
//     }else{
//         return( <h1>No lo voy a pintar</h1>)
//     }
// }

// const Componente = (props) => (
//     <h1>
//         {props.pintar 
//         ? "Voy a pintarlo" 
//         : "No voy a pintarlo"}
//     </h1>);

// class Componente extends Component {
//     constructor(props) {
//         super(props);
//         this.meses = props.meses;
        
//     }
//     render() {
//         return( <h1>Mi Primer Componente <ol>{this.meses.map((mes) => <li>{mes}</li> )}</ol></h1> );
//     }
// }

// function Componente(props){
//     return( <h1>{props.objeto.nombre} y {props.objeto.correo}</h1> );
    
// }

class Componente extends Component {
    constructor(props) {
        super(props);
        this.objeto = props.objeto;
        
    }
    render() {
        // return( <h1>Nombre: {this.objeto.nombre} <br/>
        //             Correo: {this.objeto.correo}</h1> );
        return (<h1>Hola</h1>);
    }
}

export default Componente;