//! Comparador estricto


//! Diferente != , == igual a 
const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// if (puntaje != 1000) {
//     console.log('Si es diferente');
// }

//! Comparador estricto === y diferente estricto !==

if (puntaje !== "1000") {
    console.log('Si es diferente');
} else{
    console.log('No, no es diferente');
}