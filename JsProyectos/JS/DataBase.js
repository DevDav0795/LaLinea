// Base De Datos

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var DataBases = null;

function Start() {

	DataBases = indexedDB.open("Data"); //Creamos la base de datos

	DataBases.onupgradeneeded = function (e) { //Actualiza la estructura de la base de datos
	var Started = DataBases.result;
	
	var objeto = Started.createObjectStore("Reserva", {keyPath: 'id', autoIncrement: true});
		objeto.createIndex('by_nombre', 'nombre', {unique: true}); 
		objeto.createIndex('by_apellidop', 'apellidopt', {unique: true}); 
		objeto.createIndex('by_apellidom', 'apellidomt', {unique: true});
		objeto.createIndex('by_email', 'email', {unique: true});
		objeto.createIndex('by_edad', 'edad', {unique: true});
		objeto.createIndex('by_viajes', 'viajes', {unique: true});
		objeto.createIndex('by_ofertas', 'ofertas', {unique: true});
		
		
		
	};

	DataBases.onsuccess = function (e) {
		alert("Cargando Información...");
		desplegar();
	};
	DataBases.onerror = function (e) {
		alert("Error al cargar la información");
	};
}



function Agregar() { 

	var Started = DataBases.result; //nos traemos la base de datos
	var Data = Started.transaction(["Reserva"], "readwrite"); //Le indicamos como vamos a trabajar en la BD
	var objeto = Data.objectStore("Reserva"); 
	

	var request = objeto.put({ // Viene en un array
		nombre: document.querySelector("#nombre").value, //se va agregando cada objeto
		apellidopt: document.querySelector("#apellido-p").value,
		apellidomt: document.querySelector("#apellido-m").value,
		email: document.querySelector("#email").value,
		edad: document.querySelector("#edad").value,
		viajes: document.querySelector("#viajes").value,
		ofertas: document.querySelector("#ofertas").value
		
		
	});
	
	request.onerror = function (e) {
		alert(request.error.name + '\n\n' + request.error.message);

	};
	
	Data.oncomplete = function (e) { //en esta funcion borra lo que tenemos en el formulario
		document.querySelector('#nombre').value = '';
		document.querySelector('#apellido-p').value = '';
		document.querySelector('#apellido-m').value = '';
		document.querySelector('#email').value = '';
		document.querySelector('#edad').value = '';
		
		
		
		
		alert("Objeto agregado con éxito");
		desplegar();
	};
}

function desplegar() {
	var Started = DataBases.result;
	var Data = Started.transaction(["Reserva"], "readonly");
	var objeto = Data.objectStore("Reserva");
	
	var elementos = [];
	
	objeto.openCursor().onsuccess = function (e) {
	
		var result = e.target.result;
		
		if (result === null) {
			return;
		}
		
		elementos.push(result.value); //va agregado cada objeto a la matriz
		result.continue();
		
	};



	
	
	Data.oncomplete = function (){
		var outerHTML = '';
		
		for (var key in elementos) {
		
			outerHTML += '\n\
			<tr>\n\
			<td>' + elementos[key].nombre + '</td>\n\
			<td>' + elementos[key].apellidopt + '</td>\n\
			<td>' + elementos[key].apellidomt + '</td>\n\
			<td>' + elementos[key].email + '</td>\n\
			<td>' + elementos[key].edad + '</td>\n\
			<td>' + elementos[key].viajes + '</td>\n\
			<td>' + elementos[key].ofertas + '</td>\n\
			<td>\n\
			<load(' + elementos[key].id + ')">\n\
			</td>\n\
			</tr>';
		
		}
		elementos = [];
		document.querySelector("#Lista").innerHTML = outerHTML;
	;}
		
}
	
//Esta funcion nse encarga de  cambiar el color de los asientos correspondientes marcandolos cada uno de ellos, a la vez si una tiene un color "gris" se vuelve verde, y si le dan otro click cambia a su color correspondiente
function reserva(){
	var x=document.getElementById("SeatBus");
	if(x=Boton.style.background="rgb(187, 45, 26)"){
	x.disabled = true; 
	}
	else
	 alert('OCUPADO');

   }
   
function cambiarColor(Boton)
{
   if (Boton.style.background=="rgb(188, 188, 188)")
   {
	   Boton.style.background="rgb(45, 210, 0)";
   }else{
	   Boton.style.background="rgb(188, 188, 188)";
   }
   return false;
}

function razon1(){ 
 document.getElementById("SeatBus").value=document.getElementById("seat1").value;
}
function razon2(){
 document.getElementById("SeatBus").value=document.getElementById("seat2").value;
}
function razon3(){
 document.getElementById("SeatBus").value=document.getElementById("seat3").value;
}
function razon4(){
 document.getElementById("SeatBus").value=document.getElementById("seat4").value;
}
function razon5(){
 document.getElementById("SeatBus").value=document.getElementById("seat5").value;
}
function razon6(){
 document.getElementById("SeatBus").value=document.getElementById("seat6").value;
}
function razon7(){
 document.getElementById("SeatBus").value=document.getElementById("seat7").value;
}
function razon8(){
 document.getElementById("SeatBus").value=document.getElementById("seat8").value;
};
function razon9(){
 document.getElementById("SeatBus").value=document.getElementById("seat9").value;
}
function razon10(){
 document.getElementById("SeatBus").value=document.getElementById("seat10").value;
}
function razon11(){
 document.getElementById("SeatBus").value=document.getElementById("seat11").value;
}
function razon12(){
 document.getElementById("SeatBus").value=document.getElementById("seat12").value;
}
function razon13(){
 document.getElementById("SeatBus").value=document.getElementById("seat13").value;
}
function razon14(){
 document.getElementById("SeatBus").value=document.getElementById("seat14").value;
}
function razon15(){
 document.getElementById("SeatBus").value=document.getElementById("seat15").value;
}
function razon16(){
 document.getElementById("SeatBus").value=document.getElementById("seat16").value;
};
function razon17(){
 document.getElementById("SeatBus").value=document.getElementById("seat17").value;
}
function razon18(){
 document.getElementById("SeatBus").value=document.getElementById("seat18").value;
}
function razon19(){
 document.getElementById("SeatBus").value=document.getElementById("seat19").value;
}
function razon20(){
 document.getElementById("SeatBus").value=document.getElementById("seat20").value;
}
function razon21(){
 document.getElementById("SeatBus").value=document.getElementById("seat21").value;
}
function razon22(){
 document.getElementById("SeatBus").value=document.getElementById("seat22").value;
}
function razon23(){
 document.getElementById("SeatBus").value=document.getElementById("seat23").value;
}
function razon24(){
 document.getElementById("SeatBus").value=document.getElementById("seat24").value;
}
function razon25(){
 document.getElementById("SeatBus").value=document.getElementById("seat25").value;
}
function razon26(){
 document.getElementById("SeatBus").value=document.getElementById("seat26").value;
}
function razon27(){
 document.getElementById("SeatBus").value=document.getElementById("seat27").value;
}
function razon28(){
 document.getElementById("SeatBus").value=document.getElementById("seat28").value;
}
function razon29(){
 document.getElementById("SeatBus").value=document.getElementById("seat29").value;
}
function razon30(){
 document.getElementById("SeatBus").value=document.getElementById("seat30").value;
}
function razon31(){
 document.getElementById("SeatBus").value=document.getElementById("seat31").value;
}
function razon32(){
 document.getElementById("SeatBus").value=document.getElementById("seat32").value;
}
function razon33(){
 document.getElementById("SeatBus").value=document.getElementById("seat33").value;
}
function razon34(){
 document.getElementById("SeatBus").value=document.getElementById("seat34").value;
}
function razon35(){
 document.getElementById("SeatBus").value=document.getElementById("seat35").value;
}
function razon36(){
 document.getElementById("SeatBus").value=document.getElementById("seat36").value;
}
function razon37(){
 document.getElementById("SeatBus").value=document.getElementById("seat37").value;
}
function razon38(){
 document.getElementById("SeatBus").value=document.getElementById("seat38").value;
}
function razon39(){
 document.getElementById("SeatBus").value=document.getElementById("seat39").value;
}
function razon40(){
 document.getElementById("SeatBus").value=document.getElementById("seat40").value;
}
function razon41(){
 document.getElementById("SeatBus").value=document.getElementById("seat41").value;
}
function razon42(){
 document.getElementById("SeatBus").value=document.getElementById("seat42").value;
}
function razon43(){
 document.getElementById("SeatBus").value=document.getElementById("seat43").value;
}
function razon44(){
 document.getElementById("SeatBus").value=document.getElementById("seat44").value;
}
function razon45(){
 document.getElementById("SeatBus").value=document.getElementById("seat45").value;
}
function razon46(){
 document.getElementById("SeatBus").value=document.getElementById("seat46").value;
}			
 //Cada una de estas se supone que deveria guardarlos en la base de datos, se supone, porque no nos detectaba ninguna caja