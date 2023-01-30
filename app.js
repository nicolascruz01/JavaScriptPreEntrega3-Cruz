const formulario = document.getElementById("formulario-reservacion");
const tabla = document.getElementById("tabla-reservaciones");
const cuerpoTabla = document.getElementById("cuerpo-tabla-reservaciones");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fechaEntrada = document.getElementById("fecha-entrada").value;
  const fechaSalida = document.getElementById("fecha-salida").value;
  const numeroPersonas = document.getElementById("numero-personas").value;
  const numeroNoches = document.getElementById("numero-noches").value;
  const precioPorNoche = document.getElementById("precio-por-noche").value;
  const precioTotal = document.getElementById("precio-total").value;

  const reservacion = {
    nombre,
    fechaEntrada,
    fechaSalida,
    numeroPersonas,
    numeroNoches,
    precioPorNoche,
    precioTotal,
  };

  let reservaciones = JSON.parse(localStorage.getItem("reservaciones")) || [];
  reservaciones.push(reservacion);
  localStorage.setItem("reservaciones", JSON.stringify(reservaciones));

  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${fechaEntrada}</td>
    <td>${fechaSalida}</td>
    <td>${numeroPersonas}</td>
    <td>${numeroNoches}</td>
    <td>${precioPorNoche}</td>
    <td>${precioTotal}</td>
  `;
  cuerpoTabla.appendChild(fila);
});

document.addEventListener("DOMContentLoaded", () => {
  let reservaciones = JSON.parse(localStorage.getItem("reservaciones")) || [];

  reservaciones.forEach((reservacion) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${reservacion.nombre}</td>
      <td>${reservacion.fechaEntrada}</td>
      <td>${reservacion.fechaSalida}</td>
      <td>${reservacion.numeroPersonas}</td>
      <td>${reservacion.numeroNoches}</td>
      <td>${reservacion.precioPorNoche}</td>
      <td>${reservacion.precioTotal}</td>
    `;
    cuerpoTabla.appendChild(fila);
  });
});
