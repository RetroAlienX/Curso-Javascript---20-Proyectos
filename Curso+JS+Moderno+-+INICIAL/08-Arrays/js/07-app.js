//! Eliminar elementos con splice

const carrito = [];

//! Definir un producto

const producto = {
    nombre: "Monitor de 32 Pulgadas",
    precio: 400
}

const producto2 = {
  nombre: "Celular",
    precio: 800  
}

const producto4 = {
    nombre: 'Celular2',
    precio:5000
}

//! Forma Imperativa
//! Agregar productos al final del arreglo metodo PUSH
carrito.push(producto)
carrito.push(producto2)

const producto3 = {
    nombre: 'Teclado',
    precio:50
}

//! Agregar productos al inicio del arreglo metodo UNSHIFT
carrito.unshift(producto3);

console.table(carrito)

//! Eliminar el ultimo elemento de un arreglo...

carrito.pop()

console.table(carrito)

//! Eliminar el primer elemento de un arreglo...

carrito.shift(carrito);

console.table(carrito)


//! Eliminar elementos de enmedio de un arreglo (Los parametros 1,1 indican el index y cuantos elementos partiendo de ahi)

carrito.splice(1,1)

console.table(carrito)
