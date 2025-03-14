//! Primeros pasos con el proyecto

document.addEventListener("DOMContentLoaded", function () {
  //! Creando el objeto principal para validar y sincronizar datos
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  console.log(email);

  //! Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");
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

  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();

    //!reiniciar el objeto
    resetFormulario();
  });

  //! Añadiendo un spinner
  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    //! Mostrar el spinner cuando se envia el email y reinicar el formulario
    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      resetFormulario();
      //!Crear una alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);
      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

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
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);
    // console.log("despues del IF");

    //! Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();
    // console.log(email);

    //! Comprobar el objeto de email
    comprobarEmail();
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

  function comprobarEmail() {
    // console.log(email);
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
    } else {
      btnSubmit.classList.remove("opacity-50");
      btnSubmit.disabled = false;
    }
  }

  function resetFormulario() {
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});

//! TODO: Codigo limpio se removieron comentarios y console.log innecesarios

// document.addEventListener("DOMContentLoaded", function () {
//   const email = {
//     email: "",
//     asunto: "",
//     mensaje: "",
//   };

//   const inputEmail = document.querySelector("#email");
//   const inputAsunto = document.querySelector("#asunto");
//   const inputMensaje = document.querySelector("#mensaje");
//   const formulario = document.querySelector("#formulario");
//   const btnSubmit = document.querySelector('#formulario button[type="submit"]');
//   const btnReset = document.querySelector('#formulario button[type="reset"]');
//   const spinner = document.querySelector("#spinner");

//   inputEmail.addEventListener("input", validar);
//   inputAsunto.addEventListener("input", validar);
//   inputMensaje.addEventListener("input", validar);
//   formulario.addEventListener("submit", enviarEmail);
//   btnReset.addEventListener("click", function (e) {
//     e.preventDefault();
//     resetFormulario();
//   });

//   function enviarEmail(e) {
//     e.preventDefault();

//     spinner.classList.add("flex");
//     spinner.classList.remove("hidden");

//     setTimeout(() => {
//       spinner.classList.remove("flex");
//       spinner.classList.add("hidden");
//       resetFormulario();

//       const alertaExito = document.createElement("P");
//       alertaExito.classList.add(
//         "bg-green-500",
//         "text-white",
//         "p-2",
//         "text-center",
//         "rounded-lg",
//         "mt-10",
//         "font-bold",
//         "text-sm",
//         "uppercase"
//       );
//       alertaExito.textContent = "Mensaje enviado correctamente";
//       formulario.appendChild(alertaExito);

//       setTimeout(() => {
//         alertaExito.remove();
//       }, 3000);
//     }, 3000);
//   }

//   function validar(e) {
//     if (e.target.value.trim() === "") {
//       mostrarAlerta(
//         `El campo ${e.target.id} es obligatorio`,
//         e.target.parentElement
//       );
//       email[e.target.name] = "";
//       comprobarEmail();
//       return;
//     }

//     if (e.target.id === "email" && !validarEmail(e.target.value)) {
//       mostrarAlerta("El email no es válido", e.target.parentElement);
//       email[e.target.name] = "";
//       comprobarEmail();
//       return;
//     }

//     limpiarAlerta(e.target.parentElement);
//     email[e.target.name] = e.target.value.trim().toLowerCase();
//     comprobarEmail();
//   }

//   function mostrarAlerta(mensaje, referencia) {
//     limpiarAlerta(referencia);
//     const error = document.createElement("P");
//     error.textContent = mensaje;
//     error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
//     referencia.appendChild(error);
//   }

//   function limpiarAlerta(referencia) {
//     const alerta = referencia.querySelector(".bg-red-600");
//     if (alerta) {
//       alerta.remove();
//     }
//   }

//   function validarEmail(email) {
//     const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//     return regex.test(email);
//   }

//   function comprobarEmail() {
//     if (Object.values(email).includes("")) {
//       btnSubmit.classList.add("opacity-50");
//       btnSubmit.disabled = true;
//     } else {
//       btnSubmit.classList.remove("opacity-50");
//       btnSubmit.disabled = false;
//     }
//   }

//   function resetFormulario() {
//     email.email = "";
//     email.asunto = "";
//     email.mensaje = "";
//     formulario.reset();
//     comprobarEmail();
//   }
// });
