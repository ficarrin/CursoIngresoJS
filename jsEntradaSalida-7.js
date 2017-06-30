/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1=parseInt(document.getElementById("numeroUno").value);
    var num2=parseInt(document.getElementById("numeroDos").value);
    var resultado1=num1+num2;
    alert("El resultado de la suma es "+resultado1);
	
}

function restar()
{
    var nume1=parseInt(document.getElementById("numeroUno").value);
    var nume2=parseInt(document.getElementById("numeroDos").value);
    var resultado2=nume1-nume2;
    alert("El resultado de la resta es "+resultado2);
	
}

function multiplicar()
{ 
    var numer1=parseInt(document.getElementById("numeroUno").value);
    var numer2=parseInt(document.getElementById("numeroDos").value);
    var resultado3=numer1*numer2;
    alert("El resultado de la multiplicacion es "+resultado3);
	
}

function dividir()
{
    var numero1=parseInt(document.getElementById("numeroUno").value);
    var numero2=parseInt(document.getElementById("numeroDos").value);
    var resultado4=numero1/numero2;
    alert("El resultado de la division es "+resultado4);
	
}

