//! Break y Continue en un for loop

//! Crear un for loop que al detectar el numero 5 detenga la ejecucion

console.log("*********Usando Break*********");
for (let i = 0; i <= 10; i++) {
    if(i === 5){
        console.log('Este es el numero 5');
        break;
    }
    console.log(`Numero ${i}`);
}

console.log("*********Usando Continue*********");
//! Crear un for loop que el numero 5 diga 5 con letras
for (let i = 0; i <= 10; i++) {
    if(i === 5){
        console.log('Cinco');
        continue;
    }
    console.log(`Numero ${i}`);
}

//! Ejemplo con un carrito
console.log("***********Ejemplo de carrito************");

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
        descuento: true
    },
        {
        nombre: 'Xbox',
        precio: 400,
    }
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}