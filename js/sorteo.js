
function sorteo(){  //funcion que realiza la comprobacion del sorteo
    var numeroGanador=5; // recoge el numero ganador en esta variable
    let suerte = document.querySelector(".suerte") // almacena en una variable si se ha usado el boton
    suerte.disabled = false; // para deshabilitar el boton del sorteo lo ponemos en false.
    var numero=prompt("Introduzca un numero"); 

    if (numero != undefined) { // comprueba que la variable numero introducida no esta vacia.
        suerte.disabled = true; // en caso de que el boton haya sido usado lo desactiva.
        suerte.style.cursor = "not-allowed";
    }

    if (numeroGanador==numero) { 
        alert("Has ganado el sorteo!!!");       
    } else if(numero == undefined) {
        alert("No ha introducido ningun numero");
    } else {   
        alert("Lo sentimos, esperamos que tengas mas suerte la proxima vez");

    }

}//end function
