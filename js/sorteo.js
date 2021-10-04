
function sorteo(){  //funcion que realiza la comprobacion del sorteo
    var numeroGanador= Math.floor(Math.random() * 11); // Numero ganador aleatorio entre 0 y 10
    let suerte = document.querySelector(".suerte") // almacena en una variable si se ha usado el boton
    suerte.disabled = false; // para deshabilitar el boton del sorteo lo ponemos en false.
    var numero = document.getElementById("sorteo-input").value;//Almacena cada valor del input 
    var ganador = false; // variable booleana por defecto es false

    if (numero != undefined) { // comprueba que la variable numero introducida no esta vacia.
        suerte.disabled = true; // en caso de que el boton haya sido usado lo desactiva.
        suerte.style.cursor = "not-allowed";
    }

    if (numero == numeroGanador) {
        ganador = true;
    }

    //Validacion para mostrar mensaje de error si se introducen nuúmeros
    if (isNaN(numero)) {
        document.getElementById("resultado-sorteo").innerHTML = "Para participar en el sorteo debe introducir un número entero.";
    } else {
        mostrarMensaje(ganador);
    }
    

}//end function

    function mostrarMensaje(ganador) {
        var resultado = document.getElementById("resultado-sorteo");
        if (ganador) {
            //Si gana, añade el texto y modifica el color de un p 
            resultado.innerHTML = "¡Enhorabuena, has ganado el sorteo!";
            resultado.style.color = "#11D428";   
        } else { 
            //si falla, añade el texto y modfica el color de un p  
            resultado.innerHTML = "Lo sentimos, esperamos que tengas más suerte la próxima vez.";
            resultado.style.color = "#D41111";
        }
    }


