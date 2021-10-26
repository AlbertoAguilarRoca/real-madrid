var numPartidos= 0;
//Array que almacena las entradas creadas
const entradas =[];
var entradasPartido = localStorage.getItem('partidos');
entradas = JSON.parse(entradasPartido);
console.log(entradas);

desplegableEntradas();
//funcion que crea el objeto entradas
function crearPartidos() 
{
    // creamos la clase entrada
    class Partidos{
        //constructor de entrada con los parametros del formulario
        constructor (fecha,hora,titulo,lugar,precio,total_entradas,id){
            this.fecha=fecha;
            this.hora=hora;
            this.titulo=titulo;
            this.lugar=lugar;
            this.precio=precio;
            this.total_entradas = total_entradas;
            this.id = id;
        }    
}
//var que recoge el valor introducido en el input fecha
var fechatikect = document.getElementById("fecha").value;
var horaticket=document.getElementById("hora").value;
var tituloticket =document.getElementById("titulo").value
var lugarticket =document.getElementById("lugar").value;
var precioticket =document.getElementById("precio").value;
var numeroticket =document.getElementById("num").value;
var identificador = document.getElementById("identificador").value;


var entrada= new Partidos(fechatikect,horaticket,tituloticket,lugarticket,
    precioticket,numeroticket,identificador);

    return entrada;

}

function agregarPartido() {
    var nuevoPartido = crearPartidos();

    entradas.push(nuevoPartido);
    console.log(entradas.join(" ,"));
    localStorage.setItem("partidos", JSON.stringify(entradas));
}



    function mostrarEntradas() {
        console.log(" ");
        console.log(numPartidos);
        for (var i = numPartidos; i < entradas.length; i++) {
            var totalEntradas = document.getElementById("partidos");
            var entrada = document.createElement("DIV");
            entrada.className = "entrada";
            totalEntradas.appendChild(entrada);
    
            var titulo = document.createElement("H3");
            titulo.innerText = entradas[i].titulo;
            entrada.appendChild(titulo);
    
            var identificador = document.createElement("P");
            identificador.className = "id-entrada";
            identificador.id = entradas[i].id;
            identificador.innerText = entradas[i].id;
            entrada.appendChild(identificador);
    
            var lugar = document.createElement("P");
            lugar.className = "datos-entrada";
            lugar.innerText = entradas[i].lugar;
            entrada.appendChild(lugar);
    
            var hora = document.createElement("P");
            hora.className = "datos-entrada";
            hora.innerText = entradas[i].hora;
            entrada.appendChild(hora);
    
            var fecha = document.createElement("P");
            fecha.className = "datos-entrada";
            fecha.innerText = entradas[i].fecha;
            entrada.appendChild(fecha);
    
            var number = document.createElement("P");
            number.className = "datos-entrada";
            number.innerText = "Entradas disponibles: "+entradas[i].total_entradas;
            entrada.appendChild(number);
            
            var price = document.createElement("P");
            price.className = "precio-entrada";
            price.innerText = entradas[i].precio;
            entrada.appendChild(price);
            numPartidos++;
            
        }//end for
      
        return numPartidos;
    }     

    function borrarPartido() {

        var numoro = document.getElementById("borrar").value;
        for(var i = 0;i < entradas.length;i++){
            console.log(entradas[i].id);
            if (numoro == entradas[i].id) {
                console.log(numoro);
                console.log(entradas[i].id);
                console.log(entradas);
                entradasPart.splice(i, 1);

            console.log(entradas);
            

           numPartidos--;
                
            }else{

            }

            
        }
        return numPartidos;
    }