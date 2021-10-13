
function sorteo(){  //funcion que realiza la comprobacion del sorteo
    // Numero ganador aleatorio entre 1 y 10
    var numeroGanador= Math.floor(Math.random() * 10) + 1; 
    // almacena en una variable el boton
    let suerte = document.querySelector(".suerte");
    //Almacena el valor del input introducido
    var numero = document.getElementById("sorteo-input").value;
    // variable booleana por defecto es false
    var ganador = false; 


    //Validacion para mostrar mensaje de error si se introducen números incorrectos
    if (isNaN(numero) || numero == "" || numero < 1 || numero > 10) {
        document.getElementById("resultado-sorteo").innerHTML = "Para participar en el sorteo debe introducir un número del 1 al 10.";
    } else {

        //Si el numero introducido coincide, cambia a true
        if (numero == numeroGanador) {
            ganador = true;
        }

        // Una vez se ha participado se deshabilita el boton
        suerte.disabled = true; 
        suerte.style.cursor = "not-allowed";

        //En base al valor booleano, se mostrará el mensaje correspondiente
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


