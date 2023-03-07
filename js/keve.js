var musica= new Audio();
var botonpararmusica = document.getElementById('reiniciar')
musica.src = './assets/m1.mp3';
botonpararmusica.addEventListener('click', reiniciarpagina)

function hola()
{

}
function reiniciarpagina(){
location.reload()
  
}

window.addEventListener('load',hola)
