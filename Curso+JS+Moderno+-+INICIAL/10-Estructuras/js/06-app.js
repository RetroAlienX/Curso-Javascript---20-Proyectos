//! El operador && para revisar que se cumplan 2 o mas condiciones

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if(!puedePagar && !usuario){
    console.log('Fondos insuficientes y no eres usuario');
} else if(!usuario){
    console.log('Inicia sesion');
} else if(!puedePagar){
    console.log('Fondos insuficientes');
}