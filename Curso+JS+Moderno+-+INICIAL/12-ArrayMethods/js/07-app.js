//! Array method .concat

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
const meses2 = ['Agosto','Septiembre'];
const meses3 = ['Octubre','Noviembre','Diciembre'];

const resultado = meses.concat(meses2,meses3,'Otro mes');

console.log(resultado);

//! Concatenar con spread operator o rest operator

const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);

