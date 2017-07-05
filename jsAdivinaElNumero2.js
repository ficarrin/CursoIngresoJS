/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;
var num;
var pasaste = parseInt(num) - numeroSecreto;
var falta = numeroSecreto - parseInt(num);

function comenzar() {
	//Genero el número RANDOM entre 1 y 100

	numeroSecreto = parseInt((Math.random() * 100) + 1);

	num = parseInt(document.getSelection("numero").value);



	//alert(numeroSecreto );


}

function verificar() {
	contadorIntentos = contadorIntentos + 1;
	document.getElementById("intentos").value = contadorIntentos;
	num = parseInt(document.getElementById("numero").value);
	pasaste = num - numeroSecreto;
	falta = numeroSecreto - num;


	if (num==numeroSecreto && contadorIntentos==1) 
	{
		alert("Usted es un psiquico");
	}
	else if (num==numeroSecreto && contadorIntentos==2) 
	{
		alert("Excelente percepcion");	
	}
	else if (num==numeroSecreto && contadorIntentos==3) 
	{
		alert("Esto es suerte");	
	}
	else if (num==numeroSecreto && contadorIntentos==4) 
	{
		alert("Excelente tecnica");	
	}
	else if (num==numeroSecreto && contadorIntentos==5) 
	{
		alert("Usted esta en la media");	
	}
	else if (contadorIntentos>=6 && contadorIntentos<=10) 
	{
		alert("Falta tecnica");	
	}
	else if (num==numeroSecreto && contadorIntentos>10) 
	{
		alert("Afortunado en el amor")
	}
	
}