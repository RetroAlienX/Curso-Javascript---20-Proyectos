//! Object .keys, .values y .entries

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//! .keys (obtener llaves del objeto)
console.log(Object.keys(producto))

//! .values (Obtener valores del objeto)
console.log(Object.values(producto));

//! .entries (Obtener llave y valores de un objeto en pares)
console.log(Object.entries(producto));