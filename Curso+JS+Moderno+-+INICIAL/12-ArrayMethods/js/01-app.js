//! Array methods: .some

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

//! Revisar si existe un valor existe en un arreglo

meses.forEach((mes)=>{
    if(mes === 'Enero') {
        console.log('Enero si existe');
    }
})

//! .includes solo funciona si es un arreglo tal cual (con indice)
const resultado = meses.includes('Enero');
console.log(resultado);

//! .some funciona para revisar en un arreglo de objetos
const existe = carrito.some((producto)=>{
    return producto.nombre === 'Celular'
})

console.log(existe);

//! Simplificando la operacion de .some

const existe2 = carrito.some(producto => producto.nombre === 'Monitor Curvo');
console.log(existe2);

//! En un arreglo tradicional con .some

const existe3 = meses.some (mes => mes === 'Febrero');
console.log(existe3);