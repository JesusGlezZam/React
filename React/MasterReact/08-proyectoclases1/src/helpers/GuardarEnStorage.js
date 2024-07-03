import React, { Component } from 'react';

export default class GuardarEnStorage extends Component {
    guardarEnStorageGenerico(clave, elemento) {
        let elementos = JSON.parse(localStorage.getItem(clave)) || [];
        elementos.push(elemento);
        localStorage.setItem(clave, JSON.stringify(elementos));
    }

    render() {
        return null;
    }
}


