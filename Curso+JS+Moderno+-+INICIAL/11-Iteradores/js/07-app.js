//! for ...of Loop
//! Itera sobre Arreglo!

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

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


for (let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre);
}