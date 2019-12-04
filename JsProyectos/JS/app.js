
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var capDb = null;



function start() {

	capDb = indexedDB.open("cap"); //Creamos la base de datos

	capDb.onupgradeneeded = function (e) { //Actualiza la estructura de la base de datos
	var active = capDb.result;

	var object = active.createObjectStore("fly", {keyPath: 'id', autoIncrement: true});
		//guardar datos personales
		//object.createIndex('by_id2','id2',{autoIncrement: true, unique:true})
		object.createIndex('by_viaje','viaje',{unique:false});
		object.createIndex('by_tipo','tipo',{unique:false});
		object.createIndex('by_precio','precio',{unique:false});
		object.createIndex('by_salida','salida',{unique:false});
		object.createIndex('by_regreso','regreso',{unique:false});
		object.createIndex('by_name', 'nombre', {unique: false}); // El index que se crea va a permitir que se repita el nombre con otro objrto
		object.createIndex('by_apellido', 'apelido', {unique: false}); //El index que se crea NO permite que se repita el dni
		object.createIndex('by_gneero', 'genero',{unique: false});
		object.createIndex('by_birth','birth',{unique:false});
		object.createIndex('by_telefono','telefono', {unique:false});
		object.createIndex('by_email', 'email', {unique:false});
		object.createIndex('by_seats','seats',{unique:true});
		//guardar pago
		object.createIndex('by_no_tarjeta','no_tarjeta',{unique:false});
		object.createIndex('by_cvc', 'cvc',{unique:false});
		object.createIndex('by_expiracion', 'expiracion',{unique:false});
		object.createIndex('by_nombre_tarjeta','nombre_de_la_tarjeta',{unique:false});
		object.createIndex('by_pais','pais',{unique:false});
		object.createIndex('by_direccion_tarjeta','direccion',{unique:false});
		object.createIndex('by_estado','estado',{unique:false});
		object.createIndex('by_codigo_psotal','codigo_postal',{unique:false});

		
	};

	capDb.onsuccess = function (e) {
		console.log("Base de datos Cargada...");
	};
	capDb.onerror = function (e) {
		console.log("Error al cargar la base");
	};
}
//aañade los datos de todos los pasjaeros rumbo a new york
function add_ny(){

	var active = capDb.result; //nos traemos la base de datos
	var data = active.transaction(["fly"],"readwrite");//ttransaccion inicializada
	var object = data.objectStore("fly");

	var request = object.put({
		//Datos personalesz
		viaje: document.querySelector("#viaje_ny").value,
		genero: document.querySelector("#genero_ny").value,
		tipo: document.querySelector("#seleccion_ny").value,
		precio: document.querySelector("#precio_ny").value,
		salida: document.querySelector("#salida_ny").value,
		regreso: document.querySelector("#regreso_ny").value,
		salida: document.querySelector("#salida_ny").value,
		nombre: document.querySelector("#nombre_ny").value,
		apelido: document.querySelector("#apellido_ny").value,
		//genero: document.querySelector("#").value,
		birth: document.querySelector("#nacimiento_ny").value,
		telefono: document.querySelector("#telefono_ny").value,
		email: document.querySelector("#email_ny").value,
		seats: document.querySelector('#asiento').value,
		//Datos de pago
		no_tarjeta: document.querySelector("#tarjeta_ny").value,
		cvc: document.querySelector("#cvc_ny").value,
		expiracion: document.querySelector("#expiracion_ny").value,
		nombre_de_la_tarjeta: document.querySelector("#nombretarjeta_ny").value,
		pais: document.querySelector("#pais_ny").value,
		direccion: document.querySelector("#direccion_ny").value,
		estado:document.querySelector("#estado_ny").value,
		codigo_postal:document.querySelector("#cp_ny").value
	});

	request.onerror = function(e){
		console.log(request.error.name + '\n\n' +request.error.message);
		
	}

	data.oncomplete = function(e){

		//se completa el pasod e datos
		 // se vacia todo al momento de grabar los datos

		document.querySelector("#salida_ny").value = '';
		document.querySelector("#regreso_ny").value = '';
		document.querySelector("#nombre_ny"). value = '';
		document.querySelector("#apellido_ny").value = '';
		//document.querySelector("#").value = '';
		document.querySelector("#nacimiento_ny").value  = '';
		document.querySelector("#telefono_ny").value  = '';
		document.querySelector("#email_ny").value  = '';
		document.querySelector('#asiento').value='';
		//Datos de pago
		document.querySelector("#tarjeta_ny").value  = '';
		document.querySelector("#cvc_ny").value = '';
		document.querySelector("#expiracion_ny").value = '';
		document.querySelector("#nombretarjeta_ny").value = '';
		document.querySelector("#pais_ny").value = '';
		document.querySelector("#direccion_ny").value = '';
		document.querySelector("#estado_ny").value = '';
		document.querySelector("#cp_ny").value  = '';
		console.log('object successfully added');

	};
}
//aañade los datos de todos los pasjaeros rumbo a tokio
function add_tk(){
	
	var active = capDb.result; //nos traemos la base de datos
	var data = active.transaction(["fly"],"readwrite");//ttransaccion inicializada
	var object = data.objectStore("fly");

	var request = object.put({
		//Datos personalesz
		viaje: document.querySelector("#viaje_tk").value,
		genero: document.querySelector("#genero_tk").value,
		tipo: document.querySelector("#seleccion_tk").value,
		precio: document.querySelector("#precio_tk").value,
		salida: document.querySelector("#salida_tk").value,
		regreso: document.querySelector("#regreso_tk").value,
		salida: document.querySelector("#salida_tk").value,
		nombre: document.querySelector("#nombre_tk").value,
		apelido: document.querySelector("#apellido_tk").value,
		//genero: document.querySelector("#").value,
		birth: document.querySelector("#nacimiento_tk").value,
		telefono: document.querySelector("#telefono_tk").value,
		email: document.querySelector("#email_tk").value,
		seats: document.querySelector('#asiento_tk').value,
		//Datos de pago
		no_tarjeta: document.querySelector("#tarjeta_tk").value,
		cvc: document.querySelector("#cvc_ny").value,
		expiracion: document.querySelector("#expiracion_tk").value,
		nombre_de_la_tarjeta: document.querySelector("#nombretarjeta_tk").value,
		pais: document.querySelector("#pais_tk").value,
		direccion: document.querySelector("#direccion_tk").value,
		estado:document.querySelector("#estado_tk").value,
		codigo_postal:document.querySelector("#cp_tk").value
	});

	request.onerror = function(e){
		console.log(request.error.name + '\n\n' +request.error.message);
		
	}

	data.oncomplete = function(e){

		//se completa el pasod e datos
		 // se vacia todo al momento de grabar los datos

		document.querySelector("#salida_tk").value = '';
		document.querySelector("#regreso_tk").value = '';
		document.querySelector("#nombre_tk"). value = '';
		document.querySelector("#apellido_tk").value = '';
		//document.querySelector("#").value = '';
		document.querySelector("#nacimiento_tk").value  = '';
		document.querySelector("#telefono_tk").value  = '';
		document.querySelector("#email_tk").value  = '';
		document.querySelector('#asiento_tk').value='';
		//Datos de pago
		document.querySelector("#tarjeta_tk").value  = '';
		document.querySelector("#cvc_tk").value = '';
		document.querySelector("#expiracion_tk").value = '';
		document.querySelector("#nombretarjeta_tk").value = '';
		document.querySelector("#pais_tk").value = '';
		document.querySelector("#direccion_tk").value = '';
		document.querySelector("#estado_tk").value = '';
		document.querySelector("#cp_tk").value  = '';
		console.log('object successfully added');

	};
}

//aañade los datos de todos los pasjaeros rumbo a houston
function add_hs(){
	
	var active = capDb.result; //nos traemos la base de datos
	var data = active.transaction(["fly"],"readwrite");//ttransaccion inicializada
	var object = data.objectStore("fly");

	var request = object.put({
		//Datos personalesz
		viaje: document.querySelector("#viaje_hs").value,
		genero: document.querySelector("#genero_hs").value,
		tipo: document.querySelector("#seleccion_hs").value,
		precio: document.querySelector("#precio_hs").value,
		salida: document.querySelector("#salida_hs").value,
		regreso: document.querySelector("#regreso_hs").value,
		salida: document.querySelector("#salida_hs").value,
		nombre: document.querySelector("#nombre_hs").value,
		apelido: document.querySelector("#apellido_hs").value,
		//genero: document.querySelector("#").value,
		birth: document.querySelector("#nacimiento_hs").value,
		telefono: document.querySelector("#telefono_hs").value,
		email: document.querySelector("#email_hs").value,
		seats: document.querySelector('#asiento_hs').value,
		//Datos de pago
		no_tarjeta: document.querySelector("#tarjeta_hs").value,
		cvc: document.querySelector("#cvc_hs").value,
		expiracion: document.querySelector("#expiracion_hs").value,
		nombre_de_la_tarjeta: document.querySelector("#nombretarjeta_hs").value,
		pais: document.querySelector("#pais_hs").value,
		direccion: document.querySelector("#direccion_hs").value,
		estado:document.querySelector("#estado_hs").value,
		codigo_postal:document.querySelector("#cp_hs").value
	});

	request.onerror = function(e){
		console.log(request.error.name + '\n\n' +request.error.message);
				
	}

	data.oncomplete = function(e){

		//se completa el pasod e datos
		 // se vacia todo al momento de grabar los datos

		document.querySelector("#salida_hs").value = '';
		document.querySelector("#regreso_hs").value = '';
		document.querySelector("#nombre_hs"). value = '';
		document.querySelector("#apellido_hs").value = '';
		//document.querySelector("#").value = '';
		document.querySelector("#nacimiento_hs").value  = '';
		document.querySelector("#telefono_hs").value  = '';
		document.querySelector("#email_hs").value  = '';
		document.querySelector('#asiento_hs').value='';
		//Datos de pago
		document.querySelector("#tarjeta_hs").value  = '';
		document.querySelector("#cvc_hs").value = '';
		document.querySelector("#expiracion_hs").value = '';
		document.querySelector("#nombretarjeta_hs").value = '';
		document.querySelector("#pais_hs").value = '';
		document.querySelector("#direccion_hs").value = '';
		document.querySelector("#estado_hs").value = '';
		document.querySelector("#cp_hs").value  = '';
		console.log('object successfully added');

	};
}
//aañade los datos de todos los pasjaeros rumbo a santiago de chile
function add_sc(){
	
	var active = capDb.result; //nos traemos la base de datos
	var data = active.transaction(["fly"],"readwrite");//ttransaccion inicializada
	var object = data.objectStore("fly");

	var request = object.put({
		//Datos personalesz
		viaje: document.querySelector("#viaje_sc").value,
		genero: document.querySelector("#genero_sc").value,
		tipo: document.querySelector("#seleccion_sc").value,
		precio: document.querySelector("#precio_sc").value,
		salida: document.querySelector("#salida_sc").value,
		regreso: document.querySelector("#regreso_sc").value,
		salida: document.querySelector("#salida_sc").value,
		nombre: document.querySelector("#nombre_sc").value,
		apelido: document.querySelector("#apellido_sc").value,
		//genero: document.querySelector("#").value,
		birth: document.querySelector("#nacimiento_sc").value,
		telefono: document.querySelector("#telefono_sc").value,
		email: document.querySelector("#email_sc").value,
		seats: document.querySelector('#asiento_sc').value,
		//Datos de pago
		no_tarjeta: document.querySelector("#tarjeta_sc").value,
		cvc: document.querySelector("#cvc_sc").value,
		expiracion: document.querySelector("#expiracion_sc").value,
		nombre_de_la_tarjeta: document.querySelector("#nombretarjeta_sc").value,
		pais: document.querySelector("#pais_sc").value,
		direccion: document.querySelector("#direccion_sc").value,
		estado:document.querySelector("#estado_sc").value,
		codigo_postal:document.querySelector("#cp_sc").value
	});

	request.onerror = function(e){
		console.log(request.error.name + '\n\n' +request.error.message);
		
	}

	data.oncomplete = function(e){

		//se completa el pasod e datos
		 // se vacia todo al momento de grabar los datos

		document.querySelector("#salida_sc").value = '';
		document.querySelector("#regreso_sc").value = '';
		document.querySelector("#nombre_sc"). value = '';
		document.querySelector("#apellido_sc").value = '';
		//document.querySelector("#").value = '';
		document.querySelector("#nacimiento_sc").value  = '';
		document.querySelector("#telefono_sc").value  = '';
		document.querySelector("#email_sc").value  = '';
		document.querySelector('#asiento_sc').value='';
		//Datos de pago
		document.querySelector("#tarjeta_sc").value  = '';
		document.querySelector("#cvc_sc").value = '';
		document.querySelector("#expiracion_sc").value = '';
		document.querySelector("#nombretarjeta_sc").value = '';
		document.querySelector("#pais_sc").value = '';
		document.querySelector("#direccion_sc").value = '';
		document.querySelector("#estado_sc").value = '';
		document.querySelector("#cp_sc").value  = '';
		console.log('object successfully added');

	};
}
//aañade los datos de todos los pasjaeros rumbo a houston
function add_vs(){
	
	var active = capDb.result; //nos traemos la base de datos
	var data = active.transaction(["fly"],"readwrite");//ttransaccion inicializada
	var object = data.objectStore("fly");

	var request = object.put({
		//Datos personalesz
		viaje: document.querySelector("#viaje_vs").value,
		genero: document.querySelector("#genero_vs").value,
		tipo: document.querySelector("#seleccion_vs").value,
		precio: document.querySelector("#precio_vs").value,
		salida: document.querySelector("#salida_vs").value,
		regreso: document.querySelector("#regreso_vs").value,
		salida: document.querySelector("#salida_vs").value,
		nombre: document.querySelector("#nombre_vs").value,
		apelido: document.querySelector("#apellido_vs").value,
		//genero: document.querySelector("#").value,
		birth: document.querySelector("#nacimiento_vs").value,
		telefono: document.querySelector("#telefono_vs").value,
		email: document.querySelector("#email_vs").value,
		seats: document.querySelector('#asiento_vs').value,
		//Datos de pago
		no_tarjeta: document.querySelector("#tarjeta_vs").value,
		cvc: document.querySelector("#cvc_vs").value,
		expiracion: document.querySelector("#expiracion_vs").value,
		nombre_de_la_tarjeta: document.querySelector("#nombretarjeta_vs").value,
		pais: document.querySelector("#pais_vs").value,
		direccion: document.querySelector("#direccion_vs").value,
		estado:document.querySelector("#estado_vs").value,
		codigo_postal:document.querySelector("#cp_vs").value
	});

	request.onerror = function(e){
		console.log(request.error.name + '\n\n' +request.error.message);
		
	}

	data.oncomplete = function(e){

		//se completa el pasod e datos
		 // se vacia todo al momento de grabar los datos

		document.querySelector("#salida_vs").value = '';
		document.querySelector("#regreso_vs").value = '';
		document.querySelector("#nombre_vs"). value = '';
		document.querySelector("#apellido_vs").value = '';
		//document.querySelector("#").value = '';
		document.querySelector("#nacimiento_vs").value  = '';
		document.querySelector("#telefono_vs").value  = '';
		document.querySelector("#email_vs").value  = '';
		document.querySelector('#asiento_vs').value='';
		//Datos de pago
		document.querySelector("#tarjeta_vs").value  = '';
		document.querySelector("#cvc_vs").value = '';
		document.querySelector("#expiracion_vs").value = '';
		document.querySelector("#nombretarjeta_vs").value = '';
		document.querySelector("#pais_vs").value = '';
		document.querySelector("#direccion_vs").value = '';
		document.querySelector("#estado_vs").value = '';
		document.querySelector("#cp_vs").value  = '';
		console.log('object successfully added');

	};
}

//despliega los datos en la tabla del administrador
function desplegar() {

	var active = capDb.result;
	var dato = active.transaction(["fly"], "readonly");
	var objeto = dato.objectStore("fly");
	
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
		<td>' + elementos[key].id + '</td>\n\
		<td>' + elementos[key].viaje + '</td>\n\
		<td>' + elementos[key].precio + '</td>\n\
		<td>' + elementos[key].tipo + '</td>\n\
		<td>' + elementos[key].salida + '</td>\n\
		<td>' + elementos[key].regreso + '</td>\n\
		<td>' + elementos[key].nombre+ '</td>\n\
		<td>' + elementos[key].apelido+ '</td>\n\
		<td>' + elementos[key].genero + '</td>\n\
		<td>' + elementos[key].birth + '</td>\n\
		<td>' + elementos[key].telefono + '</td>\n\
		<td>' + elementos[key].email + '</td>\n\
		<td>' + elementos[key].seats+ '</td>\n\
		<td>' + elementos[key].no_tarjeta + '</td>\n\
		<td>' + elementos[key].cvc + '</td>\n\
		<td>' + elementos[key].expiracion + '</td>\n\
		<td>' + elementos[key].nombre_de_la_tarjeta +'</td>\n\
		<td>' + elementos[key].pais + '</td>\n\
		<td>' + elementos[key].direccion + '</td>\n\
		<td>' + elementos[key].estado + '</td>\n\
		<td>' + elementos[key].codigo_postal + '</td>\n\
		</tr>';
	
	}
	
	elementos = [];
	document.querySelector("#Lista").innerHTML = outerHTML;
	
	};

}
// elimina atra ves del nombre pero desde el administardor
function eliminar(){

	var active = capDb.result;
	var dato = active.transaction(["fly"], "readwrite");
	var objeto = dato.objectStore("fly");	

	var index = objeto.index("by_name");
	var request = index.get(document.querySelector("#eliminar").value);


	
	request.onsuccess = function() {
		var result = request.result;
		objeto.delete(result.id);
		alert("Has eliminado el vuelo")
	}
	
}




