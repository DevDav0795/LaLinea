function SelectTypeTrip() {
    if (document.getElementById("Redondo").checked) {
        document.getElementById("divregreso").style.display = "block";
        document.getElementById("divabierto").style.display = "block";
    } else{
        document.getElementById("divregreso").style.display = "none";
        document.getElementById("divabierto").style.display = "none";
    }
}

function DateTrip() {
    if (document.getElementById("abierto").checked) {
        document.getElementById("regreso").disabled = true;
    } else {
        document.getElementById("regreso").disabled = false;
    }
}

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



