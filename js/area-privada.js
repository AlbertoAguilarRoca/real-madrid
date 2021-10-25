//Variable contador
var contador = 3;
var numPartidos= 0;
const entradasPart=[];


//guardar array en local

function guardado() {
    
    var memoria = localStorage.getItem("partidos");
console.log("lospartidos : ", JSON.parse(memoria));

//cookies con los usuarios y contraseñas
var usushow = localStorage.getItem("nombre");
var passhow = localStorage.getItem("pass");
          console.log(usushow);
          console.log(passhow);
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
    }else{

    
    if(passwordInputValor == contrasena) {
        //Si la contraseña es válida, cambia el valor de la var
        loginValido = true;
    }

    if (save == true) {
        localStorage.setItem("nombre",usuario);
        localStorage.setItem("pass",passwordInputValor);
         
        console.log(localStorage.getItem("nombre"));
        console.log(localStorage.getItem("pass"));

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


var random = (Math.random() * 100);
var redon = Math.round(random);
var play= new Partidos(fechatikect,horaticket,tituloticket,lugarticket,precioticket,numeroticket,redon)
console.log(Object.values(play));

    return play;

}

function agregarPartido() {
    var pro = crearPartidos();

    entradasPart.push(pro);

    console.log(entradasPart.join(" ,"));
    localStorage.setItem("partidos", JSON.stringify(entradasPart));
}



    function mostrarEntradas() {
        console.log(" ");
        console.log(numPartidos);
        for (var i = numPartidos; i < entradasPart.length; i++) {
            var totalEntradas = document.getElementById("partidos");
            var entrada = document.createElement("DIV");
            entrada.className = "entrada";
            totalEntradas.appendChild(entrada);
    
            var titulo = document.createElement("H3");
            titulo.innerText = entradasPart[i].title;
            entrada.appendChild(titulo);
    
            var identificador = document.createElement("P");
            identificador.className = "id-entrada";
            identificador.innerText = entradasPart[i].identif;
            entrada.appendChild(identificador);
    
            var lugar = document.createElement("P");
            lugar.className = "datos-entrada";
            lugar.innerText = entradasPart[i].place;
            entrada.appendChild(lugar);
    
            var hora = document.createElement("P");
            hora.className = "datos-entrada";
            hora.innerText = entradasPart[i].time;
            entrada.appendChild(hora);
    
            var fecha = document.createElement("P");
            fecha.className = "datos-entrada";
            fecha.innerText = entradasPart[i].date;
            entrada.appendChild(fecha);
    
            var number = document.createElement("P");
            number.className = "datos-entrada";
            number.innerText = "Entradas disponibles: "+entradasPart[i].number;
            entrada.appendChild(number);
            
            var price = document.createElement("P");
            price.className = "precio-entrada";
            price.innerText = entradasPart[i].price;
            entrada.appendChild(price);
            numPartidos++;
            
        }//end for
      
        return numPartidos;
    }     

    function borrarPartido() {

        var numoro = document.getElementById("borrar").value;
        for(var i = 0;i < entradasPart.length;i++){
            console.log(entradasPart[i].identif);
            if (numoro == entradasPart[i].identif) {
                console.log(numoro);
                console.log(entradasPart[i].identif);
                console.log(entradasPart);
                entradasPart.splice(i, 1);

            console.log(entradasPart);
            

           numPartidos--;
                
            }else{

            }

            
        }
        return numPartidos;
    }


