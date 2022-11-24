//Función que Suma dos numeros
function sumar() {
    var x, y, suma
    
    x=parseInt(document.getElementById("n1").value);
    y=parseInt(document.getElementById("n2").value);
    
    var suma=x+y;
    
    document.getElementById("resultado_suma").innerHTML="La Suma es: " +suma
    
    }
    //Funcion que resta 2 numeros
    function restar() {
        var x, y, resta
        
        x=parseInt(document.getElementById("n1").value);
        y=parseInt(document.getElementById("n2").value);
        
        var resta=x-y;
        
        document.getElementById("resultado_resta").innerHTML="La Resta es: " +resta
    }
    //Funcion que multiplica dos numeros
    function multiplicar() {
        var x, y, multiplicación
        
        x=parseInt(document.getElementById("n1").value);
        y=parseInt(document.getElementById("n2").value);
        
        var multiplicación=x*y;
        
        document.getElementById("resultado_multiplicacion").innerHTML="La Multiplicación es: " +multiplicación
    }

     //Funcion que divide dos numeros
     function dividir() {
        var x, y, division
        
        x=parseFloat(document.getElementById("n1").value);
        y=parseFloat(document.getElementById("n2").value);
        
        var division=x/y;
        
        document.getElementById("resultado_division").innerHTML="La Division es: " +division
    }




