//! Evento Submit a un formulario
const formulario = document.querySelector("#formulario");

// formulario.addEventListener("submit", (e) => {});

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log("buscando");
  console.log(e.target.action);
}
