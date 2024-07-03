import React, { Component } from 'react';
import GuardarEnStorage from '../helpers/GuardarEnStorage';


export default class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tituloComponente: "Añadir película",
            pelicula: {
                titulo: '',
                descripcion: ''
            },
            errores: {
                titulo: '',
                descripcion: ''
            }
        };

        // Crear instancia de GuardarEnStorage
        this.guardarHelper = new GuardarEnStorage();
    }

    conseguirDatosForm = (e) => {
        e.preventDefault();

        // Obtener datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Validar campos
        let erroresTemp = this.validarCampos({ titulo, descripcion });

        if (Object.keys(erroresTemp).length > 0) {
            this.setState({ errores: erroresTemp });
            return;
        }

        // Crear objeto de la película a guardar
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Asignar la nueva película al estado
        this.setState({ pelicula });

        // Actualizar el estado de listado principal
        const nuevasPeliculas = [...this.props.listadoPelicula, pelicula];
        this.props.setListadoPelicula(nuevasPeliculas);

        // Guardar en el localStorage usando la instancia de GuardarEnStorage
        this.guardarHelper.guardarEnStorageGenerico("generico", pelicula);

        // Limpiar los errores después de un envío exitoso
        this.setState({ errores: {} });

        // Limpiar el formulario
        target.reset();
    };

    validarCampos = (campos) => {
        let erroresTemp = {};

        if (campos.titulo.trim() === "") {
            erroresTemp.titulo = 'El título es obligatorio.';
        }
        if (campos.descripcion.trim() === "") {
            erroresTemp.descripcion = 'La descripción es obligatoria.';
        }

        return erroresTemp;
    };

    render() {
        const { tituloComponente, pelicula, errores } = this.state;

        return (
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                <strong>
                    {(pelicula.titulo && pelicula.descripcion) && "Has creado la película: " + pelicula.titulo}
                </strong>

                <form onSubmit={this.conseguirDatosForm}>
                    <input
                        type="text"
                        name="titulo"
                        id="title"
                        placeholder="Título"
                    />
                    {errores.titulo && <p style={{ color: 'red' }}>{errores.titulo}</p>}

                    <textarea
                        id="description"
                        name="descripcion"
                        placeholder="Descripción"
                    ></textarea>
                    {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}

                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
        );
    }
}
