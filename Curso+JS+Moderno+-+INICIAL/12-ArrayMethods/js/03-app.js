//! .reduce metodo array

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

//! .reduce toma gran cantidad de datos, los reduce, une y entrega datos unificados

//! usando forEach

let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

//! usando reduce

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);