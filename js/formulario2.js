document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRegister');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar los campos antes de enviar
        if (validateForm()) {
            // Simular envío exitoso (aquí puedes realizar una petición AJAX si lo deseas)
            alert('Formulario enviado correctamente!');
            form.reset(); // Limpiar el formulario después de enviar
        }
    });

    function validateForm() {
        let isValid = true;

        // Resetear mensajes de error
        resetErrors();

        // Validar cada campo
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const mensaje = document.getElementById('mensaje');

        if (!nombre.value.trim()) {
            setErrorFor(nombre, 'El nombre es obligatorio');
            isValid = false;
        }

        if (!apellido.value.trim()) {
            setErrorFor(apellido, 'El apellido es obligatorio');
            isValid = false;
        }

        if (!email.value.trim()) {
            setErrorFor(email, 'El email es obligatorio');
            isValid = false;
        } else if (!isEmailValid(email.value.trim())) {
            setErrorFor(email, 'El email no es válido');
            isValid = false;
        }

        if (!telefono.value.trim()) {
            setErrorFor(telefono, 'El teléfono es obligatorio');
            isValid = false;
        }

        if (!mensaje.value.trim()) {
            setErrorFor(mensaje, 'El mensaje es obligatorio');
            isValid = false;
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const errorElement = document.getElementById(error-${input.id});
        errorElement.innerText = message;
    }

    function resetErrors() {
        document.querySelectorAll('.error').forEach(error => error.innerText = '');
    }

    function isEmailValid(email) {
        // Utilizando una expresión regular simple para validar el email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});