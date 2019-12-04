

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const buttonImprimir= document.getElementById("imprimirBoleto")
const buttonhide = document.getElementById("hide-modal")

buttonhide.addEventListener('click', () => {
    hideModal()
  })

function hideModal() {
  overlay.classList.remove('active');
  modal.style.animation = 'modalOut .8s forwards';
}

buttonImprimir.addEventListener('click', () => {
      showModal()
    })

function showModal() {
    overlay.classList.add('active');
    modal.style.animation = 'modalIn .8s forwards';
    }

var main = document.getElementById("main");
var horarios = document.getElementById("horarios");
var registro = document.getElementById("registro");
var asientos = document.getElementById("asientos");
var horarios = document.getElementById("horarios");
var tarjeta = document.getElementById("tarjeta");

function selecthorario() {
  main.classList.remove('active');
  horarios.classList.add('active');
}

function registrar() {
  horarios.classList.remove('active');
  registro.classList.add('active');
}

function selectasientos() {
  registro.classList.remove('active');
  asientos.classList.add('active');
}

function pay() {
  asientos.classList.remove('active');
  tarjeta.classList.add('active');
}

function salir() {
  tarjeta.classList.remove('active');
  main.classList.add('active');
}