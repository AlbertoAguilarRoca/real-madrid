
function bienvenidoAficionado() { // Funcion que recoge los valores del formulario e incluye la funcion mostrar mensaje.

    var nombrefor = document.getElementById("nombreAficionado").value; // variable que recoge el nombre introducido por formulario.

    var aniosfor = new Date(document.getElementById("fecha").value); // variable que recoje la fecha introducidos por el formulario.


    var tiempo = calcularAños(aniosfor);// recogemos en la variable tiempo el numero de años ya redondeado.


    mostrarMensaje1(nombrefor, tiempo); //llamamos a la funcion mostrarMensaje1.



    mostrarTipoAficionado(tiempo); // en funcion de los años que lleve mostrara un mensaje u otro.



}

function mostrarMensaje1(nombrefor, tiempo) { //funcion que muestra un mensaje en <p>
    var idioma = navigator.language; // guardamos en la variable idioma el idioma de nuestro navegador para trabajar con ella.
    
    if (idioma == "es-ES") { // comprueba el tipo de idioma y en funcion de este muestra un mensaje u otro.
        if (tiempo < 0) { // comprueba si el tiempo es menor a 0 ya que esto no es posible para mostrar el siguiente mensaje.
            document.getElementById("mensajeBienvenida").innerHTML = "Debió de ocurrir un error"; // mostrarmos el mensaje en el elemento p con el id mensajeBienvenida
        } else if (tiempo == 0) {// comprueba que tiempo es igual a 0
            document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + nombrefor + " llevas con nosotros menos de un año";
        } else { //sino es menor ni 0
            document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + nombrefor + " llevas con nosotros " + tiempo + " años";
        }// fin if tiempo

    } else if (idioma == "fr") {//comprueba que el idioma sea frances
        if (tiempo < 0) {
            document.getElementById("mensajeBienvenida").innerHTML = "Une erreur doit s'être produite";
        } else if (tiempo == 0) {
            document.getElementById("mensajeBienvenida").innerHTML = "Bienvenue " + nombrefor + " tu es avec nous depuis moins d'un an";
        } else {
            document.getElementById("mensajeBienvenida").innerHTML = "Bienvenue " + nombrefor + " tu es avec nous depuis " + tiempo + " ans";;
        }//fin if tiempo

    } else { // sino es frances ni español entra en el else mostrando por defecto ingles.
        if (tiempo < 0) {
            document.getElementById("mensajeBienvenida").innerHTML = "An error must have occurred";
        } else if (tiempo == 0) {
            document.getElementById("mensajeBienvenida").innerHTML = "Welcome " + nombrefor + " you have been with us for less than a year";
        } else {
            document.getElementById("mensajeBienvenida").innerHTML = "Welcome  " + nombrefor + " you've been with us for " + tiempo + " years";
        }//fin if tiempo

    }//fin if idioma

}//fin funcion
function mostrarTipoAficionado(tiempo) { //funcion que coge la variable de tiempo y muestra el tipo de aficionado segun el tiempo

    var idioma = navigator.language; // guardamos en la variable idioma el idioma de nuestro navegador para trabajar con ella.

    if (idioma == "es-ES") { // comprueba el idioma para mostrarlo en dicho idioma, en este caso Español
        if (tiempo < 0) { // comprueba si el tiempo es menor a 0 ya que esto no es posible para mostrar el siguiente mensaje.
            document.getElementById("tipoAficionado").innerHTML = "No puede introducir valores falsos.";
        } else if (tiempo >= 0 && tiempo <= 2) { // comprueba si se encuentra entre 0 y 2 para mostrar el siguiente mensaje.

            document.getElementById("tipoAficionado").innerHTML = "WOW! Eres un aficionado de nivel Básico.";

        } else if (tiempo >= 2 && tiempo <= 5) { //comprueba si se encuentra entre 2 y 5 para mostrar el siguiente mensaje.

            document.getElementById("tipoAficionado").innerHTML = "WOW! Eres un aficionado de nivel Avanzado.";

        } else { //si es mayor que 5 entra aqui
            document.getElementById("tipoAficionado").innerHTML = "WOW! Eres un aficionado de nivel Premium.";

        }//fin if tiempo

    } else if (idioma == "fr") { // comprueba que el idioma sea Frances
        if (tiempo < 0) {
            document.getElementById("tipoAficionado").innerHTML = "Vous ne pouvez pas entrer de fausses valeurs.";
        } else if (tiempo >= 0 && tiempo <= 2) {

            document.getElementById("tipoAficionado").innerHTML = "WOW! Vous êtes un amateur de niveau basique.";

        } else if (tiempo >= 2 && tiempo <= 5) {

            document.getElementById("tipoAficionado").innerHTML = "WOW! Vous êtes un amateur de niveau avancé.";

        } else {
            document.getElementById("tipoAficionado").innerHTML = "WOW! Vous êtes un fan de niveau Premium.";
        } // fin if tiempo

    } else { // sino es ni Frances ni Español entra aquí cogiendo por defecto Ingles.
        if (tiempo < 0) {
            document.getElementById("tipoAficionado").innerHTML = "You cannot enter false values.";
        } else if (tiempo >= 0 && tiempo <= 2) {

            document.getElementById("tipoAficionado").innerHTML = "WOW! You are a Basic level hobbyist.";

        } else if (tiempo >= 2 && tiempo <= 5) {

            document.getElementById("tipoAficionado").innerHTML = "WOW! You are an Advanced level hobbyist.";

        } else {
            document.getElementById("tipoAficionado").innerHTML = "WOW! You are a Premium level hobbyist.";
        }//fin if tiempo
    } //fin if idioma
}//fin funcion

function calcularAños(aniosfor) { // funcion que calcula los años de el aficionado.

    var fechaActual = new Date();  // guarda en la variable la fecha en la que nos encontremos.
    var numeroaños = fechaActual - aniosfor;  // realizamos el calculo de los años como aficionado, el resultado es en milisegundos.

    var year = (numeroaños / 86400000) / 365; // guardamos en la variable el resultado de la operacion de pasar milisegundos a dias y luego a años.
    
    /*realizamos estos if debido a que si introduce un numero de un dia futuro year es negativo como por ejemplo -0 
    a la hora de redondearlos los pasa a 0 de modo que con esta operacion realizamos un filtro mas fiable 
    (si por ejemplo pusieramos en el data mañana nos daria 0 dandola por bueno, esto se evitaria de la siguiente manera).*/

    if (year < 0) { // comprobamos si años es menor que 0
    var redond = -1;// si es asi le damos a la variable -1 para evitar que redondee a 0.
    } else { //sino es que es correcta la fecha y redondeamos. 
        var redond = Math.round(year);
    }

    return redond; // devolvemos el valor


}
