//! Añadir nuevos elementos al fin o inicio de un array

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

const producto3 = {
  nombre: "Teclado",
    precio: 50  
}

const producto4 = {
  nombre: "Celular",
    precio: 800  
}


//! Agregar productos al final del arreglo metodo PUSH
carrito.push(producto)
carrito.push(producto2)


//! Agregar productos al inicio del arreglo metodo UNSHIFT
carrito.unshift(producto3);



console.table(carrito)