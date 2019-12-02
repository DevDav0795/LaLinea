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

function addEventClick($element) {
    $element.addEventListener('click', () => {
      // alert('click')
      showModal($element)
    })
  }

function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);

    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';

  }



