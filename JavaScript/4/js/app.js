//DEFINIR VARIABLES
var peso, estatura, imc;

//CAPTURAMOS ENTRADAS
peso=parseFloat(prompt("Digite el Peso en Kg"));
estatura=parseFloat(prompt("Digite la Estatura en Mts: "));

imc=peso/(estatura*estatura);

if (imc <18.5) {
    document.write("<p style= 'color: #82136E;'> "+" Bajo Peso  <img src='img/dieta.png' alt='PESO BAJO' height= '40px'>");
    document.write("<p style= 'color: #82136E;'> Elige alimentos ricos en nutrientes");
}
else if (imc>=18.5 && imc<=24.9){
    document.write("<p style= 'color: #82136E;'> "+" Peso Normal  <img src='img/control-de-peso.png' alt='PESO NORMAL' height= '40px'>");
    document.write("<p style= 'color: #82136E;'> Para mantener un peso saludable evite los alimentos densos en calorías.");
}
else if (imc>=25 && imc<=29.9){
    document.write("<p style= 'color: #82136E;'> "+" Sobrepeso  <img src='img/vientre.png' alt='obesidad' height= '40px'>");
    document.write("<p style= 'color: #82136E;'> Limitar el consumo de alimentos que sean ricos en azúcares y grasas.");
}
else if (imc>=30 && imc<=34.9){
    document.write("<p style= 'color: #82136E;'> "+" Obesidad I  <img src='img/obesidad.png' alt='obesidad' height= '40px'>");
    document.write("<p style= 'color: #82136E;'> Comer varias veces al día fruta y verdura, así como legumbres, cereales integrales y frutos secos.");
}
else if (imc>=35 && imc<=39.9){
    document.write("<p style= 'color: #82136E;'> "+" Obesidad II  <img src='img/gordo.png' alt='obesidad' height= '40px'>");
    document.write("<p style= 'color: #82136E;'> Realizar actividad física frecuente: unos 60 minutos por día para los jóvenes y 150 minutos semanales para los adultos.");
}
else if (imc>=40 && imc<=49.9){
    document.write("<p style= 'color: #82136E;'> "+" Obesidad III,  <img src='img/obesidad (1).png' alt='obesidad' height= '40px'> ");
    document.write("<p style= 'color: #82136E;'> Deja de fumar. Fumar está asociado con muchas enfermedades, pero también con el aumento de peso. A largo plazo será muy beneficioso para la salud.");
}
else if (imc>=50 ){
    document.write("<p style= 'color: #82136E;'> "+" Obesidad IV,  <img src='img/obesidad (2).png' alt='obesidad' height= '40px'> ");
    document.write("<p style= 'color: #82136E;'> Es importante no obsesionarse, pero puede ayudar a controlar el peso pesarse regularmente: una vez por semana es suficiente.");
}
else {
    document.write("<p style= 'color: #82136E;'> "+" Escriba los valores numericos esperados... <img src='img/obesidad (3).png' alt='obesidad' height='40px'> ");
}