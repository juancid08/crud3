const formRegister = document.querySelector(".register");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})

function validarFormulari() {
    let correcto = true;
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
    let regexDNI = /^\d{8}[A-Za-z]$/;

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
function resetearError(id) {
    document.getElementById(id).innerText = "";
}
function resetearInput(id) {
    let inputElement = document.getElementById(id);
    let errorElement = document.getElementById("error" + id.charAt(0).toUpperCase() + id.slice(1));
    if (inputElement.value !== "") {
        inputElement.style.borderColor = "lightgray";
        if (errorElement) {
            errorElement.textContent = ""; 
        }
    }
    document.getElementById(id).innerText = "";
}


