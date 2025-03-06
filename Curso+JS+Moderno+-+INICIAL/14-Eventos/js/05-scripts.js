//! Eventos al dar scroll con el mouse
window.addEventListener("scroll", () => {
  //   console.log("Scrolling");
  //   const scrollPX = window.scrollY;
  //   console.log(scrollPX);

  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();

  //   console.log(ubicacion);

  if (ubicacion.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aun no, da mas scroll");
  }
});
