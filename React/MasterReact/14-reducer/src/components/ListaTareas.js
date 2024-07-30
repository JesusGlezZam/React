import React, { useReducer } from 'react'
import { TareasReducer } from '../reducers/TareasReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('tareas')) || [];
};

export const ListaTareas = () => {
    const [tareas, dispatch] = useReducer(TareasReducer, [], init);

    const agregarTarea = e => {
        e.preventDefault();
        const nuevaTarea = {
            id: new Date().getTime(),
            texto: e.target.texto.value
        };
        dispatch({ type: 'agregar', payload: nuevaTarea });
        e.target.texto.value = '';
    };

    const eliminarTarea = index => {
        dispatch({ type: 'eliminar', payload: index });
    };

    React.useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <form onSubmit={agregarTarea}>
                <input type="text" name="texto" placeholder="Nueva tarea" required />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={tarea.id}>
                        {tarea.texto}
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
