//! Array method .every

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

//! every todos los elementos de un arreglo debe cumplir la condicion para que regrese un true

const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

//! .some revisa que almenos uno cumpla la condicion regrese un true
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);