function myFunction() {
    let text = "Está seguro de querer eliminar este empleado.";
    if (confirm(text) == true) {
      text = "¡Presionó OK!";
    } else {
      text = "¡Canceló!";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function myFunction2() {
    let text = "Está seguro de querer eliminar este departamento.";
    if (confirm(text) == true) {
      text = "¡Presionó OK!";
    } else {
      text = "¡Canceló!";
    }
    document.getElementById("demo").innerHTML = text;
  }
  