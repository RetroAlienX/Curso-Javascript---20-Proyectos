//! Destructuring de arrays

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}


//! Destructuring en objetos
const {nombre} = producto;

console.log(nombre);

//! Destructuring en arreglos

const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;
const [, , tercer] = numeros;
const [prim, seg, ...terc] = numeros;

console.log(primero);
console.log(tercero);
console.log(tercer);
console.log(terc);