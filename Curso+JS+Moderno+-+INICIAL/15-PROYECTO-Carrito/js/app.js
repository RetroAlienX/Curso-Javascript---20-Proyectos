//! Primeros pasos del proyecto
//! Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

//! Event listeners
cargarEventListeners();
function cargarEventListeners() {
  //! Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //! Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //! Vaciar el carrito de compras
  vaciarCarritoBtn.addEventListener("click", () => {
    // console.log("vaciando carrito");
    articulosCarrito = [];

    //! Limpiando el HTML (eliminando el HTML)
    limpiarHTML();
  });
}

//! Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//! Elimina un curso del carrito
function eliminarCurso(e) {
  //   console.log(e.target.classList);
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //! elimina (TODOS cantidad total) del arreglo de articulosCarrito usando filter por el data-id
    // articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    //! elimina de uno por uno del arreglo articulosCarrito usando filter por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => {
      if (curso.id === cursoId) {
        if (curso.cantidad > 1) {
          curso.cantidad--;
          return curso;
        } else {
          delete curso;
        }
      } else {
        return curso;
      }
    });

    //! llamando a la funcion carritoHTML() Iterar sobre el carrito y mostrar su HTML
    carritoHTML();
  }
}

//! Leer datos del curso o contenido del HTML al que dimos click y extrae la informacion del curso
function leerDatosCurso(cursoSeleccionado) {
  console.log(cursoSeleccionado);

  //! Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: cursoSeleccionado.querySelector("img").src,
    titulo: cursoSeleccionado.querySelector("h4").textContent,
    precio: cursoSeleccionado.querySelector(".precio span").textContent,
    id: cursoSeleccionado.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  //   console.log(infoCurso);

  //! Comprobar si ya existe un elemento en el carrito para no duplicarlo
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //! actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // ! retorna el objeto actualizado
      } else {
        return curso; //! retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //! Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  carritoHTML();
}

//! Mostrando en el carrito el curso seleccionado en el HTML
function carritoHTML() {
  //! Limpiar el HTML
  limpiarHTML();

  //! Recorre el carrito y genera el HTML y Mostrando el resto de la informacion
  //   articulosCarrito.forEach((curso) => {
  //     console.log(curso);
  //     const row = document.createElement("tr");
  //     row.innerHTML = `
  //             <td><img src="${curso.imagen}" width="100"></td>
  //             <td>${curso.titulo}</td>
  //             <td>${curso.precio}</td>
  //             <td>${curso.cantidad}</td>
  //             <td><a href="#" class="borrar-curso" data-id"${curso.id}"> X </td>
  //         `;

  //     //! Agrega el HTML del carrito en el tbody
  //     contenedorCarrito.appendChild(row);
  //   });
  // }

  //! Recorre el carrito y genera el HTML y Mostrando el resto de la informacion (UTILIZANDO DESTRUCTURING)
  articulosCarrito.forEach((curso) => {
    console.log(curso);
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
        `;

    //! Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//! Elimina los cursos del tbody
function limpiarHTML() {
  //! forma lenta
  //   contenedorCarrito.innerHTML = "";

  //! forma rapida
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

//! TODO: Codigo limpio se removieron comentarios y console.log innecesarios
// const carrito = document.querySelector("#carrito");
// const contenedorCarrito = document.querySelector("#lista-carrito tbody");
// const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
// const listaCursos = document.querySelector("#lista-cursos");
// let articulosCarrito = [];

// cargarEventListeners();

// function cargarEventListeners() {
//   listaCursos.addEventListener("click", agregarCurso);
//   carrito.addEventListener("click", eliminarCurso);
//   vaciarCarritoBtn.addEventListener("click", () => {
//     articulosCarrito = [];
//     limpiarHTML();
//   });
// }

// function agregarCurso(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("agregar-carrito")) {
//     const cursoSeleccionado = e.target.parentElement.parentElement;
//     leerDatosCurso(cursoSeleccionado);
//   }
// }

// function eliminarCurso(e) {
//   if (e.target.classList.contains("borrar-curso")) {
//     const cursoId = e.target.getAttribute("data-id");

//     articulosCarrito = articulosCarrito.filter((curso) => {
//       if (curso.id === cursoId) {
//         if (curso.cantidad > 1) {
//           curso.cantidad--;
//           return curso;
//         }
//       } else {
//         return curso;
//       }
//     });

//     carritoHTML();
//   }
// }

// function leerDatosCurso(cursoSeleccionado) {
//   const infoCurso = {
//     imagen: cursoSeleccionado.querySelector("img").src,
//     titulo: cursoSeleccionado.querySelector("h4").textContent,
//     precio: cursoSeleccionado.querySelector(".precio span").textContent,
//     id: cursoSeleccionado.querySelector("a").getAttribute("data-id"),
//     cantidad: 1,
//   };

//   const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
//   if (existe) {
//     const cursos = articulosCarrito.map((curso) => {
//       if (curso.id === infoCurso.id) {
//         curso.cantidad++;
//         return curso;
//       } else {
//         return curso;
//       }
//     });
//     articulosCarrito = [...cursos];
//   } else {
//     articulosCarrito = [...articulosCarrito, infoCurso];
//   }

//   carritoHTML();
// }

// function carritoHTML() {
//   limpiarHTML();
//   articulosCarrito.forEach(({ imagen, titulo, precio, cantidad, id }) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//             <td><img src="${imagen}" width="100"></td>
//             <td>${titulo}</td>
//             <td>${precio}</td>
//             <td>${cantidad}</td>
//             <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
//         `;
//     contenedorCarrito.appendChild(row);
//   });
// }

// function limpiarHTML() {
//   while (contenedorCarrito.firstChild) {
//     contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//   }
// }
