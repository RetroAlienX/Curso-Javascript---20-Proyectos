//! Eventos sobre los inputs
const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("keydown", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("keyup", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("blur", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("copy", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("paste", () => {
//   console.log("Escribiendo");
// });

// busqueda.addEventListener("cut", () => {
//   console.log("Escribiendo");
// });

busqueda.addEventListener("input", (event) => {
  if (event.target.value === "") {
    console.log("fallo la validacion");
  }
});
