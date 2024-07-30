export const TareasReducer = (state, action) => {
    switch (action.type) {
        case 'agregar':
            return [...state, action.payload];
        case 'eliminar':
            return state.filter((tarea, index) => index !== action.payload);
        default:
            return state;
    }
}
