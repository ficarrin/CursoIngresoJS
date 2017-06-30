/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var imp=parseInt(document.getElementById("importe").value)
    var resultado=imp*25/100;
    var resultadofinal=imp-resultado;
    document.getElementById("resultado").value=resultadofinal;


}
