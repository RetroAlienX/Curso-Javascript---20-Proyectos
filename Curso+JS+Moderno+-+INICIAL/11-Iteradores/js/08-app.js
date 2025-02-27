//! for ... in Loop
//! Itera sobre OBJETO!

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

const automovil = {
    modelo: 'Camaro',
    year: '1969',
    motor: '6.0'
}

for (let propiedad in automovil) {
    console.log(`${propiedad} : ${automovil[propiedad]}`);
}

//! ECMA SCRIPT 7 usando una nueva forma 
for (let [llave,valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}

for (let [llave,valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`);
}