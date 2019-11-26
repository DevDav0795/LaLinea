function SelectTypeTrip() {
    if (document.getElementById("Redondo").checked) {
        document.getElementById("divregreso").style.display = "block";        document.getElementById("abierto").style.display = "block";
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



