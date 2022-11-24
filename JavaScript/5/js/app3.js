//Definir las variables

var a, b;
var i;

a=parseInt(prompt("Digite el valor inicial"));
b=parseInt(prompt("Digite el valor final"));

for (i=a; i <=b; i++){

    if (i%2==0){
        document.write(i+"&nbsp")
    }
}

