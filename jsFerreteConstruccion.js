/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var base = parseInt(document.getElementById("Largo").value);
    var altura = parseInt(document.getElementById("Ancho").value);
    var perimetro = ((base + altura) * 2) * 3;
    alert("La cantidad de alambre a comprar es de " + perimetro + " metros.");
}
function Circulo() {
    var radio = parseInt(document.getElementById("Radio").value);
    var perimetro = (2 * Math.PI * radio) * 3;
    alert("La cantidad de alambre a comprar es de " + perimetro + " metros.");

}
function Materiales() {
    var base = parseInt(document.getElementById("Largo").value);
    var altura = parseInt(document.getElementById("Ancho").value);
    var area = base * altura;
    var cemento = area * 2;
    var cal = area * 3;
    alert("La medida del terreno es de " + area + " metros cuadrados y se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}