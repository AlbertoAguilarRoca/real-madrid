/*
function nivelAficionado() {
    var nombre = prompt("Introduzca su nombre: ");
    var edad = prompt("¿Desde cuándo eres socio?");
    var dias = edad *365;

    if (edad < 0) {
        alert('No puedes poner números negativos.')
    } else {
        document.getElementById("mensaje").innerHTML = "Bienvenido "+nombre+". Eres socio desde hace "+edad+" años (El equivalente en días son "+dias+").";
    }

    if(edad < 0) {
        
    } else if (edad >= 0 && edad <= 2) {
        document.getElementById("nivel-aficionado").innerHTML = "WOW! Eres un aficionado de nivel Básico.";
    } else if (edad > 2 && edad <= 5) {
        document.getElementById("nivel-aficionado").innerHTML = "WOW! Eres un aficionado de nivel Avanzado.";
    } else {
        document.getElementById("nivel-aficionado").innerHTML = "WOW! Eres un aficionado de nivel Premium.";
    }

    
}
*/
function bienvenidoAficionado() { // Funcion que recoge los valores del formulario e incluye la funcion mostrar mensaje

    var nombrefor = document.getElementById("nombreAficionado").value; // variable que recoge el nombre introducido por formulario
    var hora = new Date(document.getElementById("fecha").value);
    //var aniosfor = document.getElementById("fecha").value; // variable que recoje la fecha introducidos por el formulario
    console.log(aniosfor)
    var fechaActual= new Date();
    var numeroaños = fechaActual-hora;
    console.log(numeroaños);
    
    var dias = numeroaños/86400000;
    var year = dias/365;
    console.log(year);
    

    mostrarMensaje1(nombrefor, aniosfor); //llamamos a la funcion mostrarMensaje1
    


    //mostrarTipoAficionado(aniosfor);

    calcularAños(aniosfor);
    
}

function mostrarMensaje1(nombrefor, aniosfor) { //funcion que muestra un mensaje en <p>

    document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + nombrefor + " llevas con nosotros " + aniosfor + " años"; // mostrarmos el mensaje en el elemento p con el id mensajeBienvenida




}
function mostrarTipoAficionado(aniosfor){
    if(aniosfor <= 0 ){
        document.getElementById("tipoAficionado").innerHTML="No puede introducir valores falsos.";

    }else if(aniosfor >= 0 && aniosfor <= 2 ){
        document.getElementById("tipoAficionado").innerHTML="WOW! Eres un aficionado de nivel Básico.";
    }else if(aniosfor >= 2 && aniosfor <= 5){
        document.getElementById("tipoAficonado").innerHTML="WOW! Eres un aficionado de nivel Avanzado."
    }else {
        document.getElementById("tipoAficonado").innerHTML="WOW! Eres un aficionado de nivel Premium."

    }

    function calcularAños(aniosfor){
       
        var fechaActual=new Date();

        var numeroaños = fechaActual.getTime()-aniosfor.getTime();
        console.log(numeroaños);
        
    }


}