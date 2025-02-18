//! Como se comunican las funciones 

function iniciarApp(){
    console.log("Iniciando App");
    segundaFuncion();
}

iniciarApp();

function segundaFuncion(){
    console.log("Desde la segunda funcion");
    usuarioAutenticado('Jorge');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario....espere');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}