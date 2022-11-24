//Función que Suma dos numeros
function sumar() {
var x, y, suma

x=parseInt(document.getElementById("n1").value);
y=parseInt(document.getElementById("n2").value);

var suma=x+y;

document.getElementById("resultado").innerHTML="La Suma es: " +suma

}