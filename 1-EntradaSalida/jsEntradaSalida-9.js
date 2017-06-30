/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo=parseInt(document.getElementById("sueldo").value);
    var resultado=sueldo*10/100;
    var resultadofinal=sueldo+resultado;
    document.getElementById("resultado").value=resultadofinal;



}
