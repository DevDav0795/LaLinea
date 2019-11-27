var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;
var dataCity = [{code:'ALLE',name:'SAN MIGUEL ALLENDE'}
               ,{code:'GUZM',name:'CIUDAD GUZMAN'}
               ,{code:'GDLJ',name:'GUADALAJARA, JAL'}
               ,{code:'MANZ',name:'MANZANILLO, COL'}
               ,{code:'TECO',name:'TECOMAN'}
               ,{code:'TLIG',name:'TREN LIGERO'}];

function startDB() {
    dataBase = indexedDB.open("la_curva", 1);
    dataBase.onupgradeneeded = function (e) {
        var active = dataBase.result;                    
        var object = active.createObjectStore('trips', { keyPath : 'id', autoIncrement : true });
    };

    dataBase.onsuccess = function (e) {
        // alert('Database loaded');
        loadOptions();
    };

    dataBase.onerror = function (e) {
        // alert('Error loading database');
    };
}  

function loadOptions() {           
        var options = '';
        
        dataCity.forEach(element => {
            options += `<option value="${element.code}">${element.name}</option>`;
        });
        
        document.querySelector("#origen").innerHTML = options;
        document.querySelector("#destino").innerHTML = options;
};

function add() {
                
    var active = dataBase.result;
    var data = active.transaction(["trips"], "readwrite");
    var object = data.objectStore("trips");
    
    var request = object.put({
        Sencillo : document.querySelector("#Sencillo").checked,
        Redondo : document.querySelector("#Redondo").checked,
        origen : document.querySelector("#origen").value,
        destino : document.querySelector("#destino").value,
        salida : document.querySelector("#salida").value,
        regreso : document.querySelector("#regreso").value,
        abierto : document.querySelector("#abierto").checked,
        adulto : document.querySelector("#adulto").value,
        ninos : document.querySelector("#ninos").value,
        inapam : document.querySelector("#inapam").value,
    });
    
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {
        document.querySelector('#Sencillo').value = '';
        document.querySelector('#Redondo').value = '';
        document.querySelector('#origen').value = 'Origen';
        document.querySelector('#origen').value = 'Destino';
        document.querySelector('#salida').value = '';
        document.querySelector('#regreso').value = '';
        document.querySelector('#abierto').value = '';
        document.querySelector('#adulto').value = '';
        document.querySelector('#ninos').value = '';
        document.querySelector('#inapam').value = '';
        alert('Object successfully added');
        loadOptions()
    };
}
