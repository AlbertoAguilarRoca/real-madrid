
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

function bienvenidoAficionado() {
 
    var nombrefor = document.getElementById("nombreAficionado").value;
    var aniosfor = document.getElementById("edadAficionado").value;

    console.log(nombrefor);
    console.log(aniosfor);

    mostrarMensaje(nombrefor,aniosfor);

    
}

function  mostrarMensaje(nombrefor,aniosfor){
    


}