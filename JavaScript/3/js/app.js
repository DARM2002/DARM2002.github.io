// definir variables

var op;
var n1, n2, resultado;

op=parseInt(prompt("Escoja una opción del Menu"));

switch (op) {
    case 1:
        n1=parseInt(prompt("Digite el primer numero"));
        n2=parseInt(prompt("Digite el segundo numero"));
        resultado=n1+n2;
        document.write("La suma de: " +n1+ " + " +n2+ " es: " +resultado);
    break;
    case 2:
        n1=parseInt(prompt("Digite el primer numero"));
        n2=parseInt(prompt("Digite el segundo numero"));
        resultado=n1-n2;
        document.write("La Resta de: " +n1+ " - " +n2+ " es: " +resultado);
    break;
    case 3:
        n1=parseInt(prompt("Digite el primer numero"));
        n2=parseInt(prompt("Digite el segundo numero"));
        resultado=n1*n2;
        document.write("La Multiplicación de: " +n1+ " * " +n2+ " es: " +resultado);
    break;
    case 4:
        n1=parseFloat(prompt("Digite el primer numero"));
        n2=parseFloat(prompt("Digite el segundo numero"));
        resultado=n1/n2;
        document.write("La División de: " +n1+ " / " +n2+ " es: " +resultado);
    break;

    default:
        document.write("Seleccione una opción del Menu")

    break;
}

