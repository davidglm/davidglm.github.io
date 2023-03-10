let botonenviar = document.getElementById('enviar')
botonenviar.addEventListener('click',enviarmensaje)
nombreUsuario = document.getElementById('nombre')
emailUsuario = document.getElementById('email')


function enviarmensaje() { 
    if(nombreUsuario.value.trim() === "" || emailUsuario.value.trim() === "") {
        alert('Por favor, rellene todos los campos');
    } else {

        alert('Mensaje Enviado');
        // Aquí puedes agregar el código para enviar el mensaje si los campos no están vacíos
        // ...
    }
}

window.addEventListener('load',bienvenida)