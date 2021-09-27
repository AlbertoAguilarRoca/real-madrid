
function sorteo(){
var numeroGanador=5;
let suerte = document.querySelector(".suerte")
suerte.disabled = false;


var numero=prompt("Introduzca un numero");

if (numero == undefined) {

    
} else {

    suerte.disabled = true;
    
}


if (numeroGanador==numero) {
    alert("Has ganado el sorteo!!!");
    
} else {

    alert("Lo sentimos, esperamos que tengas mas suerte la proxima vez");

}
 
}



