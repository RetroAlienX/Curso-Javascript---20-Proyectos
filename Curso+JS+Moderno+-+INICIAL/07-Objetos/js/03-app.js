//! Agregar o Eliminar propiedades de un objeto

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//! Agregar nuevas propiedades al Objeto

producto.imagen = "imagen.jpg";


//! Eliminar propiedades de un objeto

delete producto.disponible;

console.log(producto);