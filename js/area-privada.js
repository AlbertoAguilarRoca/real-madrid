//Variable contador
var contador = 3;



//guardar array en local

function guardado() {
    
    var memoria = localStorage.getItem("partidos");
    console.log("lospartidos : ", JSON.parse(memoria));

    //cookies con los usuarios y contraseñas
    var usushow = localStorage.getItem("nombre");
    var passhow = localStorage.getItem("pass");
    console.log(usushow);
    console.log(passhow);
    document.getElementById("nameUser").value = usushow;
    document.getElementById("passwordUser").value = passhow;

}

function login() {
    //valor de la contraseña del input
    var passwordInputValor = document.getElementById("passwordUser").value;
    //Contraseña que se debe escribi
    var contrasena = "password";

    var save = document.getElementById("caja").checked;

    var usuario= document.getElementById("nameUser").value;

    //variable booleana
    var loginValido = false;
    //parrafo de html1
    var resultado = document.getElementById("mensajeLogin");
    var vacio = document.getElementById("mensajevacio");
    if(passwordInputValor == "" || usuario == "") {
        vacio.innerText = "No ha introducido usuario o contraseña";
        vacio.style.color = "red";
    }else{

    
    if(passwordInputValor == contrasena) {
        //Si la contraseña es válida, cambia el valor de la var
        loginValido = true;
    }

    if (save == true) {
        localStorage.setItem("nombre",usuario);
        localStorage.setItem("pass",passwordInputValor);
         
        console.log(localStorage.getItem("nombre"));
        console.log(localStorage.getItem("pass"));

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


    }

}//end function



