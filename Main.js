let boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos() {
  let dni = document.getElementById("dni").value;
  fetch(
    "https://apiperu.dev/api/dni/" +
      dni +
      "?api_token=2243e5d022a3780e27cf6ee519de43cc9b87d3bd75843dd1e27aa0900a1f354a"
  )
    .then((datos) => datos.json())
    .then((datos) => {
      console.log(datos.data);
      document.getElementById("doc").value = datos.data.numero;
      document.getElementById("nombre").value = datos.data.nombres;
      document.getElementById("apellido").value =
        datos.data.apellido_paterno + " " + datos.data.apellido_materno;
      document.getElementById("cui").value = datos.data.codigo_verificacion;
    });
}
