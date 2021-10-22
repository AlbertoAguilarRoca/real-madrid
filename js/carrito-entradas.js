
const entrada1 = {
    fecha:"24/10/2021",
    hora:"20:00",
    titulo:"Barcelona - Real Madrid",
    lugar: "Camp Nou",
    precio: 75.00,
    total_entradas: 4000,
    id: "BarReal"
};

const entrada2 = {
    fecha:"31/10/2021",
    hora:"16:00",
    titulo:"Real Madrid - Real Betis",
    lugar: "Santiago Bernabeu",
    precio: 50.00,
    total_entradas: 30000,
    id: "RealBet"
};

const entradas = [entrada1,entrada2];
const carrito = [];

function mostrarEntradas() {
    console.log(" ");
    for (var i = 0; i < entradas.length; i++) {
        var totalEntradas = document.getElementById("entradas-disponibles");
        var entrada = document.createElement("DIV");
        entrada.className = "entrada";
        totalEntradas.appendChild(entrada);

        var titulo = document.createElement("H3");
        titulo.innerText = entradas[i].titulo;
        entrada.appendChild(titulo);

        var identificador = document.createElement("P");
        identificador.className = "id-entrada";
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

        var cantidad = document.createElement("P");
        fecha.className = "datos-entrada";
        cantidad.innerText = "Entradas disponibles: "+entradas[i].total_entradas;
        entrada.appendChild(cantidad);
        
        var precio = document.createElement("P");
        precio.className = "precio-entrada";
        precio.innerText = entradas[i].precio;
        entrada.appendChild(precio);
        
    }//end for

    desplegableEntradas();
}


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

function validacionCantidad() {
    //seleccionamos el select del dom
    var idSeleccionado = document.getElementById("selectorEntradas");
    //guardamos en una variable el valor del atributo seleccionado
    var idAtributo = idSeleccionado.options[idSeleccionado.selectedIndex].value;
    //buscamos dentro del array el indice en el que se encuentra el identificador
    //del partido seleccionado
    var idEntrada = entradas.findIndex(i => i.id === idAtributo);

    //almacenamos el valor del input
    var inputCantidad = document.getElementById("cantidadEntradas");

    //en caso de que la cantidad sea menor al stock total, no este vacio y 
    //sea un numero, valida el formulario
    if(parseInt(inputCantidad.value) <= entradas[idEntrada].total_entradas &&
    inputCantidad != "" && !isNaN(inputCantidad.value)) {
        //reseteo el mensaje de error por si tiene contenido
        document.getElementById("error-compra").innerText = "";
        
        //creo un objeto producto para almacenar la informacion de la entrada
        const producto = {
            id: entradas[idEntrada].id,
            titulo: entradas[idEntrada].titulo,
            precio: entradas[idEntrada].precio * parseInt(inputCantidad.value),
            cantidad: parseInt(inputCantidad.value)
        };

        //metemos el objeto producto dentro del array
        carrito.push(producto);

        addCarrito();
    } else {
        document.getElementById("error-compra").innerText = "Error en la selección";
    }

}

function addCarrito() {
    //crea un div .entrada dentro de un div del dom
    var carritoEntradas = document.getElementById("carrito");
    var productoEntrada = document.createElement("DIV");
    productoEntrada.className = "entrada";
    carritoEntradas.appendChild(productoEntrada);

    //creamos un boton para borrar la entrada del carrito
    var botonCerrar = document.createElement("BUTTON");
    botonCerrar.type = "button";
    botonCerrar.className = "btn-close boton-cerrar";
    botonCerrar.ariaLabel = "Close";
    var att = document.createAttribute("onclick");
    //por un lado borra el elemento del dom, y despues
    //borrar el elemento del array carrito
    att.value = "this.parentElement.remove(); borrarProducto();";
    botonCerrar.setAttributeNode(att);

    productoEntrada.appendChild(botonCerrar);

    //titulo del producto
    var tituloProducto = document.createElement("H3");
    tituloProducto.innerText = carrito[carrito.length-1].titulo;
    productoEntrada.appendChild(tituloProducto);

    //identificador del producto
    var idProducto = document.createElement("P");
    idProducto.className = "datos-entrada";
    idProducto.innerText = carrito[carrito.length-1].id;
    productoEntrada.appendChild(idProducto);

    //Cantidad del producto a comprar
    var cantidadProducto = document.createElement("P");
    cantidadProducto.className = "cantidadEntrada";
    cantidadProducto.innerText = carrito[carrito.length-1].cantidad;
    productoEntrada.appendChild(cantidadProducto);
    
    //precio del producto
    var precioProducto = document.createElement("P");
    precioProducto.className = "precio-carrito";
    precioProducto.innerText = carrito[carrito.length-1].precio;
    productoEntrada.appendChild(precioProducto);
}

function borrarProducto() {
    /*borrar el producto del array*/
}