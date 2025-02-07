"use strict";

//! Sellar un objeto (SEAL) Basicamente a diferencia de Frozen que no deja eliminar, agregar, ni modificar propiedades, (SEAL) no elimina ni agrega, pero SI modifica propiedades existentes

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.seal(producto)

producto.disponible = false;
//producto.imagen = "imagen.jpg"

console.log(producto);
console.log(Object.isSealed(producto));