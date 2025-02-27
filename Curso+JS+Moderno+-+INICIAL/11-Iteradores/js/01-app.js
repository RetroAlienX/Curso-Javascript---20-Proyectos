//! For loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`Numero ${i}`);
// }

//! Identificar pares o nones

// for(let i=1; i <= 20; i++){
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     } else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

//! Iterar un array

const carrito = [
    {
        nombre: 'Monitor 27 pulgadas',
        precio: 500,
    },
        {
        nombre: 'Nintendo',
        precio: 700,
    },
        {
        nombre: 'Super Nintendo',
        precio: 900,
    },
        {
        nombre: 'Playstation',
        precio: 1500,
    },
        {
        nombre: 'Xbox',
        precio: 400,
    }
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}