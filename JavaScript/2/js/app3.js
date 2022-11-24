//Algoritmo que ingrese un número entero e imprima si es POSITIVO o NEGATIVO
var n;

// Capturar los datos de entrada
n=parseInt(prompt("Digite un numero entero"))

//Proceso para evaluar el proceso 
if (n>0) {
    document.write("El numero: " +n+ " Es Positivo <img src='img/bloques-numericos.png' height='20px'>" );
} else {
    document.write("El numero: " +n+ " Es Negativo <img src='img/bloques-numericos.png' height='20px'>" );
}
