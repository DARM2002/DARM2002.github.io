
function validaCampos(){

    var formulario;
    //valida el campo de usuario
    formulario=document.formUser;

    if (formulario.user.value=="") {
        //valida si el campo esta vacio
        document.getElementById("validaUser").innerHTML="Digite su Usuario";

        formulario.user.focus();
        return false;
        
    } else {
        document.getElementById("validaUser").innerHTML="";
    }

    if (formulario.email.value=="") {

        document.getElementById("validaEmail").innerHTML="Escriba su Correo Electronico"
        formulario.email.focus();
        return false;

    } else {
        document.getElementById("validaEmail").innerHTML="";
    }

    if (formulario.password.value=="") {

        document.getElementById("validaPassword").innerHTML="Digite su contraseña"
        formulario.password.focus();
        return false;
    } else {
        document.getElementById("validaPassword").innerHTML="";
    }

    if (formulario.passwordC.value=="") {
        document.getElementById("validapasswordC").innerHTML="Confirme su Contraseña"
        formulario.passwordC.focus();
        return false;

        
    } else {
        document.getElementById("validapasswordC").innerHTML="";
    }

    formulario.submit();

}