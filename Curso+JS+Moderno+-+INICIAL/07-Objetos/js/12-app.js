//! El Object Constructor

//! Crear objeto mediante (Object Literal)
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//! Crear objeto mediante (Object Constructor)

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Playstation', 10000)
const producto3 = new Producto('TV', 5000)

console.log(producto2);
console.log(producto3);