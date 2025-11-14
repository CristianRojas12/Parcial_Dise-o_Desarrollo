document.addEventListener('DOMContentLoaded', function() {

    const botonModoOscuro = document.getElementById('modo-oscuro-btn');
    const body = document.body;

    function aplicarModoOscuro() {
        if (localStorage.getItem('modo') === 'oscuro') {
            body.classList.add('modo-oscuro');
            botonModoOscuro.textContent = '☀️';
        } else {
            body.classList.remove('modo-oscuro');
            botonModoOscuro.textContent = '🌙';
        }
    }

    aplicarModoOscuro();

    botonModoOscuro.addEventListener('click', function() {
        body.classList.toggle('modo-oscuro');

        if (body.classList.contains('modo-oscuro')) {
            localStorage.setItem('modo', 'oscuro');
            botonModoOscuro.textContent = '☀️';
        } else {
            localStorage.setItem('modo', 'claro');
            botonModoOscuro.textContent = '🌙';
        }
    });

const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        const errorNombre = document.getElementById('error-nombre');
        const errorEmail = document.getElementById('error-email');
        const errorMensaje = document.getElementById('error-mensaje');
        const exitoMensaje = document.getElementById('exito-mensaje');

        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            
            let esValido = true;

            errorNombre.textContent = '';
            errorEmail.textContent = '';
            errorMensaje.textContent = '';
            exitoMensaje.textContent = '';
            
            if (nombre.value.trim() === '') {
                errorNombre.textContent = 'Por favor ingresa tu nombre';
                esValido = false;
            }

            if (email.value.trim() === '') {
                errorEmail.textContent = 'Por favor ingresa tu email';
                esValido = false;
            } else if (!email.value.includes('@')) {
                errorEmail.textContent = 'Por favor ingresa un email válido';
                esValido = false;
            }
            
            if (mensaje.value.trim() === '') {
                errorMensaje.textContent = 'Por favor escribe un mensaje';
                esValido = false;
            }

            if (esValido) {
                exitoMensaje.textContent = 'Mensaje enviado!'; 
                formulario.reset();
            }
        });
    }

});