
//Array que almacena las entradas creadas
const entradas = [];
//Recoge la información del localstorage y la guarda dentro del array
recogeEntradas();
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

    //var que recogen los valores introducidos en los input's.
    var fechatikect = document.getElementById("fecha").value;
    var horaticket=document.getElementById("hora").value;
    var tituloticket =document.getElementById("titulo").value
    var lugarticket =document.getElementById("lugar").value;
    var precioticket =document.getElementById("precio").value;
    var numeroticket =document.getElementById("num").value;
    var identificador = document.getElementById("identificador").value;
    //creamos la variable validar
    var validar = true;
        //creamos un for que recorre el array validando si la id que contienen coincide con la id introducida
   for(var i = 0;i<entradas.length;i++){
       if (entradas[i].id == identificador ) {
           //si el id de alguna entrada coincide con la introducida.           
           var validar = false;
       }
   }
  
    // creamos la variable comprobante y la validamos a true.  
    var comprobante = true;
    /*creamos un if que valide que todos los campos esten llenos y que la id no coincide mediante la variable validar,
    si la variable validar es false es que coincide por lo tanto entra en el if
    si los campos estan vacios o id repetida entra en if, comprobante lo pone a false y retorna comprobante,
    sino entra en el else y crea la entrada.
    */
    if (fechatikect == "" || horaticket == "" || tituloticket == "" || lugarticket == "" || 
    precioticket == "" || numeroticket == "" || identificador == "" || !validar) {
        
        comprobante = false;
        return comprobante;     

    } else{

        
    // creamos el objeto partidos.
    var entrada= new Partidos(fechatikect,horaticket,tituloticket,lugarticket,
    precioticket,numeroticket,identificador);

    //retornamos el objeto creado
    return entrada;

}

}

function recogeEntradas() {
    //recogemos los datos dentro del storage en la variable entradasPartido
    var entradasPartido = localStorage.getItem('partidos');
    //con la constante aux guardamos los datos del storage parseados.
    const aux = JSON.parse(entradasPartido);

    //Guardamos la informacion del localstorage dentro un array auxiliar,
    //para despues pasarla al array entradas
    for (var i = 0; i < aux.length; i++) {       
        entradas[i] = aux[i];        
    }
}

// guardamos el array en el storage
function guardararray(){
    /* creamos el if de modo que si el array es mayor de 0 recorre todo el 
    array con la lista partidos y los guarda en el storage
    sino es que solo tiene un elemento y guarda solo el que tiene.*/
    if(entradas.length > 0) {
        for (var i = 0; i < entradas.length; i++) {
            localStorage.setItem("partidos", JSON.stringify(entradas));
        }
    } else {
        localStorage.setItem("partidos", JSON.stringify(entradas));
    }
}


function agregarPartido() {
   
    //guardamos en validacion el elemento de valido que es un p
        var validacion = document.getElementById("valido");
        
        /*creamos en agregar partido un if de modo que si crearPartidos devuelve false es 
        que entro en el if de comprobante,entrando en este if y saltando el mensaje de error,
        sino entra en el else y crea el objeto de entrada*/ 
        if (!crearPartidos()) {
            validacion.textContent = "No puede introducir valores vacios o nulos";
            validacion.style.color = "red";         
        }else{
            //si entra en el else y encontramos algun mensaje  en validacion lo sustituye
            validacion.textContent = "";
            // guardamos en la variable nuevo partido la entrada creada
            var nuevoPartido = crearPartidos();
            // en el array de entradas le hacemos un push de la nueva entrada creada
            entradas.push(nuevoPartido);
            //llamamos a guardar array para que guarde el array creado
            guardararray();
            // generamos el div con las entradas creadas
            generaEntradasHTML(entradas.length-1);
        }
       
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

