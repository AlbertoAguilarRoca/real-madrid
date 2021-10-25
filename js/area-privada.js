//Variable contador
var contador = 3;




function login() {
    //valor de la contraseña del input
    var passwordInputValor = document.getElementById("passwordUser").value;
    //Contraseña que se debe escribi
    var contrasena = "password";
    var usario= document.getElementById("nameUser").value;
    //variable booleana
    var loginValido = false;
    //parrafo de html1
    var resultado = document.getElementById("mensajeLogin");
    var vacio = document.getElementById("mensajevacio");
    if(passwordInputValor == "" || usario == "") {
        vacio.innerText = "No ha introducido usuario o contraseña";
        vacio.style.color = "red";
    }else{

    
    if(passwordInputValor == contrasena) {
        //Si la contraseña es válida, cambia el valor de la var
        loginValido = true;
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

//funcion que crea el objeto entradas
function crearPartidos() 
{
    // creamos la clase entrada
    class Partidos{
        //constructor de entrada con los parametros del formulario
        constructor (date,time,title,place,price,number,identif){
            this.date=date;
            this.time=time;
            this.title=title;
            this.place=place;
            this.price=price;
            this.number = number;
            this.identif = identif;
        }    
}
//var que recoge el valor introducido en el input fecha
var fechatikect = document.getElementById("fecha").value;
var horaticket=document.getElementById("hora").value;
var tituloticket =document.getElementById("titulo").value
var lugarticket =document.getElementById("lugar").value;
var precioticket =document.getElementById("precio").value;
var numeroticket =document.getElementById("num").value;
//

var random = (Math.random() * 100);
var redon = Math.round(random);
var play= new Partidos(fechatikect,horaticket,tituloticket,lugarticket,precioticket,numeroticket,redon)
console.log(Object.values(play));

    return play;

}
const entradasPart=[];
function agregarPartido() {
    var pro = crearPartidos();

    entradasPart.push(pro);

    console.log(entradasPart.join(" ,"))

    
}

function mostrarPartidos() {

    for (var i=0;i<entradasPart.length;i++){
        console.log(Object.values(entradasPart[i]))
    }
        
    }

    
}
