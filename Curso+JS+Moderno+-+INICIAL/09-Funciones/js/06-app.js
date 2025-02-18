//! Parametros por Default

function saludar(nombre = 'Desconocido',apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Jorge','Sanchez');
saludar('Jorge');

