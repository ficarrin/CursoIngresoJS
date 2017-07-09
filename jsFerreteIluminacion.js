/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var marca = document.getElementById("Marca").value;
    var lamp = parseInt(document.getElementById("Cantidad").value);
    var precio = lamp * 35;
    var descincuenta = precio - (precio / 2);
    var descuarenta = precio - (precio * 40 / 100);
    var destreinta = precio - (precio * 30 / 100);
    var desveinticinco = precio - (precio * 25 / 100);
    var desveinte = precio - (precio * 20 / 100);
    var desquince = precio - (precio * 15 / 100);
    var desdiez = precio - (precio * 10 / 100);
    var descinco = precio - (precio * 5 / 100);
    var ingbrutos = precio + (precio*10/100);

    if (lamp >= 6) 
    {
        document.getElementById("precioDescuento").value = descincuenta;

    }
        else if (lamp == 5 && marca == "ArgentinaLuz") 
        {
            document.getElementById("precioDescuento").value = descuarenta;
        }
        else if (lamp == 5 && marca != "ArgentinaLuz") 
        {
            document.getElementById("precioDescuento").value = destreinta;
        }
        else if (lamp == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) 
        {
            document.getElementById("precioDescuento").value = desveinticinco;
        }
        else if (lamp == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")) 
        {
            document.getElementById("precioDescuento").value = desveinte;
        }   
        else if (lamp == 3 && marca == "ArgentinaLuz") 
        {
            document.getElementById("precioDescuento").value = desquince;
        }
        else if (lamp == 3 && marca == "FelipeLamparas") 
        {
            document.getElementById("precioDescuento").value = desdiez;    
        }
        else if (lamp == 3 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas" )) 
        {
            document.getElementById("precioDescuento").value = descinco;    
        }
        else if (lamp >= 7) 
        {
            alert("Usted pago "+ingbrutos+" de impuestos.");   
        }

}
