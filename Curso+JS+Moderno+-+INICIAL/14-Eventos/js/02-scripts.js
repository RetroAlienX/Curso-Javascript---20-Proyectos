//! Eventos con el mouse
const nav = document.querySelector(".navegacion");

//! registrar un Evento
// nav.addEventListener("click", () => {
//   console.log("Click en nav");
// });

nav.addEventListener("mouseout", () => {
  console.log("Entrando en la navegacion");
  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mouseenter", () => {
  console.log("Saliendo de la navegacion");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("mousedown", () => {
  console.log("Saliendo de la navegacion");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseup", () => {
  console.log("Saliendo de la navegacion");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("dblclick", () => {
  console.log("Saliendo de la navegacion");
  nav.style.backgroundColor = "white";
});

//! mousedown - similar al click
//! click
//! dblclick = doubleclick
//! mouseup - cuando sueltas el mouse
