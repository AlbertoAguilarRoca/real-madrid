//Variable contador
var contador = 3;


function login() {
    //valor de la contraseña del input
    var passwordInputValor = document.getElementById("passwordUser").value;
    //Contraseña que se debe escribir
    var contrasena = "password";

    //variable booleana
    var loginValido = false;
    //parrafo de html1
    var resultado = document.getElementById("mensajeLogin");

    if(passwordInputValor == contrasena) {
        //Si la contraseña es válida, cambia el valor de la var
        loginValido = true;
    }

    if(loginValido) {
        //si loginValido es true, redirecciona hacia areaPrivada
        window.location.replace('area-privada.php');
    } else {
        //Envia un mensaje de error en una etiqueta p y le cambia el color
        contador--;
        resultado.innerText = "Contraseña erronea, te quedan "+contador+" intentos.";
        resultado.style.color = "red";
    }//end if

    if(contador == 0) {
        //si el contador llega a cero, redirecciona hacia index
        window.location.replace('index.php');
    }


}//end function