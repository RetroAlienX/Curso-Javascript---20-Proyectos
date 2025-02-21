//! Las ventajas de los arrow functions

const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo: ${tecnologia}`);
}

aprendiendo('Javascript')

//! Arrow function con parametros.
const aprendiendo2 = (tecnologia) => `Aprendiendo: ${tecnologia}`;
console.log(aprendiendo2('Javascript'));

//! Arrow function con parametros NOTA cuando solo tendra un parametro, se pueden eliminar los parentesis
const aprendiendo3 = tecnologia => `Aprendiendo: ${tecnologia}`;
console.log(aprendiendo3('Javascript'));

//! Arrow function con paramtros, cuando tienen mas de dos parametros, SI se ocupan los parentesis
const aprendiendo4 = (tecnologia1, tecnologia2) => `Aprendiendo: ${tecnologia1} y ${tecnologia2}`;
console.log(aprendiendo4('Javascript', 'Node.js'));