// import React, { Component } from 'react';
import React, { useState } from 'react';
//-----------------Version antigua----------------


// class Tarjeta extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cantidad: 0,
//         }
//         /**
//          * Bindeo o binding o In di bidingin sobre los métodos que el this pierde el contexto de la clase
//          */
    
//         this.agregar = this.agregar.bind(this);
//         this.restar = this.restar.bind(this);
//     }

//     agregar(){
//         this.setState({cantidad: this.state.cantidad+1});
//     }

//     restar(){
//         this.state.cantidad > 0 
//         ? this.setState({cantidad: this.state.cantidad-1})
//         : this.setState({cantidad: 0});
//     }

//     limpiar = () => this.setState({cantidad: 0})

//     // limpiar(){
//     //     this.setState({cantidad: 0});
//     // }

//     render() {
//         return(
//             <div>
//                 <h3>{this.props.nombreFruta}</h3>
//                 <div>🛒 Cantidad: {this.state.cantidad}</div>
//                 <button onClick={this.agregar}>✔</button>
//                 <button onClick={this.restar}>❌</button> 
//                 <button onClick={this.limpiar}>🗑</button><br />
//                 <p>{(this.props.precio * this.state.cantidad).toFixed(2)}🤑</p>
//             </div>
//         )
//     }
// }


/*-----Versión más moderna--------
Property Initializer != Hook
Gracias a importar con create-react-app BABEL
Y la configura con unas características aceptadas
por la comunidad, pero no son un estándar de la programación
*/

// class Tarjeta extends Component{
//     //No hay constructor
//     state = {
//         cantidad: 0,
//     }

//     agregar = () => {
//         this.setState({cantidad: this.state.cantidad+1});
//     }
    
//     restar = () => {
//         this.state.cantidad > 0 
//         ? this.setState({cantidad: this.state.cantidad-1})
//         : this.setState({cantidad: 0});
//     }

//     limpiar = () => this.setState({cantidad: 0})


//     render() {
//         return(
//             <div>
//                 <h3>{this.props.nombreFruta}</h3>
//                 <div>🛒 Cantidad: {this.state.cantidad}</div>
//                 <button onClick={this.agregar}>✔</button>
//                 <button onClick={this.restar}>❌</button> 
//                 <button onClick={this.limpiar}>🗑</button><br />
//                 <p>{(this.props.precio * this.state.cantidad).toFixed(2)}🤑</p>
//             </div>
//         )
//     }
// }



/*
USO DE LOS HOOKS ( Componente FUNCIONAL)
 */

const Tarjeta = ({nombreFruta, precio}) => {
    //Como asignamos estado en un componente Funcional 
    const [cantidad, setCantidad] = useState(0);

    function agregar() {
        return setCantidad(cantidad+1);
    }

    function restar() {
        return cantidad > 0 ? setCantidad(cantidad-1) : setCantidad(0);
    }

    function limpiar() {
        return setCantidad(0);
    }

    return(
        <div>
            <h3>{nombreFruta}</h3>
            <div>🛒 Cantidad: {cantidad}</div>
            <button onClick={agregar}>✔</button>
            <button onClick={restar}>❌</button> 
            <button onClick={limpiar}>🗑</button><br />
            <p>{(precio * cantidad).toFixed(2)}🤑</p>
        </div>
    )
}

export default Tarjeta;