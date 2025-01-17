//! Metodos string replace, slice y substring

const producto = "Monitor 20 pulgadas"

//! .replace para reemplazar valores
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//! .slice para cortar
console.log(producto.slice(0, 10))
console.log(producto.slice(8))
console.log(producto.slice(2, 1))

//! .substring (alternativa a slice) la diferencia fundamental, es mas estricta (corta a partir de la posicion 0, 10 caracteres)
console.log(producto.substring(0,10))

const usuario = "Jorge";
console.log(usuario.substring(0,1))
console.log(usuario.charAt(0))