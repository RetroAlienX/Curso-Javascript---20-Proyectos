//! Array method .find

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

//! Find crea un nuevo arreglo basado en la condicion que se esta revisando

//! con un forEach
let resultado = '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});

console.log(resultado);

//! con un .find solamente retorna el primer elemento que cumpla la condicion
const resultado2 = carrito.find(producto => producto.nombre === 'Tablet')
console.log(resultado2);

//! .find solo trae el primer resultado, .filter trae todos 