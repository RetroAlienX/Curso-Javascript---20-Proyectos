//! Primeros pasos con el proyecto

document.addEventListener("DOMContentLoaded", function () {
  //! Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //   console.log(inputMensaje);

  //! Asignar eventos
  //   inputEmail.addEventListener("blur", function (e) {
  //     console.log(e.target.value);
  //   });

  //   inputAsunto.addEventListener("blur", function (e) {
  //     console.log(e.target.value);
  //   });

  //   inputMensaje.addEventListener("blur", function (e) {
  //     console.log(e.target.value);
  //   });

  //! Asignar eventos
  //! Reemplazando el callback de la funcion de arriba por una funcion creada para reutilizar el codigo y evitar repetitivo, en la funcion validar del addEventListener no se usan parentesis por que si le ponemos, llamara la funcion desde el inicio y se debe llamar cuando se dispare el evento.

  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    // console.log(e.target.id);
    // console.log("Desde la funcion de validar");
    // console.log(e.target.value);

    //!Validando si el campo tiene informacion o esta vacio el trim se usa para eliminar espacios en blanco
    if (e.target.value.trim() === "") {
      // console.log("Esta vacio");
      //! Validando cada campo y agregando el error correcto basado en el id de cada elemento HTML
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`);
    } else {
      console.log("Si hay algo");
    }
  }

  //! Mostrar alerta si el input esta vacio o es mandatorio
  function mostrarAlerta(mensaje) {
    // console.log("Hubo un error");
    //! Generar una alerta con scripting en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // console.log(error);
    //! Añadiendo la alerta en HTML (inyectar el error al formulario)
    formulario.appendChild(error);
  }
});

//! TODO: Codigo limpio se removieron comentarios y console.log innecesarios
