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
    // console.log(e.target.parentElement);
    // console.log(e.target.id);
    // console.log("Desde la funcion de validar");
    // console.log(e.target.value);

    //!Validando si el campo tiene informacion o esta vacio el trim se usa para eliminar espacios en blanco
    if (e.target.value.trim() === "") {
      // console.log("Esta vacio");
      //! Validando cada campo y agregando el error correcto basado en el id de cada elemento HTML
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);
    // console.log("despues del IF");
  }

  //! Mostrar alerta si el input esta vacio o es mandatorio
  function mostrarAlerta(mensaje, referencia) {
    //! Comprueba si ya existe una alerta
    limpiarAlerta(referencia);

    // console.log("Hubo un error");
    //! Generar una alerta con scripting en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // console.log(error);
    //! Añadiendo la alerta en HTML (inyectar el error al formulario)
    //! Mostrando alerta junto a su campo
    // formulario.appendChild(error);
    referencia.appendChild(error);
  }

  //! Ocultar alertas si pasa la validacion, limpiando alertas
  function limpiarAlerta(referencia) {
    //! Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
    console.log("Desde limpiar alerta");
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    // console.log(resultado);
    return resultado;
  }
});

//! TODO: Codigo limpio se removieron comentarios y console.log innecesarios
