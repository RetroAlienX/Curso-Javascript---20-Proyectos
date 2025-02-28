//! Spread operator

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

//! Agregar un elemento al final del arreglo con indices
//! El spread no modifica la forma original del arreglo

const meses2 = [...meses, 'Agosto'];
console.log(meses2);

//! Spread operator en un objeto
//! Añadiendo un nuevo producto al carrito con el spread operator

const producto = {nombre:'Disco Duro', precio:300};
const carrito2 = [...carrito, producto]
console.log(carrito2);
