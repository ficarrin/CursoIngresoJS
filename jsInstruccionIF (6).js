function Mostrar()
{
//tomo la edad  
var edad=document.getElementById("edad").value;

if (edad>=13&&edad<=17) {
    alert("Usted es adolescente");
    
}
else if (edad<=13) {
    alert("Usted es menor de edad");
    
}
else alert("Usted es mayor de edad");




}//FIN DE LA FUNCIÓN