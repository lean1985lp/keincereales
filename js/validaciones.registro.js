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

    function showErrorMessage(message) {
        errorMessage.textContent = message;
        errorModal.style.display = "block";
    }

    function clearErrors() {
        errorFirstName.textContent = "";
        errorLastName.textContent = "";
        errorEmail.textContent = "";
    }

    function resetForm() {
        clearErrors();
        form.reset();
    }

    firstNameInput.addEventListener("blur", function() {
        if (!validateName(firstNameInput.value.trim())) {
            showErrorMessage("Nombre incorrecto. Ingrese nuevamente su nombre.");
        } else {
            errorFirstName.textContent = "";
        }
    });

    lastNameInput.addEventListener("blur", function() {
        if (!validateName(lastNameInput.value.trim())) {
            showErrorMessage("Apellido incorrecto. Ingrese nuevamente su apellido.");
        } else {
            errorLastName.textContent = "";
        }
    });

    emailInput.addEventListener("blur", function() {
        if (!validateEmail(emailInput.value.trim())) {
            showErrorMessage("Email incorrecto. Ingrese nuevamente su email.");
        } else {
            errorEmail.textContent = "";
        }
    });


    form.addEventListener("submit", function(event) {
        clearErrors();

        if (!validateName(firstNameInput.value.trim())) {
            event.preventDefault();
            showErrorMessage("Por favor, ingrese un nombre válido.");
            return;
        }

        if (!validateName(lastNameInput.value.trim())) {
            event.preventDefault();
            showErrorMessage("Por favor, ingrese un apellido válido.");
            return;
        }

        if (!validateEmail(emailInput.value.trim())) {
            event.preventDefault();
            showErrorMessage("Por favor, ingrese un email válido.");
            return;
        }

        alert("Los datos fueron enviados correctamente."); // Puedes reemplazar esto con tu propia lógica de envío de datos.
        resetForm();
    });

    form.addEventListener("reset", function(event) {
        clearErrors();
    });

    form.addEventListener("click", function(event) {
        if (event.target.type === "submit") {
            if (!validateName(firstNameInput.value.trim()) || !validateName(lastNameInput.value.trim()) || !validateEmail(emailInput.value.trim())) {
                event.preventDefault();
                showErrorMessage("Por favor, ingrese la totalidad de los datos requeridos antes de enviar.");
            }
        }
    });

    errorModalButton.addEventListener("click", function() {
        errorModal.style.display = "none";
    });
});