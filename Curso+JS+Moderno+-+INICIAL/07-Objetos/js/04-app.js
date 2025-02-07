//! Destructuring de objetos 
//! Acceder a valores del objeto y asignarlos a una variable.

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//! forma anterior de asignar valores de un objeto a una variable
const namevar = producto.nombre;
console.log(producto.nombre);
console.log(namevar);

//! forma nueva ECMASCRIPT de asignar valores de un objeto a una variable (Object destructure)

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);