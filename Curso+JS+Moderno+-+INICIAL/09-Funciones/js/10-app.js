//! Arrow Functions

const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo();

//! Transformando la funcion anonima a una funcion arrow
const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript');
}

aprendiendo2();

//! Cuando solo se ejecutara una linea, podemos eliminar las llaves
const aprendiendo3 = () => console.log('Aprendiendo JavaScript');

aprendiendo3();

//! Cuando solo se ejecutara una linea, podemos eliminar las llaves e incluso el console log por que toma como implicito el return
const aprendiendo4 = () => 'Aprendiendo JavaScript';

console.log(aprendiendo4());