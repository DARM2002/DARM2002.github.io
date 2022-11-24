//Diseñe un algoritmo que ingrese un número entero y se valide si es MAYOR A 10 o MENOR A 10
var n;

// Capturar los datos de entrada
n=parseInt(prompt("Digite un numero entero"))

//Proceso para evaluar el proceso 
if (n>10) {
    document.write("El numero: " +n+ " Es mayor que 10 <img src='img/bloques-numericos.png' height='20px'> " );
} else {
    document.write("El numero: " +n+ " Es menor que 10 <img src='img/bloques-numericos.png' height='20px'>" );
}