/*Creamos un array de jugadores vacio*/
const jugadores = [];
var parrafoJugadores = document.getElementById("jugadoresFav");
var formValor =  document.getElementById("jugadorForm");

//Si la lista está vacia, lo mostramos en mensaje
listaVacia();

//Funcion para añadir jugadores a la lista
function addJugador(){
  //Recogemos el valor del input
  var jugador = formValor.value;
  //Añadimos el jugador introducido al array
  jugadores.push(jugador);
  //Mostramos el jugador en el parrafo
  mostrarListaJugadores();
}

//funcion para borrar jugadores
function borrarJugador(){
  var jugadorEncontrado = false;
  //Recorremos el array con un for
  for(var i=0; i<jugadores.length; i++) {
    if (jugadores[i] == formValor.value) {
      //Borramos el jugador en la posición encontrada
      jugadores.splice(i,1);
      //Mostramos la nueva lista de jugadores
      mostrarListaJugadores();
      //Cambiamos la variable a true
      jugadorEncontrado = true;
    }
  }//END for

  //Si no encuentra el jugador, muestra un mensaje de alerta
  if(!jugadorEncontrado) {
    alert("Jugador no encontrado en tu lista");
  }

  listaVacia();
  
}

//Funcion para mostrar la lista de jugadores
function mostrarListaJugadores() {
  parrafoJugadores.innerText = jugadores.join(", ");
}

//Funcion para mostrar si la lista esta vacia
function listaVacia() {
  if(jugadores.length==0) {
    //Si la lista esta vacia lo mostramos
    parrafoJugadores.innerText = "Tu lista está vacía.";
  }
}

