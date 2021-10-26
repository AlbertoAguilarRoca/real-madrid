
const carrito = [];

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

        //variable booleana para comprobar si el producto ya esta en el carrito
        var estaProducto = false;
        var indiceProducto = carrito.findIndex(i => i.id === producto.id);

        if (indiceProducto >= 0) {
            //si encuentra el id dentro del carrito cambia a true
            estaProducto = true;
        }

        //si no esta el producto, lo mete dentro del array carrito
        if (!estaProducto) {
            //metemos el objeto producto dentro del array
            carrito.push(producto);

            addCarrito();
            calcularTotal();
        } else {
            document.getElementById("error-compra").innerText = "El producto ya está en el carrito";
        }

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

    //titulo del producto
    var tituloProducto = document.createElement("H3");
    tituloProducto.innerText = carrito[carrito.length-1].titulo;
    productoEntrada.appendChild(tituloProducto);

    //creamos un boton para borrar la entrada del carrito
    var botonCerrar = document.createElement("BUTTON");
    botonCerrar.type = "button";
    botonCerrar.className = "btn-close boton-cerrar";
    botonCerrar.ariaLabel = "Close";
    var att = document.createAttribute("onclick");
    //por un lado borra el elemento del dom, y despues
    //borrar el elemento del array carrito. añadimos un manejador .call
    att.value = "borrarProducto.call(this,event)";
    botonCerrar.setAttributeNode(att);

    productoEntrada.appendChild(botonCerrar);

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

//añadimos un handler para recoger el elemento que estoy clickando
function borrarProducto(event) {
    /*coge el elemento padre del boton (.entrada)*/ 
    var divPadre = this.parentElement; 
    //recoge el valor del id que quiero borrar
    var idPartido = divPadre.getElementsByTagName('p')[0].innerHTML;
    
    //buscamos el valor dentro del carrito y lo borramos del array

    for (var i = 0; i < carrito.length; i++) {
        if(carrito[i].id == idPartido){
            carrito.splice(i, 1);
        }
    }
    
    console.log("Tamaño del carrito: "+carrito.length);
    
    //borra el elemento html
    divPadre.remove();
    calcularTotal();
}

function calcularTotal() {
    var totalPrecio = 0;

    if(carrito.length > 0) {
        for (var i = 0; i < carrito.length; i++) {
            totalPrecio += carrito[i].precio;
        }

        document.getElementById("precioCarrito").innerText = "Total: "+totalPrecio+" €";
    } else {
        document.getElementById("precioCarrito").innerText = "";
    }

}