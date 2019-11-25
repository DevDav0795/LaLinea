
const request = indexedDB.open("Camion_Pasajero");
var db= request.onupgradeneeded = function(event) {
    var db = event.target.result;
    return db
};

var tableTrip = db.createObjectStore("trips", { autoIncrement : true });

function guardarViaje() {
    var origenval=document.getElementById("origen").value
    var destinoval=document.getElementById("destino").value
    var fsalidagenval=document.getElementById("fsalida").value

    // nombre de tabla y su llave primaria
    // Función para cargar información principal
    // tableTrip.transaction.oncomplete = function(event) {
        var tripObjectStore = db.transaction("trips", "readwrite").objectStore("trips");
        tripObjectStore.add({origen:origenval,destino:destinoval,fecha:fsalidagenval});
    // };

}

// Guardar viaje
continuar=document.getElementById("continuar")
continuar.addEventListener("click",guardarViaje,false) 