import React, { Component } from 'react';

/**
 * Un componente se repinta si se cambia de estado.
 * Luego en el estado se debe de almacenar lo que quiero cambiar dinámicamente.
 * El estado en una clase se hace con this.state y es un objeto inmutable.
 * Solo se puede modificar con un método especial llamado setState().
 */

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
    }
    render() {
        return (
        <>
            <h1>Componente Estado: </h1>
            {/* {window.setInterval(() => {
                Estado.setState(this.state.contador = this.state.contador++);
                <h2>{this.state.contador}</h2>
            })} */}
            <h2></h2>
        </>
        );
    }
}