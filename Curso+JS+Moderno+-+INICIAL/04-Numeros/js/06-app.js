//! Convertir strings a numeros 

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1)) //! convirtio de string a numero entero
console.log(Number.parseFloat(numero2)); //! convirtio de string a numero flotante
console.log(Number.parseInt(numero3)); //! Devuelve not a Number

//! Revisar si un numero es entero o no 
console.log(Number.isInteger(numero1));