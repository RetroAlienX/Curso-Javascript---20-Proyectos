//! El ejercicio del Fizz Buzz

//! Multiplos de 3 imprimen fizz 3,6,9,12,15
//! Multiplos de 5 imprimen buzz 5,10,15,20,25
//! Multiplos de 3 y 5 imprimen fizzbuzz! 15, 30, 45

for(let i=1; i<100; i++){
    if(i % 15 === 0){
        console.log(`${i} FIZZBUZZ!`);
    }
    else if(i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if(i % 5){
        console.log(`${i} Buzz`);
    } 
}