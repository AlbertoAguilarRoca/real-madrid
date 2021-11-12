//Variable contador
var contador = 3;

/*
"email": "eve.holt@reqres.in",
    "password": "cityslicka"
*/
function consultaDatos() {

    //Metemos los datos en un objeto, para falsear el inicio de sesión, le mandamos en
    //email la contraseña, y la constraseña en el email. 
    //Esto se hace así porque la api está mal hecha
    const datos = {
        email: document.getElementById("passwordUser").value,
        password: document.getElementById("nameUser").value
    }
    
    fetch("https://reqres.in/api/login",
    {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(datos)
    })
    .then(data => {
        if(!data.ok) {
            //Si la contraseña (en realidad es el email) es incorrecta, muestra el error
            //en la consola
            throw Error(data.status);
        }
        //Si está bien, devuelve los datos en json
        return data.json();
    })
    //Una vez retorna los datos en json, podemos trabajar con ellos.
    .then(update => {
        var respuesta = update["token"];

        if(typeof(respuesta) != undefined) {
            console.log("Login válido");
        }
    })
    .catch(error => {
        console.log("Login inválido: "+error);
    });
    
}

//guardar array en local
function guardado() {
    //cookies con los usuarios y contraseñas
    var usushow = localStorage.getItem("nombre");
    var passhow = localStorage.getItem("pass");
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
    } else {
    
        if(passwordInputValor == contrasena) {
            //Si la contraseña es válida, cambia el valor de la var
            loginValido = true;
        }

        if (save) {
            localStorage.setItem("nombre",usuario);
            localStorage.setItem("pass",passwordInputValor);
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



