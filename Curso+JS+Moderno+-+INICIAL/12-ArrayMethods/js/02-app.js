//! findIndex para encontrar la posicion en un Array

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]


//! usando forEach
meses.forEach((mes, i)=>{
    if(mes === 'Abril'){
        console.log(`Encontrado en el indice ${i}`);
    }
})

//! Encontrar el indice de abril usando findIndex

const indice = meses.findIndex((mes) =>{
    return mes === 'Abril';
})

console.log(indice);

//! Encontrar un indice en un arreglo de objetos usando findIndex
const indice2 = carrito.findIndex( producto => producto.nombre === 'Celulares' );
console.log(indice2);