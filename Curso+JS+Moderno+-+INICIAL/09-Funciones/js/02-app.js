//! La diferencia entre Function Expression y Function  Declaration

//! Declaracion de funcion (Function Declaration)

sumar();

function sumar() {
    console.log(2+2);
}

sumar();

//! Expresion de funcion (Function Expression) o tambien llamada (Funcion anonima)

//sumar2();
const sumar2 = function(){
    console.log(3+3);
}

sumar2();

//! Diferencias:
//! La declaracion de funcion se puede ejecutar y funcionara antes de crearla y la Expresion NO