var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;
var dataCity = [{code:'destino',name:'DESTINO'}
               ,{code:'ALLE',name:'SAN MIGUEL ALLENDE'}
               ,{code:'GUZM',name:'CIUDAD GUZMAN'}
               ,{code:'GDLJ',name:'GUADALAJARA, JAL'}
               ,{code:'MANZ',name:'MANZANILLO, COL'}
               ,{code:'TECO',name:'TECOMAN'}
               ,{code:'TLIG',name:'TREN LIGERO'}];

function startDB() {
    dataBase = indexedDB.open("la_curva", 1);
    dataBase.onupgradeneeded = function (e) {
        var active = dataBase.result;                    
        var tableCity = active.createObjectStore('cities', { keyPath : 'code'});
        dataCity.forEach(function(city) {
            tableCity.add(city);
        });
    };

    dataBase.onsuccess = function (e) {
        alert('Database loaded');
        loadAll();
    };

    dataBase.onerror = function (e) {
        alert('Error loading database');
    };
}  

function loadAll() {            
    var db = dataBase.result;
    var dataCities = db.transaction(["cities"], "readonly");
    var objectCity = dataCities.objectStore("cities");

    objectCity.openCursor().onsuccess = function (e) {
        
    var cursor = e.target.result;
    var comboBox = '';

        if (cursor) {
            comboBox += 
            //`<option value="${cursor.value.code}">${cursor.value.name}</option>\n\ `
            '<option value="' + cursor.value.code + '</td>\n\
                <td>' + cursor.value.name + '</td>'
                ;                        
        }

        document.querySelector("#comboBox").innerHTML = comboBox;
           
        }
        
    };