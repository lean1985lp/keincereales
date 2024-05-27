document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formRegister').addEventListener('submit', function(event) {
      var email = document.getElementById('email').value;
      var errorEmail = document.getElementById('error-email');
      var valid = true;

      // Validar campo de email
      if (!validateEmail(email)) {
          errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
          valid = false;
      } else {
          errorEmail.textContent = '';
      }

      if (!valid) {
          event.preventDefault();
      }
  });

  function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});