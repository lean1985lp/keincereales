// document.getElementById('formRegister').addEventListener('submit', function(event) {
//     var nombre = document.getElementById('nombre').value.trim();
//     var apellido = document.getElementById('apellido').value.trim();
//     var email = document.getElementById('email').value.trim();
    
//     var errorNombre = document.getElementById('error-nombre');
//     var errorApellido = document.getElementById('error-apellido');
//     var errorEmail = document.getElementById('error-email');
    
//     var isValid = true;
  
//     // Validación del campo Nombre
//     if (nombre === '') {
//       errorNombre.textContent = 'Por favor, ingresa tu nombre.';
//       errorNombre.classList.add('error');
//       isValid = false;
//     } else if (nombre.length < 2) {
//       errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
//       errorNombre.classList.add('error');
//       isValid = false;
//     } else if (/\d/.test(nombre)) {
//       errorNombre.textContent = 'El nombre no puede contener números.';
//       errorNombre.classList.add('error');
//       isValid = false;
//     } else {
//       errorNombre.textContent = '';
//       errorNombre.classList.remove('error');
//     }
  
//     // Validación del campo Apellido
//     if (nombre !== '' && nombre.length >= 2 && !/\d/.test(nombre)) {
//       if (apellido === '') {
//         errorApellido.textContent = 'Por favor, ingresa tu apellido.';
//         errorApellido.classList.add('error');
//         isValid = false;
//       } else if (apellido.length < 2) {
//         errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres.';
//         errorApellido.classList.add('error');
//         isValid = false;
//       } else if (/\d/.test(apellido)) {
//         errorApellido.textContent = 'El apellido no puede contener números.';
//         errorApellido.classList.add('error');
//         isValid = false;
//       } else {
//         errorApellido.textContent = '';
//         errorApellido.classList.remove('error');
//       }
//     } else {
//       // Si el nombre no es válido, impide avanzar al siguiente campo
//       isValid = false;
//       if (apellido !== '') {
//         errorApellido.textContent = 'Completa el nombre antes de ingresar el apellido.';
//         errorApellido.classList.add('error');
//       }
//     }
  
//     // Validación del campo Email
//     if (nombre !== '' && nombre.length >= 2 && !/\d/.test(nombre) && apellido !== '' && apellido.length >= 2 && !/\d/.test(apellido)) {
//       if (!validateEmail(email)) {
//         errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
//         errorEmail.classList.add('error');
//         isValid = false;
//       } else {
//         errorEmail.textContent = '';
//         errorEmail.classList.remove('error');
//       }
//     } else {
//       // Si el nombre o el apellido no son válidos, impide avanzar al siguiente campo
//       isValid = false;
//       if (email !== '') {
//         errorEmail.textContent = 'Completa el nombre y el apellido antes de ingresar el correo electrónico.';
//         errorEmail.classList.add('error');
//       }
//     }
    
//     if (!isValid) {
//       event.preventDefault();
//     }
//   });
  
//   function validateEmail(email) {
//     // Expresión regular más robusta para validar correos electrónicos
//     var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   }


////////////////////////////SEGUNDA VERSION////////////////////////////
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('formRegister').addEventListener('submit', function (event) {
//       var nombre = document.getElementById('nombre').value.trim();
//       var apellido = document.getElementById('apellido').value.trim();
//       var email = document.getElementById('email').value.trim();
//       var telefono = document.getElementById('telefono').value.trim();
//       var mensaje = document.getElementById('mensaje').value.trim();
      
//       var errorNombre = document.getElementById('error-nombre');
//       var errorApellido = document.getElementById('error-apellido');
//       var errorEmail = document.getElementById('error-email');
//       var errorTelefono = document.getElementById('error-telefono');
//       var errorMensaje = document.getElementById('error-mensaje');
      
//       var isValid = true;
    
//       // Validación del campo Nombre
//       if (nombre === '') {
//           errorNombre.textContent = 'Por favor, ingresa tu nombre.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else if (nombre.length < 2) {
//           errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else if (/\d/.test(nombre)) {
//           errorNombre.textContent = 'El nombre no puede contener números.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else {
//           errorNombre.textContent = '';
//           errorNombre.classList.remove('error');
//       }
    
//       // Validación del campo Apellido
//       if (apellido === '') {
//           errorApellido.textContent = 'Por favor, ingresa tu apellido.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else if (apellido.length < 2) {
//           errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else if (/\d/.test(apellido)) {
//           errorApellido.textContent = 'El apellido no puede contener números.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else {
//           errorApellido.textContent = '';
//           errorApellido.classList.remove('error');
//       }
    
//       // Validación del campo Email
//       if (!validateEmail(email)) {
//           errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
//           errorEmail.classList.add('error');
//           isValid = false;
//       } else {
//           errorEmail.textContent = '';
//           errorEmail.classList.remove('error');
//       }
    
//       // Validación del campo Telefono
//       if (telefono === '') {
//           errorTelefono.textContent = 'Por favor, ingresa tu número de teléfono.';
//           errorTelefono.classList.add('error');
//           isValid = false;
//       } else {
//           errorTelefono.textContent = '';
//           errorTelefono.classList.remove('error');
//       }
    
//       // Validación del campo Mensaje
//       if (mensaje === '') {
//           errorMensaje.textContent = 'Por favor, ingresa tu mensaje.';
//           errorMensaje.classList.add('error');
//           isValid = false;
//       } else {
//           errorMensaje.textContent = '';
//           errorMensaje.classList.remove('error');
//       }
    
//       if (!isValid) {
//           event.preventDefault();
//       }
//   });
// });

// function validateEmail(email) {
//   var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }


// ////////////////////////////TERCERA VERSION////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('formRegister').addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevenir el envío del formulario

//       var nombre = document.getElementById('nombre').value.trim();
//       var apellido = document.getElementById('apellido').value.trim();
//       var email = document.getElementById('email').value.trim();
//       var telefono = document.getElementById('telefono').value.trim();
//       var mensaje = document.getElementById('mensaje').value.trim();
      
//       var errorNombre = document.getElementById('error-nombre');
//       var errorApellido = document.getElementById('error-apellido');
//       var errorEmail = document.getElementById('error-email');
//       var errorTelefono = document.getElementById('error-telefono');
//       var errorMensaje = document.getElementById('error-mensaje');
      
//       var isValid = true;

//       // Validación del campo Nombre
//       if (nombre === '') {
//           errorNombre.textContent = 'Por favor, ingresa tu nombre.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else if (nombre.length < 2) {
//           errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else if (/\d/.test(nombre)) {
//           errorNombre.textContent = 'El nombre no puede contener números.';
//           errorNombre.classList.add('error');
//           isValid = false;
//       } else {
//           errorNombre.textContent = '';
//           errorNombre.classList.remove('error');
//       }

//       // Validación del campo Apellido
//       if (apellido === '') {
//           errorApellido.textContent = 'Por favor, ingresa tu apellido.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else if (apellido.length < 2) {
//           errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else if (/\d/.test(apellido)) {
//           errorApellido.textContent = 'El apellido no puede contener números.';
//           errorApellido.classList.add('error');
//           isValid = false;
//       } else {
//           errorApellido.textContent = '';
//           errorApellido.classList.remove('error');
//       }

//       // Validación del campo Email
//       if (!validateEmail(email)) {
//           errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
//           errorEmail.classList.add('error');
//           isValid = false;
//       } else {
//           errorEmail.textContent = '';
//           errorEmail.classList.remove('error');
//       }
      
//       // Validación del campo Teléfono
//       if (telefono === '') {
//           errorTelefono.textContent = 'Por favor, ingresa tu teléfono.';
//           errorTelefono.classList.add('error');
//           isValid = false;
//       } else if (!/^\d+$/.test(telefono)) {
//           errorTelefono.textContent = 'El teléfono solo puede contener números.';
//           errorTelefono.classList.add('error');
//           isValid = false;
//       } else {
//           errorTelefono.textContent = '';
//           errorTelefono.classList.remove('error');
//       }

//       // Validación del campo Mensaje
//       if (mensaje === '') {
//           errorMensaje.textContent = 'Por favor, ingresa tu mensaje.';
//           errorMensaje.classList.add('error');
//           isValid = false;
//       } else {
//           errorMensaje.textContent = '';
//           errorMensaje.classList.remove('error');
//       }

//       if (isValid) {
//           // Mostrar alerta con los datos del formulario
//           alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`);

//           // Crear objeto con los datos
//           var formData = {
//               nombre: nombre,
//               apellido: apellido,
//               email: email,
//               telefono: telefono,
//               mensaje: mensaje
//           };

//           // Guardar los datos en un archivo JSON (simulación)
//           downloadJSON(formData, 'formulario_datos.json');
//       }
//   });

//   function validateEmail(email) {
//       var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return re.test(email);
//   }

//   function downloadJSON(data, filename) {
//       var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
//       var downloadAnchorNode = document.createElement('a');
//       downloadAnchorNode.setAttribute("href", dataStr);
//       downloadAnchorNode.setAttribute("download", filename);
//       document.body.appendChild(downloadAnchorNode);
//       downloadAnchorNode.click();
//       downloadAnchorNode.remove();
//   }
// });
// alert(' Ahora si cargo el js correctamente');


// ////////////////////////////CUARTA VERSION - yo no me doy por vencido, yo quiero un mundo con... y bla bla bla////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formRegister').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefono = document.getElementById('telefono').value.trim();
        var mensaje = document.getElementById('mensaje').value.trim();
        
        var errorNombre = document.getElementById('error-nombre');
        var errorApellido = document.getElementById('error-apellido');
        var errorEmail = document.getElementById('error-email');
        var errorTelefono = document.getElementById('error-telefono');
        var errorMensaje = document.getElementById('error-mensaje');
        
        var isValid = true;

        // Limpiar mensajes de error
        errorNombre.textContent = '';
        errorApellido.textContent = '';
        errorEmail.textContent = '';
        errorTelefono.textContent = '';
        errorMensaje.textContent = '';

        if (nombre === '') {
            errorNombre.textContent = 'Ingresa tu nombre.';
            errorNombre.style.color = 'white'; 
            errorNombre.style.fontWeight = '700'; 
            errorNombre.style.display = 'block'; 
            errorNombre.style.fontSize = '.7em';
            errorNombre.style.padding = '1px 10px'; 
            isValid = false;
        } else if (nombre.length < 2) {
            errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
            errorNombre.style.color = 'white'; 
            errorNombre.style.fontWeight = '700'; 
            errorNombre.style.display = 'block'; 
            errorNombre.style.fontSize = '.7em';
            errorNombre.style.padding = '1px 10px'; 
            isValid = false;
        } else if (/\d/.test(nombre)) {
            errorNombre.textContent = 'El nombre no puede contener números.';
            errorNombre.style.color = 'white'; 
            errorNombre.style.fontWeight = '700'; 
            errorNombre.style.display = 'block'; 
            errorNombre.style.fontSize = '.7em';
            errorNombre.style.padding = '1px 10px'; 
            isValid = false;
        }

        if (apellido === '') {
            errorApellido.textContent = 'Ingresa tu apellido.';
            errorApellido.style.color = 'white'; 
            errorApellido.style.fontWeight = '700'; 
            errorApellido.style.display = 'block'; 
            errorApellido.style.fontSize = '.7em';
            errorApellido.style.padding = '1px 10px'; 
            isValid = false;
        } else if (apellido.length < 2) {
            errorApellido.textContent = 'El apellido debe tener al menos 2 caracteres.';
            errorApellido.style.color = 'white'; 
            errorApellido.style.fontWeight = '700'; 
            errorApellido.style.display = 'block'; 
            errorApellido.style.fontSize = '.7em';
            errorApellido.style.padding = '1px 10px'; 
            isValid = false;
        } else if (/\d/.test(apellido)) {
            errorApellido.textContent = 'El apellido no puede contener números.';
            errorApellido.style.color = 'white'; 
            errorApellido.style.fontWeight = '700'; 
            errorApellido.style.display = 'block'; 
            errorApellido.style.fontSize = '.7em';
            errorApellido.style.padding = '1px 10px'; 
            isValid = false;
        }

        if (!validateEmail(email)) {
            errorEmail.textContent = 'Correo electrónico inválido.';
            // errorEmail.style.backgroundColor = 'red';
            errorEmail.style.color = 'white'; 
            errorEmail.style.fontWeight = '700'; 
            errorEmail.style.display = 'block'; 
            errorEmail.style.fontSize = '.7em';
            errorEmail.style.padding = '1px 10px'; 
            isValid = false;
        } else {
            errorEmail.textContent = ''; 
            errorEmail.style.display = 'none'; 
        }
        
    
        if (telefono === '') {
            errorTelefono.textContent = 'Por favor, ingresa tu teléfono.';
            errorTelefono.style.color = 'white'; 
            errorTelefono.style.fontWeight = '700'; 
            errorTelefono.style.display = 'block'; 
            errorTelefono.style.fontSize = '.7em';
            errorTelefono.style.padding = '1px 10px'; 
            isValid = false;
        } else if (!/^\d+$/.test(telefono)) {
            errorTelefono.textContent = 'El teléfono solo puede contener números.';
            errorTelefono.style.color = 'white'; 
            errorTelefono.style.fontWeight = '700'; 
            errorTelefono.style.display = 'block'; 
            errorTelefono.style.fontSize = '.7em';
            errorTelefono.style.padding = '1px 10px';
            isValid = false;
        }

        if (mensaje === '') {
            errorMensaje.textContent = 'Por favor, ingresa tu mensaje.';
            errorMensaje.style.color = 'white'; 
            errorMensaje.style.fontWeight = '700'; 
            errorMensaje.style.display = 'block'; 
            errorMensaje.style.fontSize = '.7em';
            errorMensaje.style.padding = '1px 10px'; 
            isValid = false;
        }

        if (isValid) {
            alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`);

            var formData = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                mensaje: mensaje
            };

            
            downloadJSON(formData, 'formulario_datos.json');
        }
        nombre.textContent = '';
        apellido.textContent = '';
        email.textContent = '';
        telefono.textContent = '';
         mensaje.textContent = '';

    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function downloadJSON(data, filename) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", filename);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
});

