window.onload = function () {
  let form = document.querySelector("form");
  let mensajeAlerta = document.querySelector("#mensajeAlerta");

  let soloNumeros = /^[0-9\s]+$/;
  let tresNumeros = /^[0-9]{3}$/
  let soloLetras = /^[a-zA-Z\s]+$/;
  let soloMensaje = /^[0-9a-zA-Z\s]+$/

  function crearAlerta() {
    let divAlerta = document.createElement("div");
    let textoAlerta = document.createTextNode("Some fields are missing");
    divAlerta.setAttribute("class", "alert alert-danger");
    divAlerta.setAttribute("role", "alert");
    divAlerta.setAttribute("id", "alertaRoja");
    divAlerta.appendChild(textoAlerta);
    mensajeAlerta.appendChild(divAlerta);
  };

  function removerAlerta() {
    mensajeAlerta.removeChild(alertaRoja);
  };

  function crearTextoSmall(mensaje, id, div) {
    let elemento = document.getElementById(div);
    let nuevoSmall = document.createElement("small");
    let textoSmall = document.createTextNode(mensaje);
    nuevoSmall.appendChild(textoSmall);
    nuevoSmall.classList.add("text-danger");
    nuevoSmall.setAttribute("id", id);
    elemento.appendChild(nuevoSmall);
  }

  function removerSmall(div, small) {
    let selectedDiv = document.getElementById(div);
    document.getElementById(small) ? selectedDiv.lastChild.remove() : "";
  }

  form.addEventListener("submit", (evento) => {
    // Evita el comportamiento por defecto de los formularios, (enviar los datos)
    evento.preventDefault();

    // ------------------------------------------------------------------------
    // Variable para controlar si existe error
    let hayError = false;

    let { cardNumber, cvcNumber, cantidadDinero, primerNombre, apellido, ciudad, codigoPostal, selectorEstado, areaMensaje, botonCancelar, botonEnviar } = form;
    // ------------------------------------------------------------------------
    // Validacion si existe el numero de tarjeta
    if (cardNumber.value === '') {
      cardNumber.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloNumeros.test(cardNumber.value)) {
      cardNumber.classList.add('is-invalid');
      mensajeError = "El numero de tarjeta solo debe tener numeros";
      document.getElementById("smallNumero") ? "" : crearTextoSmall(mensajeError, "smallNumero", "divCard");
      hayError = true;
    } else {
      cardNumber.classList.remove('is-invalid');
      cardNumber.classList.add('is-valid');
      removerSmall('divCard', 'smallNumero');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe el cvc
    if (cvcNumber.value === '') {
      cvcNumber.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!tresNumeros.test(cvcNumber.value)) {
      cvcNumber.classList.add('is-invalid');
      mensajeError = "El numero de CVC debe tener solo 3 numeros";
      document.getElementById("smallCvc") ? "" : crearTextoSmall(mensajeError, "smallCvc", "divCvc");
      hayError = true;
    } else {
      cvcNumber.classList.remove('is-invalid');
      cvcNumber.classList.add('is-valid');
      removerSmall('divCvc', 'smallCvc');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe cantidad de dinero
    if (cantidadDinero.value === '') {
      cantidadDinero.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloNumeros.test(cantidadDinero.value)) {
      cantidadDinero.classList.add('is-invalid');
      mensajeError = "La cantidad de dinero solo puede tener numeros";
      document.getElementById("smallCantidad") ? "" : crearTextoSmall(mensajeError, "smallCantidad", "divCantidad");
      hayError = true;
    } else {
      cantidadDinero.classList.remove('is-invalid');
      cantidadDinero.classList.add('is-valid');
      removerSmall('divCantidad', 'smallCantidad');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe nombre
    if (primerNombre.value === '') {
      primerNombre.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloLetras.test(primerNombre.value)) {
      primerNombre.classList.add('is-invalid');
      mensajeError = "El nombre solo puede contener letras";
      document.getElementById("smallNombre") ? "" : crearTextoSmall(mensajeError, "smallNombre", "divNombre");
      hayError = true;
    } else {
      primerNombre.classList.remove('is-invalid');
      primerNombre.classList.add('is-valid');
      removerSmall('divNombre', 'smallNombre');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe apellido
    if (apellido.value === '') {
      apellido.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloLetras.test(apellido.value)) {
      apellido.classList.add('is-invalid');
      mensajeError = "El apellido solo puede contener letras";
      document.getElementById("smallApellido") ? "" : crearTextoSmall(mensajeError, "smallApellido", "divApellido");
      hayError = true;
    } else {
      apellido.classList.remove('is-invalid');
      apellido.classList.add('is-valid');
      removerSmall('divApellido', 'smallApellido');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe ciudad
    if (ciudad.value === '') {
      ciudad.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloLetras.test(ciudad.value)) {
      ciudad.classList.add('is-invalid');
      mensajeError = "La ciudad solo puede contener letras";
      document.getElementById("smallCiudad") ? "" : crearTextoSmall(mensajeError, "smallCiudad", "divCiudad");
      hayError = true;
    } else {
      ciudad.classList.remove('is-invalid');
      ciudad.classList.add('is-valid');
      removerSmall('divCiudad', 'smallCiudad');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe postal
    if (codigoPostal.value === '') {
      codigoPostal.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloNumeros.test(codigoPostal.value)) {
      codigoPostal.classList.add('is-invalid');
      mensajeError = "El codigo postal solo puede contener numeros"; // indicamos si tenermos error;
      document.getElementById("smallPostal") ? "" : crearTextoSmall(mensajeError, "smallPostal", "divPostal");
      hayError = true;
    } else {
      codigoPostal.classList.remove('is-invalid');
      codigoPostal.classList.add('is-valid');
      removerSmall('divPostal', 'smallPostal');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe una opcion
    if (selectorEstado.value === '') {
      selectorEstado.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else {
      selectorEstado.classList.remove('is-invalid');
      selectorEstado.classList.add('is-valid');
    }

    // ------------------------------------------------------------------------
    // Validacion si existe textArea
    if (areaMensaje.value === '') {
      areaMensaje.classList.add('is-invalid');
      hayError = true; // indicamos si tenermos error;
    } else if (!soloMensaje.test(areaMensaje.value)) {
      areaMensaje.classList.add('is-invalid');
      mensajeError = "El codigo postal solo puede contener numeros"; // indicamos si tenermos error;
      document.getElementById("smallMensaje") ? "" : crearTextoSmall(mensajeError, "smallMensaje", "divtxtArea");
      hayError = true;
    } else {
      areaMensaje.classList.remove('is-invalid');
      areaMensaje.classList.add('is-valid');
      removerSmall('divtxtArea', 'smallMensaje');
    }

    // ------------------------------------------------------------------------
    document.getElementById("alertaRoja") !== null ? "" : hayError ? crearAlerta() : removerAlerta()


    if (!hayError) {
      form.submit();
    }

  });


}