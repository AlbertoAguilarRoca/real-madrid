// Funcion que recoge los valores del formulario e incluye la funcion mostrar mensaje.
function bienvenidoAficionado() { 
    
    // variable que recoge el nombre introducido por formulario.
    var nombrefor = document.getElementById("nombreAficionado").value; 
    // variable que recoje la fecha introducidos por el formulario.
    var aniosfor = new Date(document.getElementById("fecha").value); 
    // recogemos en la variable tiempo el numero de años ya redondeado.
    var tiempo = calcularAños(aniosfor);

    mostrarMensajeBienvenida(nombrefor, tiempo); 

    // en funcion de los años que lleve mostrara un mensaje u otro.
    mostrarTipoAficionado(tiempo); 

}

//funcion que muestra un mensaje en <p>
function mostrarMensajeBienvenida(nombrefor, tiempo) { 

    // guardamos en la variable idioma el idioma de nuestro navegador para trabajar con ella.
    var idioma = navigator.language;
    var mensaje = document.getElementById("mensaje");
    
    // comprueba el tipo de idioma y en funcion de este muestra un mensaje u otro.
    if (idioma == "es-ES" || idioma == "es") { 
        // comprueba que tiempo es igual a 0
        if (tiempo == 0) {
            mensaje.innerHTML = "Bienvenido " + nombrefor + " llevas con nosotros menos de un año";
        } else { 
            mensaje.innerHTML = "Bienvenido " + nombrefor + " llevas con nosotros " + tiempo + " años";
        }// fin if tiempo

    } else if (idioma == "fr") {
        //comprueba que el idioma sea frances
        if (tiempo == 0) {
            mensaje.innerHTML = "Bienvenue " + nombrefor + " tu es avec nous depuis moins d'un an";
        } else {
            mensaje.innerHTML = "Bienvenue " + nombrefor + " tu es avec nous depuis " + tiempo + " ans";;
        }//fin if tiempo

    } else { 
        // sino es frances ni español entra en el else mostrando por defecto ingles.
        if (tiempo == 0) {
            mensaje.innerHTML = "Welcome " + nombrefor + " you have been with us for less than a year";
        } else {
            mensaje.innerHTML = "Welcome  " + nombrefor + " you've been with us for " + tiempo + " years";
        }//fin if tiempo
    }//fin if idioma

}//fin funcion

//funcion que coge la variable de tiempo y muestra el tipo de aficionado segun el tiempo
function mostrarTipoAficionado(tiempo) { 
    // guardamos en la variable idioma el idioma de nuestro navegador para trabajar con ella.
    var idioma = navigator.language; 
    var nivelAficionado = document.getElementById("nivel-aficionado");
    
    // comprueba el idioma para mostrarlo en dicho idioma, en este caso Español
    if (idioma == "es-ES" || idioma == "es") { 
        // comprueba si se encuentra entre 0 y 2 para mostrar el siguiente mensaje.
        if (tiempo >= 0 && tiempo <= 2) { 
            nivelAficionado.innerHTML = "WOW! Eres un aficionado de nivel Básico.";
        } else if (tiempo >= 2 && tiempo <= 5) { 
            //comprueba si se encuentra entre 2 y 5 para mostrar el siguiente mensaje.
            nivelAficionado.innerHTML = "WOW! Eres un aficionado de nivel Avanzado.";
        } else { 
            //si es mayor que 5 entra aqui
            nivelAficionado.innerHTML = "WOW! Eres un aficionado de nivel Premium.";
        }//fin if tiempo

    } else if (idioma == "fr") { 
        // comprueba que el idioma sea Frances
        if (tiempo >= 0 && tiempo <= 2) {
            nivelAficionado.innerHTML = "WOW! Vous êtes un amateur de niveau basique.";
        } else if (tiempo >= 2 && tiempo <= 5) {
            nivelAficionado.innerHTML = "WOW! Vous êtes un amateur de niveau avancé.";
        } else {
            nivelAficionado.innerHTML = "WOW! Vous êtes un fan de niveau Premium.";
        } // fin if tiempo

    } else { // sino es ni Frances ni Español entra aquí cogiendo por defecto Ingles.
        if (tiempo >= 0 && tiempo <= 2) {
            nivelAficionado.innerHTML = "WOW! You are a Basic level hobbyist.";
        } else if (tiempo >= 2 && tiempo <= 5) {
            nivelAficionado.innerHTML = "WOW! You are an Advanced level hobbyist.";
        } else {
            nivelAficionado.innerHTML = "WOW! You are a Premium level hobbyist.";
        }//fin if tiempo
    } //fin if idioma
}//fin funcion

function calcularAños(aniosfor) { // funcion que calcula los años de el aficionado.
    // guarda en la variable la fecha en la que nos encontremos.
    var fechaActual = new Date();

    // realizamos el calculo de los años como aficionado, el resultado es en milisegundos.  
    var numeroaños = fechaActual - aniosfor;

    // guardamos en la variable el resultado de la operacion de pasar milisegundos a dias y luego a años.  
    var year = (numeroaños / 86400000) / 365; 
    var redond = Math.round(year);

    // devolvemos el valor
    return redond; 

}
