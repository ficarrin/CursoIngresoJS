/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1=parseInt(document.getElementById("numeroUno").value);
    var num2=parseInt(document.getElementById("numeroDos").value);
    var resultado=num1+num2;
    alert("La suma es "+resultado);
}

function restar()
{
    var nume1=parseInt(document.getElementById("numeroUno").value);
    var nume2=parseInt(document.getElementById("numeroDos").value);
    var resultado1=nume1-nume2;
    alert("El resto es "+resultado1);
	
}

function multiplicar()
{ 
    var numer1=parseInt(document.getElementById("numeroUno").value);
    var numer2=parseInt(document.getElementById("numeroDos").value);
    var resultado2=numer1*numer2;
    alert("La multiplicacion da "+resultado2);
	
}

function dividir()
{
    var numero1=parseInt(document.getElementById("numeroUno").value);
    var numero2=parseInt(document.getElementById("numeroDos").value);
    var resultado3=numero1/numero2;
    alert("La division da "+resultado3);
	
}

