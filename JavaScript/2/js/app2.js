//App para evaluar un numero entre 10 y 100
var n;

//Capturando la entrada
n=parseInt(prompt("Digite un numero entero"))

//Evaluamos el proceso numerico
if (n>=10 && n<=100) {
    document.write("El numero: " +n+ " Esta entre 10 y 100 <img src='img/bloques-numericos.png' height='20px'>" );
} else {
    document.write("El numero " +n+ " No esta entre 10 y 100 <img src='img/bloques-numericos.png' height='20px'>")
}