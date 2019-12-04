var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var Basedato = null;

function comienzo() {

	Basedato = indexedDB.open("pizzeria"); //Creamos la base de datos

	Basedato.onupgradeneeded = function (e) { //Actualiza la estructura de la base de datos
	var activa = Basedato.result;

	var objeto = activa.createObjectStore("gente", {keyPath: 'id', autoIncrement: true});
	objeto.createIndex('by_nombre', 'nombre', {unique: false});
	objeto.createIndex('by_direccion', 'direccion', {unique: false});
	objeto.createIndex('by_telefono', 'telefono', {unique: true});
	objeto.createIndex('by_pizza', 'pizza', {unique : false});
	objeto.createIndex('by_sucursal', 'sucursal', {unique: false})
	Basedato.onsuccess = function (e) {
		alert("Bienvenido aqui puede realizar su pedido");
		desplegar();
	};
	Basedato.onerror = function (e) {
		alert("Algo esta mal co nuestros servidores intentelo más tarde");
	};

}
}
function agregar() {

	var activa = Basedato.result; //nos traemos la base de datos
	var dato = activa.transaction(["gente"], "readwrite"); //Le indicamos como vamos a trabajar en la BD
	var objeto = dato.objectStore("gente"); 

	var request = objeto.put({ // Viene en un array
		nombre: document.querySelector("#nombre").value, //se va agregando cada objeto
		direccion: document.querySelector("#direccion").value,
		telefono: document.querySelector("#telefono").value,
		pizza: document.querySelector("#pizza").value,
		sucursal: document.querySelector("#sucursal").value
	});
	
	request.onerror = function (e) {
		alert(request.error.name + '\n\n' + request.error.message);
	};
	
	dato.oncomplete = function (e) { //en esta funcion borra lo que tenemos en el formulario
		document.querySelector('#nombre').value = '';
		document.querySelector('#direccion').value = '';
		document.querySelector('#telefono').value = '';
		document.querySelector('#pizza').value = '';
		document.querySelector('#sucursal').value = '';
		alert("Su pedido se genero con exito");

	};
}
function eliminar() {
	var active = Basedato.result;
	var data = active.transaction(["gente"],"readwrite");
	var object = data.objectStore("gente");

	var index = object.index("by_nombre");
	var request = index.get(document.querySelector("#nombre").value);

	request.onsuccess = function() {
		var result = request.result;
		object.delete(result.id);
		alert("Se elimino el registro recargue la pagina para verificar")
	};
}

function deslpegar() {

	var activa = Basedato.result;
	var dato = activa.transaction(["gente"], "readonly");
	var objeto = dato.objectStore("gente");
	
	var elementos = [];
	
	objeto.openCursor().onsuccess = function (e) {
	
		var result = e.target.result;
		
		if (result === null) {
			return;
		}
		
		elementos.push(result.value); //va agregado cada objeto a la matriz
		result.continue();
		
	};
	
	dato.oncomplete = function () {
	
	var outerHTML = '';
	
	for (var key in elementos) {
	
		outerHTML += '\n\
		<tr>\n\
		<td>' + elementos[key].nombre + '</td>\n\
		<td>' + elementos[key].direccion + '</td>\n\
		<td>' + elementos[key].telefono + '</td>\n\
		<td>' + elementos[key].pizza + '</td>\n\
		<td>' + elementos[key].sucursal + '</td>\n\
		<td>\n\
		<load(' + elementos[key].id + ')">\n\
		</td>\n\
		</tr>';
	
	}
	
	elementos = [];
	document.querySelector("#Lista").innerHTML = outerHTML;
	
	};

}
function usrpas(){
	if (document.form1.txt.value=="Ordoñez" && document.form1.num.value=="1234"){window.location="Datos.html";return}
	if (document.form1.txt.value=="Fernando" && document.form1.num.value=="1342"){window.location="Datos.html";return}
	if (document.form1.txt.value=="Leonardo" && document.form1.num.value=="1324"){window.location="Datos.htm";return}
			 
	else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
}
document.oncontextmenu=new Function("return false");
