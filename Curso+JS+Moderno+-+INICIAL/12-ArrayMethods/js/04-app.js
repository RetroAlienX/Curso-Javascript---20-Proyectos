//! array method .filter
//! filter crea un arreglo basado en el parametro que es evaluado.

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

let resultado;

//! Traer productos mayores a 400
resultado = carrito.filter(producto => producto.precio > 400);

//! Traer productos menores a 600
resultado = carrito.filter(producto => producto.precio < 600);

//! Trae todos los productos menos los audifonos
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');

//! Traer solo los audifonos
resultado = carrito.filter(producto => producto.nombre == 'Audifonos');

console.log(resultado);