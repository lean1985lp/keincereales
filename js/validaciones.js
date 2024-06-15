document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRegister');
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    const errorModalButton = document.getElementById('errorModalButton');
    const successModal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    const successModalButton = document.getElementById('successModalButton');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        let message = '';

        // Validación del campo de email
        if (!email.value) {
            isValid = false;
            message += 'El campo de email es obligatorio.<br>';
        } else if (!validateEmail(email.value)) {
            isValid = false;
            message += 'El formato del email no es válido.<br>';
        }

        if (!isValid) {
            event.preventDefault();
            errorMessage.innerHTML = message;
            errorModal.style.display = 'block';
        } else {
            // Envío del formulario exitoso, mostrar mensaje de éxito
            showSuccessMessage();
            event.preventDefault(); // Prevenir envío real del formulario para el ejemplo
        }
    });

    errorModalButton.addEventListener('click', function () {
        errorModal.style.display = 'none';
    });

    successModalButton.addEventListener('click', function () {
        successModal.style.display = 'none';
    });

    // Validar el formato del email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Función para mostrar el mensaje de éxito
    function showSuccessMessage() {
        successMessage.style.display = 'block';
        successModal.style.display = 'block';
    }
});