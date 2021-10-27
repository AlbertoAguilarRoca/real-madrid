
//Array que almacena las entradas creadas
const entradas = [];
var entradasPartido = localStorage.getItem('partidos');
const aux = JSON.parse(entradasPartido);

//Guardamos la informacion del localstorage dentro un array auxiliar,
//para despues pasarla al array entradas
for (var i = 0; i < aux.length; i++) {
    
    entradas[i] = aux[i];
    
}


//Funcion que muestra las entradas en un select, tanto en la 
//pagina de aficionados con el area privada

desplegableEntradas();

//funcion que crea el objeto entradas
function crearPartidos() {
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

function guardararray(){
    if(entradas.length > 0) {
        for (var i = 0; i < entradas.length; i++) {
            localStorage.setItem("partidos", JSON.stringify(entradas));
        }
    } else {
        localStorage.setItem("partidos", JSON.stringify(entradas));
    }
}

function agregarPartido() {
    var nuevoPartido = crearPartidos();
    entradas.push(nuevoPartido);
    guardararray();
    generaEntradasHTML(entradas.length-1);
}


//Imprime todas las entradas disponibles dentro de un select
function desplegableEntradas() {
    //Recorremos el array con las entradas
    for(var i = 0; i < entradas.length; i++ ) {
        //seleccionamos la etiqueta select del DOM
        var selector = document.getElementById("selectorEntradas");
        //Por cada entrada creamos un elemento option
        //y le insertamos el contenido
        var idEntradas = document.createElement("OPTION");
        idEntradas.value = entradas[i].id;
        idEntradas.innerHTML = entradas[i].titulo + " ("+ entradas[i].id 
        + ")"; 
        //lo insertamos dentro del select
        selector.appendChild(idEntradas);
    }
}



function mostrarEntradas() {
    console.log("");
    for (var i = 0; i < entradas.length; i++) {
        generaEntradasHTML(i);
    }//end for
    
}     

function borrarPartido() {

    //Valor del select seleccionado
    var selectorValor = document.getElementById("selectorEntradas").value;
    //Guardo en una variable el elemento que tiene el mismo identificador 
    //que el valor del select
    var entradaId = document.getElementById(selectorValor);
    //guardo el nodo padre
    var entradaPadre = entradaId.parentElement;
    //y lo elimino
    entradaPadre.remove();

    //Borramos el partido del localstorage
    //Primero localizamos donde esta el indice donde se encuentra
    //el id de la entrada que queremos borrar
    var indiceIdEntrada = entradas.findIndex(x => x.id === selectorValor);
    //borramos la entrada del array en el indice encontrado
    entradas.splice(indiceIdEntrada,1);
    //Vuelvo a guardar el array
    guardararray();

}

function generaEntradasHTML(indice) {
    var totalEntradas = document.getElementById("entradas-disponibles");
    var entrada = document.createElement("DIV");
    entrada.className = "entrada";
    totalEntradas.appendChild(entrada);

    var titulo = document.createElement("H3");
    titulo.innerText = entradas[indice].titulo;
    entrada.appendChild(titulo);

    var identificador = document.createElement("P");
    identificador.className = "id-entrada";
    identificador.id = entradas[indice].id;
    identificador.innerText = entradas[indice].id;
    entrada.appendChild(identificador);

    var lugar = document.createElement("P");
    lugar.className = "datos-entrada";
    lugar.innerText = entradas[indice].lugar;
    entrada.appendChild(lugar);

    var hora = document.createElement("P");
    hora.className = "datos-entrada";
    hora.innerText = entradas[indice].hora;
    entrada.appendChild(hora);

    var fecha = document.createElement("P");
    fecha.className = "datos-entrada";
    fecha.innerText = entradas[indice].fecha;
    entrada.appendChild(fecha);

    var number = document.createElement("P");
    number.className = "datos-entrada";
    number.innerText = "Entradas disponibles: "+entradas[indice].total_entradas;
    entrada.appendChild(number);
    
    var price = document.createElement("P");
    price.className = "precio-entrada";
    price.innerText = entradas[indice].precio;
    entrada.appendChild(price); 
}