//global
function printContent(el)
{
	var restore = document.body.innerHTML;
	var printContent = document.getElementById(el).innerHTML;
	document.body.innerHTML = printContent;
	window.print();
	document.body.innerHTML = restore;
	}

var add = 0;

//new york

// funciones para los asientos
function reservar_asiento(event){//mando el evento

	
	console.log(event.currentTarget.value);
	var color = event.currentTarget;
	if (color.getAttribute("data-selected") == "false") //le preguntamos is el valor del botton seleccioando es falso
	{

		//de selecciona todos los botones que estaban selecionados
		var asientos = document.getElementsByClassName("sit") //
		//recorro todos los asientos con la clase sit
		for(var i =0; i<asientos.length; i++)
		{
			var asiento =asientos[i]
		//si se cambia de asientoe l otro lo regresa a su forma original
			if(asiento.getAttribute("data-selected") == "true")
				{
					asiento.style.background ="#fff";
					asiento.style.color = "#000";
					asiento.setAttribute("data-selected","false")	
				}
		}
		//boton seleccionado le cambia el color 
		document.getElementById('asiento').value = event.currentTarget.value;
		color.style.background = "#1E102C";
		color.style.color = "#fff"
		//color.dataSet.selected = true;
		color.setAttribute("data-selected","true")
	}
	else
	{
		//deselecciona el boton
		document.getElementById('asiento').value = null;
		color.style.background ="#fff";
		color.style.color = "#000";
		color.setAttribute("data-selected","false")
	}
}
//paso los datos que se mosraran al final
function pasar_datos_ny()
{
	document.getElementById("correo_ny").value = document.getElementById('email_ny').value;
	document.getElementById("name_ny").value = document.getElementById('nombre_ny').value;
} 
//funcion para hablilitar el tipo de viaje mediante checkbox
function seleccion_redondo_ny()//activa el viaje redondo
{
	if (document.getElementById("redondo_ny").checked == true) 
	{
		document.getElementById("sencilo_ny").checked = false ;
		document.getElementById("regreso_ny").disabled = false ;
		document.getElementById("seleccion_ny").value = document.getElementById("redondo_ny").value;
		
	}else{
		document.getElementById("sencilo_ny").checked = true;
		document.getElementById("regreso_ny").disabled = true ;
		document.getElementById("seleccion_ny").value = document.getElementById("sencilo_ny").value;

		}
	
}
function seleccion_sencilo_ny() // se actiava el gnero hombre
{
	if (document.getElementById("sencilo_ny").checked == true)//activa el viaje sencillo
	{
		document.getElementById("redondo_ny").checked = false ;
		document.getElementById("regreso_ny").disabled = true ;
		document.getElementById("seleccion_ny").value = document.getElementById("sencilo_ny").value;
		
	}else{
		document.getElementById("redondo_ny").checked = true;
		document.getElementById("regreso_ny").disabled = false ;
		document.getElementById("seleccion_ny").value = document.getElementById("redondo_ny").value;		

		}
	
}
//funcion para hablilitar el tipo de genero diante checkbox
function seleccion_mujer_ny()//activa el genero mujer
{
	if (document.getElementById("mujer_ny").checked == true) 
	{
		document.getElementById("hombre_ny").checked = false ;
		document.getElementById("genero_ny").value = document.getElementById("mujer_ny").value;
		
	}else{
		document.getElementById("hombre_ny").checked = true;
		document.getElementById("genero_ny").value = document.getElementById("hombre_ny").value;

		}
	
}
function seleccion_hombre_ny()//se activa el gnero hombre
{
	if (document.getElementById("hombre_ny").checked == true)//activa el viaje sencillo
	{
		document.getElementById("mujer_ny").checked = false ;
		document.getElementById("genero_ny").value = document.getElementById("hombre_ny").value;
		
	}else{
		document.getElementById("mujer_ny").checked = true;
		document.getElementById("genero_ny").value = document.getElementById("mujer_ny").value;		

		}
	
}


//tokio

function reservar_asiento_tk(event){

	
	console.log(event.currentTarget.value);
	var color = event.currentTarget;
	if (color.getAttribute("data-selected") == "false") //le preguntamos is el valor del botton seleccioando es falso
	{

		//de selecciona todos los botones que estaban selecionados
		var asientos = document.getElementsByClassName("sit") //
		for(var i =0; i<asientos.length; i++)
		{
			var asiento =asientos[i]
			if(asiento.getAttribute("data-selected") == "true")
				{
					asiento.style.background ="#fff";
					asiento.style.color = "#000";
					asiento.setAttribute("data-selected","false")	
				}
		}
		//boton seleccionado
		document.getElementById('asiento_tk').value = event.currentTarget.value;
		color.style.background = "#1E102C";
		color.style.color = "#fff"
		//color.dataSet.selected = true;
		color.setAttribute("data-selected","true")
	}
	else
	{
		//deselecciona el boton
		document.getElementById('asiento_tk').value = null;
		color.style.background ="#fff";
		color.style.color = "#000";
		color.setAttribute("data-selected","false")
	}
}
//paso los datos que se mosraran al final
function pasar_datos_tk()
{
	document.getElementById("correo_tk").value = document.getElementById('email_tk').value;
	document.getElementById("name_tk").value = document.getElementById('nombre_tk').value;
} 
//funcion para hablilitar el tipo de viaje mediante checkbox
function seleccion_redondo_tk()//activa el viaje redondo
{
	if (document.getElementById("redondo_tk").checked == true) 
	{
		document.getElementById("sencilo_tk").checked = false ;
		document.getElementById("regreso_tk").disabled = false ;
		document.getElementById("seleccion_tk").value = document.getElementById("redondo_tk").value;
		
	}else{
		document.getElementById("sencilo_tk").checked = true;
		document.getElementById("regreso_tk").disabled = true ;
		document.getElementById("seleccion_tk").value = document.getElementById("sencilo_tk").value;

		}
	
}
function seleccion_sencilo_tk() // se actiava el gnero hombre
{
	if (document.getElementById("sencilo_tk").checked == true)//activa el viaje sencillo
	{
		document.getElementById("redondo_tk").checked = false ;
		document.getElementById("regreso_tk").disabled = true ;
		document.getElementById("seleccion_tk").value = document.getElementById("sencilo_tk").value;
		
	}else{
		document.getElementById("redondo_tk").checked = true;
		document.getElementById("regreso_tk").disabled = false ;
		document.getElementById("seleccion_tk").value = document.getElementById("redondo_tk").value;		

		}
	
}
//funcion para hablilitar el tipo de genero diante checkbox
function seleccion_mujer_tk()//activa el genero mujer
{
	if (document.getElementById("mujer_tk").checked == true) 
	{
		document.getElementById("hombre_tk").checked = false ;
		document.getElementById("genero_tk").value = document.getElementById("mujer_tk").value;
		
	}else{
		document.getElementById("hombre_tk").checked = true;
		document.getElementById("genero_tk").value = document.getElementById("hombre_tk").value;

		}
	
}
function seleccion_hombre_tk()//se activa el gnero hombre
{
	if (document.getElementById("hombre_tk").checked == true)//activa el viaje sencillo
	{
		document.getElementById("mujer_tk").checked = false ;
		document.getElementById("genero_tk").value = document.getElementById("hombre_tk").value;
		
	}else{
		document.getElementById("mujer_tk").checked = true;
		document.getElementById("genero_tk").value = document.getElementById("mujer_tk").value;		

		}
	
}

//houston
function reservar_asiento_hs(event){

	
	console.log(event.currentTarget.value);
	var color = event.currentTarget;
	if (color.getAttribute("data-selected") == "false") //le preguntamos is el valor del botton seleccioando es falso
	{

		//de selecciona todos los botones que estaban selecionados
		var asientos = document.getElementsByClassName("sit") //
		for(var i =0; i<asientos.length; i++)
		{
			var asiento =asientos[i]
			if(asiento.getAttribute("data-selected") == "true")
				{
					asiento.style.background ="#fff";
					asiento.style.color = "#000";
					asiento.setAttribute("data-selected","false")	
				}
		}
		//boton seleccionado
		document.getElementById('asiento_hs').value = event.currentTarget.value;
		color.style.background = "#1E102C";
		color.style.color = "#fff"
		//color.dataSet.selected = true;
		color.setAttribute("data-selected","true")
	}
	else
	{
		//deselecciona el boton
		document.getElementById('asiento_hs').value = null;
		color.style.background ="#fff";
		color.style.color = "#000";
		color.setAttribute("data-selected","false")
	}
}
//paso los datos que se mosraran al final
function pasar_datos_hs()
{
	document.getElementById("correo_hs").value = document.getElementById('email_hs').value;
	document.getElementById("name_hs").value = document.getElementById('nombre_hs').value;
} 
//funcion para hablilitar el tipo de viaje mediante checkbox
function seleccion_redondo_hs()//activa el viaje redondo
{
	if (document.getElementById("redondo_hs").checked == true) 
	{
		document.getElementById("sencilo_hs").checked = false ;
		document.getElementById("regreso_hs").disabled = false ;
		document.getElementById("seleccion_hs").value = document.getElementById("redondo_hs").value;
		
	}else{
		document.getElementById("sencilo_hs").checked = true;
		document.getElementById("regreso_hs").disabled = true ;
		document.getElementById("seleccion_hs").value = document.getElementById("sencilo_hs").value;

		}
	
}
function seleccion_sencilo_hs() // se actiava el gnero hombre
{
	if (document.getElementById("sencilo_hs").checked == true)//activa el viaje sencillo
	{
		document.getElementById("redondo_hs").checked = false ;
		document.getElementById("regreso_hs").disabled = true ;
		document.getElementById("seleccion_hs").value = document.getElementById("sencilo_hs").value;
		
	}else{
		document.getElementById("redondo_hs").checked = true;
		document.getElementById("regreso_hs").disabled = false ;
		document.getElementById("seleccion_hs").value = document.getElementById("redondo_hs").value;		

		}
	
}
//funcion para hablilitar el tipo de genero diante checkbox
function seleccion_mujer_hs()//activa el genero mujer
{
	if (document.getElementById("mujer_hs").checked == true) 
	{
		document.getElementById("hombre_hs").checked = false ;
		document.getElementById("genero_hs").value = document.getElementById("mujer_hs").value;
		
	}else{
		document.getElementById("hombre_hs").checked = true;
		document.getElementById("genero_hs").value = document.getElementById("hombre_hs").value;

		}
	
}
function seleccion_hombre_hs()//se activa el gnero hombre
{
	if (document.getElementById("hombre_hs").checked == true)//activa el viaje sencillo
	{
		document.getElementById("mujer_hs").checked = false ;
		document.getElementById("genero_hs").value = document.getElementById("hombre_hs").value;
		
	}else{
		document.getElementById("mujer_hs").checked = true;
		document.getElementById("genero_hs").value = document.getElementById("mujer_hs").value;		

		}
	
}

//santiago de chile

function reservar_asiento_sc(event){

	
	console.log(event.currentTarget.value);
	var color = event.currentTarget;
	if (color.getAttribute("data-selected") == "false") //le preguntamos is el valor del botton seleccioando es falso
	{

		//de selecciona todos los botones que estaban selecionados
		var asientos = document.getElementsByClassName("sit") //
		for(var i =0; i<asientos.length; i++)
		{
			var asiento =asientos[i]
			if(asiento.getAttribute("data-selected") == "true")
				{
					asiento.style.background ="#fff";
					asiento.style.color = "#000";
					asiento.setAttribute("data-selected","false")	
				}
		}
		//boton seleccionado
		document.getElementById('asiento_sc').value = event.currentTarget.value;
		color.style.background = "#1E102C";
		color.style.color = "#fff"
		//color.dataSet.selected = true;
		color.setAttribute("data-selected","true")
	}
	else
	{
		//deselecciona el boton
		document.getElementById('asiento_sc').value = null;
		color.style.background ="#fff";
		color.style.color = "#000";
		color.setAttribute("data-selected","false")
	}
}
//paso los datos que se mosraran al final
function pasar_datos_sc()
{
	document.getElementById("correo_sc").value = document.getElementById('email_sc').value;
	document.getElementById("name_sc").value = document.getElementById('nombre_sc').value;
} 

//funcion para hablilitar el tipo de viaje mediante checkbox
function seleccion_redondo_sc()//activa el viaje redondo
{
	if (document.getElementById("redondo_sc").checked == true) 
	{
		document.getElementById("sencilo_sc").checked = false ;
		document.getElementById("regreso_sc").disabled = false ;
		document.getElementById("seleccion_sc").value = document.getElementById("redondo_sc").value;
		
	}else{
		document.getElementById("sencilo_sc").checked = true;
		document.getElementById("regreso_sc").disabled = true ;
		document.getElementById("seleccion_sc").value = document.getElementById("sencilo_sc").value;

		}
	
}
function seleccion_sencilo_sc() // se actiava el gnero hombre
{
	if (document.getElementById("sencilo_sc").checked == true)//activa el viaje sencillo
	{
		document.getElementById("redondo_sc").checked = false ;
		document.getElementById("regreso_sc").disabled = true ;
		document.getElementById("seleccion_sc").value = document.getElementById("sencilo_sc").value;
		
	}else{
		document.getElementById("redondo_tk").checked = true;
		document.getElementById("regreso_tk").disabled = false ;
		document.getElementById("seleccion_tk").value = document.getElementById("redondo_ny").value;		

		}
	
}
//funcion para hablilitar el tipo de genero diante checkbox
function seleccion_mujer_sc()//activa el genero mujer
{
	if (document.getElementById("mujer_sc").checked == true) 
	{
		document.getElementById("hombre_sc").checked = false ;
		document.getElementById("genero_sc").value = document.getElementById("mujer_sc").value;
		
	}else{
		document.getElementById("hombre_sc").checked = true;
		document.getElementById("genero_sc").value = document.getElementById("hombre_sc").value;

		}
	
}
function seleccion_hombre_sc()//se activa el gnero hombre
{
	if (document.getElementById("hombre_sc").checked == true)//activa el viaje sencillo
	{
		document.getElementById("mujer_sc").checked = false ;
		document.getElementById("genero_sc").value = document.getElementById("hombre_sc").value;
		
	}else{
		document.getElementById("mujer_sc").checked = true;
		document.getElementById("genero_sc").value = document.getElementById("mujer_sc").value;		

		}
	
}

//vancuver
function reservar_asiento_vs(event){

	
	console.log(event.currentTarget.value);
	var color = event.currentTarget;
	if (color.getAttribute("data-selected") == "false") //le preguntamos is el valor del botton seleccioando es falso
	{

		//de selecciona todos los botones que estaban selecionados
		var asientos = document.getElementsByClassName("sit") //
		for(var i =0; i<asientos.length; i++)
		{
			var asiento =asientos[i]
			if(asiento.getAttribute("data-selected") == "true")
				{
					asiento.style.background ="#fff";
					asiento.style.color = "#000";
					asiento.setAttribute("data-selected","false")	
				}
		}
		//boton seleccionado
		document.getElementById('asiento_vs').value = event.currentTarget.value;
		color.style.background = "#1E102C";
		color.style.color = "#fff"
		//color.dataSet.selected = true;
		color.setAttribute("data-selected","true")
	}
	else
	{
		//deselecciona el boton
		document.getElementById('asiento_vs').value = null;
		color.style.background ="#fff";
		color.style.color = "#000";
		color.setAttribute("data-selected","false")
	}
}
//paso los datos que se mosraran al final
function pasar_datos_vs()
{
	document.getElementById("correo_vs").value = document.getElementById('email_vs').value;
	document.getElementById("name_vs").value = document.getElementById('nombre_vs').value;
} 
//funcion para hablilitar el tipo de viaje mediante checkbox
function seleccion_redondo_vs()//activa el viaje redondo
{
	if (document.getElementById("redondo_vs").checked == true) 
	{
		document.getElementById("sencilo_vs").checked = false ;
		document.getElementById("regreso_vs").disabled = false ;
		document.getElementById("seleccion_vs").value = document.getElementById("redondo_vs").value;
		
	}else{
		document.getElementById("sencilo_vs").checked = true;
		document.getElementById("regreso_vs").disabled = true ;
		document.getElementById("seleccion_vs").value = document.getElementById("sencilo_vs").value;

		}
	
}
function seleccion_sencilo_vs() // se actiava el gnero hombre
{
	if (document.getElementById("sencilo_vs").checked == true)//activa el viaje sencillo
	{
		document.getElementById("redondo_vs").checked = false ;
		document.getElementById("regreso_vs").disabled = true ;
		document.getElementById("seleccion_vs").value = document.getElementById("sencilo_vs").value;
		
	}else{
		document.getElementById("redondo_vs").checked = true;
		document.getElementById("regreso_vs").disabled = false ;
		document.getElementById("seleccion_vs").value = document.getElementById("redondo_vs").value;		

		}
	
}
//funcion para hablilitar el tipo de genero diante checkbox
function seleccion_mujer_vs()//activa el genero mujer
{
	if (document.getElementById("mujer_vs").checked == true) 
	{
		document.getElementById("hombre_vs").checked = false ;
		document.getElementById("genero_vs").value = document.getElementById("mujer_vs").value;
		
	}else{
		document.getElementById("hombre_vs").checked = true;
		document.getElementById("genero_vs").value = document.getElementById("hombre_vs").value;

		}
	
}
function seleccion_hombre_vs()//se activa el gnero hombre
{
	if (document.getElementById("hombre_vs").checked == true)//activa el viaje sencillo
	{
		document.getElementById("mujer_vs").checked = false ;
		document.getElementById("genero_vs").value = document.getElementById("hombre_vs").value;
		
	}else{
		document.getElementById("mujer_vs").checked = true;
		document.getElementById("genero_vs").value = document.getElementById("mujer_vs").value;		

		}
	
}






