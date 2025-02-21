//! Arrow functions en un forEach y Map

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

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
