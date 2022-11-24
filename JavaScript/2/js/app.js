//Aplicación para evaluar la Fiebre de una persona
var temp; 

// Capturar los datos de entrada
temp=parseFloat(prompt("Ingrese su temperatura en °C: "));

//Proceso para evaluar la fiebre
if (temp>=38) {
    document.write("La temperatura " +temp+ " °C Indica Fiebre <img src='img/fiebre.png' height='20px'>" );
} else {
    document.write("La temperatura " +temp+ " °C indica que esta persona no tiene fiebre <img src='img/fiebre.png' height='20px'>");
}
