document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formRegister");
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const errorFirstName = document.getElementById("error-firstname");
    const errorLastName = document.getElementById("error-lastname");
    const errorEmail = document.getElementById("error-email");
    const errorModal = document.getElementById("errorModal");
    const errorMessage = document.getElementById("errorMessage");
    const errorModalButton = document.getElementById("errorModalButton");

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Solo letras y espacios, pueden llevar acentos.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateName(name) {
        return nameRegex.test(name);
    }

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    function validateForm() {
        let valid = true;

        if (!validateName(firstNameInput.value)) {
            errorFirstName.textContent = "Por favor, ingrese un nombre válido.";
            valid = false;
        } else {
            errorFirstName.textContent = "";
        }

        if (!validateName(lastNameInput.value)) {
            errorLastName.textContent = "Por favor, ingrese un apellido válido.";
            valid = false;
        } else {
            errorLastName.textContent = "";
        }

        if (!validateEmail(emailInput.value)) {
            errorEmail.textContent = "Por favor, ingrese un email válido.";
            valid = false;
        } else {
            errorEmail.textContent = "";
        }

        return valid;
    }

    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
            errorMessage.textContent = "Por favor, complete todos los campos correctamente antes de enviar el formulario.";
            errorModal.style.display = "block";
        }
    });

    errorModalButton.addEventListener("click", function() {
        errorModal.style.display = "none";
    });

    form.addEventListener("reset", function(event) {
        errorFirstName.textContent = "";
        errorLastName.textContent = "";
        errorEmail.textContent = "";
    });
});