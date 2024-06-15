document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formRegister");
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const errorFirstName = document.getElementById("error-firstname");
    const errorLastName = document.getElementById("error-lastname");
    const errorEmail = document.getElementById("error-email");
    const errorModal = document.getElementById("errorModal");
    const telefonoInput = document.getElementById("telefono");
    const errorTelefono = document.getElementById("error-telefono");
    const errorCheckboxes = document.getElementById("error-checkboxes");
    const errorMessage = document.getElementById("errorMessage");
    const errorModalButton = document.getElementById("errorModalButton");


    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Solo letras y espacios, pueden llevar acentos.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{7,14}$/; // Acepta números entre 7 y 14 dígitos.

    function validateName(name) {
        return nameRegex.test(name);
    }

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    function validateTelefono(telefono) {
        return telefonoRegex.test(telefono);
    }

    function showErrorMessage(message) {
        errorMessage.textContent = message;
        errorModal.style.display = "block";
    }

    function clearErrors() {
        errorFirstName.textContent = "";
        errorLastName.textContent = "";
        errorEmail.textContent = "";
        errorTelefono.textContent = "";
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

    telefonoInput.addEventListener("blur", function() {
        if (!validateTelefono(telefonoInput.value.trim())) {
            showErrorMessage("Teléfono incorrecto. Debe contener entre 7 y 14 números.");
        } else {
            errorTelefono.textContent = "";
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

        if (!validateTelefono(telefonoInput.value.trim())) {
            event.preventDefault();
            showErrorMessage("Por favor, ingrese un teléfono válido.");
            return;
        }

        const checkboxComprar = document.getElementById("quiero-comprar");
        const checkboxVender = document.getElementById("quiero-vender");
        const checkboxDistribuir = document.getElementById("quiero-distribuir");

        if (!checkboxComprar.checked && !checkboxVender.checked && !checkboxDistribuir.checked) {
            event.preventDefault();
            showErrorMessage("Por favor, seleccione al menos una opción.");
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