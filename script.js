var lampada = window.document.querySelector('#img')
var acesa = window.document.querySelector('#btn-on')
var apagada = window.document.querySelector('#btn-off')

acesa.addEventListener('click', acender)
apagada.addEventListener('click', apagar)

function acender() {
    lampada.style.backgroundImage = 'url(imagens/lampada-acesa.jpg)'
}

function apagar() {
    lampada.style.backgroundImage = 'url(imagens/lampada-apagada.jpg)'
}