"use strict";

//! Congelar un objeto para NO poderlo modificar

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto)

// producto.disponible = false;
// producto.imagen = "imagen.jpg"

console.log(producto);

//! Como hacer para que un objeto no se comporte como variable si no como constante y no pueda ser modificado? usando el modo estricto y el metodo freeze

//! Como saber si un objeto esta congelado?

console.log(Object.isFrozen(producto));