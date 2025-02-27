//! El operador Ternario

const autenticado = true;
const puedePagar = true;

// console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No, no esta autenticado');

//! If anidado

// if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
//     if(efectivo > totalAPagar){
//         console.log('Si pagaste con efectivo');
//     } else{
//         console.log('Otra forma de pago');
//     }
// } else{
//     console.log('Fondos insuficientes');
// }

//! If ternario anidado

console.log(autenticado  ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, pero no puede pagar' : 'No, no esta autenticado');
