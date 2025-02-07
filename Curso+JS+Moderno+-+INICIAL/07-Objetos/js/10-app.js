//! Copiar / Unir dos objetos

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//! Primera forma de unir dos objetos en uno
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//! Spread Operator o Rest Operator

//! Spread Operator y Ejemplo de spread (copia o añade dos objetos en uno mismo)
const resultado2 = {...producto, ...medidas};
console.log(resultado2);
