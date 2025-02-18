//! .map para iterar un array y sus diferencias con forEach

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



//! Bucle For para iterar un array (Ejemplo)
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

console.log(carrito);

//! Metodo forEach para iterar un array

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

const nuevoArreglo1 = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

//! Metodo .map
//! Diferencias: .map crea un arreglo nuevo y forEach NO!
const nuevoArreglo2 = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo1);
console.log(nuevoArreglo2);