//! Generar HTML desde JavaScript
const enlace = document.createElement('a');
//! Agregando el texto
enlace.textContent = 'Nuevo Enlace';
//! Añadiendo href
enlace.href = '/nuevo-enlace'
//! Añadiendo target
enlace.target = "_blank"
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

console.log(enlace);

//! Agregar enlace al HTML
//! Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);
// navegacion.appendChild(enlace);

function miFuncion(){
    alert('Diste click')
}

//! Crear un card de forma dinamica (Primero creando informacion)

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('Titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('Precio');

//! Creando el card div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

//! Agregando la informacion al card con appendChild
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//! Crear la imagen del card
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';

//! Crear el card
const card = document.createElement('div');
card.classList.add('card');

//! Asignar la imagen
card.appendChild(imagen);

//! Asignar la info
card.appendChild(info);

// console.log(parrafo1);
// console.log(parrafo2);
// console.log(parrafo3);
// console.log(info);
// console.log(imagen);
// console.log(card);

//! Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
// contenedor.appendChild(card);