//! .forEach .Map

//! .forEach ejemplo

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

pendientes.forEach((pendiente,index) => {
    console.log(`${index} : ${pendiente}`);
});

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

//! forEach NO CREA UN ARREGLO NUEVO
const nuevoArreglo = carrito.forEach((producto,i) => {
    console.log(i,producto.nombre);
});

console.log(nuevoArreglo);

//! MAP CREA UN ARREGLO NUEVO
const nuevoArreglo2 = carrito.map((producto,i) => {
    console.log(i,producto.nombre);
    return producto.nombre
});

console.log(nuevoArreglo2);

//! MAP CREA UN ARREGLO NUEVO se reduce el codigo por solo tener un parametro y se eliminan algunas cosas por ejemplo el index y el console .log ya que tiene implicito un return

const nuevoArreglo3 = carrito.map (producto => producto.nombre);

console.log(nuevoArreglo3);

//! MAP devolviendo nombre de producto e index
const nuevoArreglo4 = carrito.map((producto, i) => {
    console.log(i, producto.nombre); // Muestra en consola
    return { index: i, producto: producto }; // Retorna un objeto con el índice y el producto
});

console.log(nuevoArreglo4);