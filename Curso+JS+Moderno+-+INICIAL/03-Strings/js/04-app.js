//! Metodos para eliminar el espacio blanco al inicio y al final de un string
const producto = "              Monitor 20 pulgadas      "

console.log(producto);
console.log(producto.length);


//! Eliminar del inicio...
console.log(producto.trimStart());

//! Eliminar el espacio del final...
console.log(producto.trimEnd());

//! Encadenando metodos de string
console.log(producto.trimStart().trimEnd())

console.log(producto.trim());