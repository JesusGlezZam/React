import React, { useMemo, useState } from 'react'

// Lista inicial de productos
const productosIniciales = [
    { id: 1, nombre: 'Producto A', precio: 30 },
    { id: 2, nombre: 'Producto B', precio: 20 },
    { id: 3, nombre: 'Producto C', precio: 50 },
    // Agrega más productos según sea necesario
];

export const Productos = () => {
   // Estados para los filtros, productos y ordenación
   const [filtroNombre, setFiltroNombre] = useState('');
   const [filtroPrecio, setFiltroPrecio] = useState('');
   const [orden, setOrden] = useState('ascendente');
   const [productos, setProductos] = useState(productosIniciales);

   // Estados para los campos del formulario de nuevo producto
   const [nuevoNombre, setNuevoNombre] = useState('');
   const [nuevoPrecio, setNuevoPrecio] = useState('');

   // Memoriza el resultado del filtrado y ordenado de productos
   const productosFiltradosYOrdenados = useMemo(() => {
       console.log('Filtrando y ordenando productos...');
       let resultado = productos;

       // Filtra por nombre
       if (filtroNombre) {
           resultado = resultado.filter(producto =>
               producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
           );
       }

       // Filtra por precio
       if (filtroPrecio) {
           resultado = resultado.filter(producto =>
               producto.precio.toString().includes(filtroPrecio)
           );
       }

       // Ordena los productos según el criterio de ordenación
       if (orden === 'ascendente') {
           resultado = resultado.sort((a, b) => a.precio - b.precio);
       } else {
           resultado = resultado.sort((a, b) => b.precio - a.precio);
       }

       return resultado;
   }, [filtroNombre, filtroPrecio, orden, productos]); // Incluye 'productos' en las dependencias

   // Función para manejar el envío del formulario de nuevo producto
   const agregarProducto = (e) => {
       e.preventDefault();
       const nuevoProducto = {
           id: productos.length + 1,
           nombre: nuevoNombre,
           precio: parseFloat(nuevoPrecio),
       };
       setProductos([...productos, nuevoProducto]);
       setNuevoNombre('');
       setNuevoPrecio('');
   };

   return (
        <div>
            <h1>Tabla de Productos</h1>
            {/* Campo de entrada para filtrar los productos por nombre */}
            <input
                type="text"
                placeholder="Filtrar por nombre"
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
            />
            {/* Campo de entrada para filtrar los productos por precio */}
            <input
                type="text"
                placeholder="Filtrar por precio"
                value={filtroPrecio}
                onChange={(e) => setFiltroPrecio(e.target.value)}
            />
            {/* Selector para elegir el criterio de ordenación */}
            <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="ascendente">Precio Ascendente</option>
                <option value="descendente">Precio Descendente</option>
            </select>
            {/* Tabla que muestra los productos filtrados y ordenados */}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productosFiltradosYOrdenados.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>${producto.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulario para agregar un nuevo producto */}
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={agregarProducto}>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Precio del producto"
                    value={nuevoPrecio}
                    onChange={(e) => setNuevoPrecio(e.target.value)}
                    required
                />
                <input type="submit" value="Agregar Producto" />
            </form>
        </div>
    );
}
