//! El problema con los objetos
//! Cuando reasignas un valor aunque el objeto sea un CONST mientras este dentro del objeto SI se puede modificar

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

delete producto.precio;
producto.disponible = false;
console.log(producto);