function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;



switch (mesDelAño) 
{
    case "Julio":
    case "Agosto":
                alert("Abrigate que hace frio");
                break;
    case "Septiempre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
                alert("Ya pasamos el frio, ahora el calor !!");
                break;

    default:alert("Falta para el invierno");
        break;
}




}//FIN DE LA FUNCIÓN