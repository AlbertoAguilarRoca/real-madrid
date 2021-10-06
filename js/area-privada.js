//Variable contador
var contador = 3;


function login() {
    //valor de la contraseña del input
    var passwordInputValor = document.getElementById("passwordUser").value;
    //Contraseña que se debe escribir
    var contrasena = "password";
    var mensaje = "";
    //variable booleana
    var loginValido = false;
    var resultado = document.getElementById("resultado-validacion");

    if(passwordInputValor == contrasena) {
        //Si la contraseña es válida, cambia el valor de la var
        loginValido = true;
    }

    if(loginValido) {
        //si loginValido es true, redirecciona hacia areaPrivada
        window.location.replace('area-privada.php');
    } else {
        //Envia un mensaje de error en una etiqueta p
        resultado.innerText = "Contraseña erronea, siga intentándolo";
        resultado.style.color = "red";
    }



    /*if (passwordInputValor == contrasena) {
        loginValido = true;
        window.location.replace('area-privada.php');
    } else {

        while (mensaje != contrasena && contador > 0) {
            mensaje = prompt("Contraseña errónea, vuelve a introducirla. Te quedan " + contador + " intentos.");
            contador--;
        }

        if (mensaje == contrasena) {
            window.location.replace('area-privada.php');
        } else {
            window.location.replace('index.php');
        }//end if           
    }//end if*/

}//end function