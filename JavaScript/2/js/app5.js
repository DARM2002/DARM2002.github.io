//algoritmo que ingrese una nota; Si la nota es mayor igual a 3 entonces es APROBADO, sino, REPROBADO.
var n;

// Capturar los datos de entrada
n=parseInt(prompt("Digite una nota"))

//Proceso para evaluar 
if (n>10) {
    document.write("El estudiante aprobo: " +n+ " Es mayor a 3 <img src='img/bloques-numericos.png' height='20px'> " );
} else {
    document.write("El estudiante reprobo: " +n+ " es menor a 3 <img src='img/bloques-numericos.png' height='20px'>" );
}