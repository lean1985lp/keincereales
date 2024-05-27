document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();  
    validarFormulario();
});

function validarFormulario() {
     document.getElementById('mensajeError').innerText = '';
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var comentarios = document.getElementById('comentarios').value;
    var acepto = document.getElementById('acepto').checked;

    if (nombre.trim() === '') {
        mostrarError('Por favor, introduce tu nombre.');
        return false;
    }
    if (apellido.trim() === '') {
        mostrarError('Por favor, introduce tu apellido.');
        return false;
    }
    if (!validarEmail(email)) {
        mostrarError('Por favor, introduce un email válido.');
        return false;
    }
    if (comentarios.trim() === '') {
        mostrarError('Por favor, introduce tus comentarios.');
        return false;
    }
    if (!acepto) {
        mostrarError('Debes aceptar los términos y condiciones.');
        return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
}

function mostrarError(mensaje) {
    document.getElementById('mensajeError').innerText = mensaje;
}

function validarEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
