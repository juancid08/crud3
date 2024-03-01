const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})
/*login */
function validarFormulario() {
    
    let correcto = true;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let errorUsuario = document.getElementById("errorUsuario");
    let errorContrasena = document.getElementById("errorContrasena");
    let regexUsuario = /^[a-zA-Z0-9]{8,12}$/;
    let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;

    
    if (usuario === "") {
        errorUsuario.textContent = "El campo usuario no puede estar vacío.";
        document.getElementById('usuario').style.borderColor = "red";
        correcto = false;
    } else if (!regexUsuario.test(usuario)) {
        errorUsuario.textContent = "El usuario debe tener entre 8 y 12 caracteres alfanuméricos.";
        document.getElementById('usuario').style.borderColor = "red";
        correcto = false;
    } else {
        errorUsuario.textContent = "";
        document.getElementById('usuario').style.borderColor = "lightgray";
    }

    
    if (contrasena === "") {
        errorContrasena.textContent = "El campo contraseña no puede estar vacío.";
        document.getElementById('contrasena').style.borderColor = "red";
        correcto = false;
    } else if (!regexContrasena.test(contrasena)) {
        errorContrasena.textContent = "La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una mayúscula, una minúscula y un dígito.";
        document.getElementById('contrasena').style.borderColor = "red";
        correcto = false;
    } else {
        errorContrasena.textContent = "";
        document.getElementById('contrasena').style.borderColor = "lightgray";
    }

    
    return correcto;
}

function resetear(id) {
    document.getElementById(id).style.borderColor = "lightgray";
    document.getElementById(id + 'Help').style.visibility = "hidden";
}

/*VALIDAR INSERCICIÓN */
function validarFormulari() {
    let correcto = false;
    let checked = false;
    let telefono = document.getElementById("telefono").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let radios = document.getElementsByName("gender");
    let checkbox = document.getElementById("mayoria");
    let selectOption = document.getElementById("select-option");
    let errorApellidos = document.getElementById("errorApellidos");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorNombre = document.getElementById("errorNombre");
    let errorDNI = document.getElementById("errorDNI");
    let errorEmail = document.getElementById("errorEmail");
    let errorSelect = document.getElementById("errorSelect");
    let errorGender = document.getElementById("errorGender");
    let errorCheckbox = document.getElementById("errorCheckbox");
    let regexTelefono = /^\d{9}$/; 
    let regexNombre = /^(?![\s\S]*[\d])[\s\S]{2,}$/;
    let regexApellidos = /^(?![\s\S]*[\d])[\s\S]{2,}$/;
    let regexDNI = /^\d{8}[A-Z]$/;
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/;


    /*********validación telefono*********************/
    if (telefono === "") {
        errorTelefono.textContent = "El campo teléfono no puede estar vacío.";
        document.getElementById('telefono').style.borderColor = "red";
        correcto = false;
    } else if (!regexTelefono.test(telefono)) {
        errorTelefono.textContent = "El teléfono debe tener exactamente 9 dígitos y ser números.";
        document.getElementById('telefono').style.borderColor = "red";
        correcto = false;
    } else {
        errorTelefono.textContent = "";
        document.getElementById('telefono').style.borderColor = "lightgray";
        correcto = false;
    }

    /*********validación nombre*********************/
    if (nombre === "" || /^\s+$/.test(nombre) || !regexNombre.test(nombre)) {
        errorNombre.textContent = "El nombre no es válido. Debe contener al menos dos caracteres y solo puede contener letras y espacios.";
        document.getElementById('nombre').style.borderColor = "red";
        correcto=false;
    } else {
        errorNombre.textContent = "";
        document.getElementById('nombre').style.borderColor = "lightgray";
        correcto = false;
    }

    /*********validación apellidos*********************/
    if (apellidos === "" || /^\s+$/.test(apellidos) || !regexApellidos.test(apellidos)) {
        errorApellidos.textContent = "Los apellidos no son válidos. Deben contener al menos dos caracteres y solo pueden contener letras y espacios.";
        document.getElementById('apellidos').style.borderColor = "red";
        correcto=false;
    } else {
        errorApellidos.textContent = "";
        document.getElementById('apellidos').style.borderColor = "lightgray";
        correcto=false;
    }
    

    /*********validación dni*********************/
    if (dni === "" || /^\s+$/.test(dni) || !regexDNI.test(dni)) {
        errorDNI.textContent = "El DNI no es válido. Debe tener 8 números seguidos de una letra (formato 12345678Z).";
        document.getElementById('dni').style.borderColor = "red";
        correcto = false;
    } else {
        errorDNI.textContent = "";
        document.getElementById('dni').style.borderColor = "lightgray";
        correcto=false;
    }
    
    /*********validación email*********************/
    if (email === "" || !regexEmail.test(email)) {
        errorEmail.textContent = "El correo electrónico no es válido.";
        document.getElementById('email').style.borderColor = "red";
        correcto=false;
    } else {
        errorEmail.textContent = "";
        document.getElementById('email').style.borderColor = "lightgray";
        correcto=false;
    }

    /*********validación de select*********************/
    if (selectOption.value === "") {
        errorSelect.textContent = "Por favor, elige una opción.";
        selectOption.style.borderColor = "red";
        correcto=false;
    } else {
        errorSelect.textContent = "";
        selectOption.style.borderColor = "lightgray";
        correcto=false;
    }

    /*********validación de radio button*********************/
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        errorGender.textContent = "Por favor, selecciona tu género.";
        correcto=false;
    } else {
        errorGender.textContent = "";
        correcto=false;
    }
    /*********validación de casilla marcada*********************/
    if (!checkbox.checked) {
        errorCheckbox.textContent = "Debes aceptar que eres mayor de edad.";
        correcto=false;
    } else {
        errorCheckbox.textContent = "";
        correcto=false;
    }

    return correcto;


}

function resetear(id) {
    document.getElementById(id).style.borderColor = "lightgray";
    
}