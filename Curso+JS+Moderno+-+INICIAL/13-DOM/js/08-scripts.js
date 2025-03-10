//! Traversing the DOM

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes); //! Los espacios en blanco son considerados elementos
// console.log(navegacion.children); //! Muestra los elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// const card = document.querySelector('.card');
// card.children[1].children[1].textContent='Nuevo Heading desde traversing the DOM'
// console.log(card.children[1].children[1].textContent);
// card.children[0].src = '/img/hacer3.jpg'
// console.log(card.children[0]);

//! Traversing the DOM hijo a padre
// const card = document.querySelector('.card');
//console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

//! Traversing the DOM hermanos
// const card = document.querySelector('.card');
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
