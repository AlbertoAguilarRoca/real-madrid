<?php include 'header.php';?>

<!-- imagen de cabecera -->
<body onload="guardado()">
<div class="container">
    <div class="slide-login">
        <img src="img/estadio-bernabeu.jpg">
        <h1 class="titulo-login">Historia que tu has hecho</h1>
    </div>

    <!--Lista De Jugadores-->
    <div class="jugadores">
        <h2>Mi lista de jugadores favoritos</h2>    
        <p>Escribe el nombre de los jugadores, uno por uno, que quieras añadir a tu lista.</p>
        <input id="jugadorForm" type="text" placeholder="Marcos Asensio" class="inputjugador">
        <button class="delete-boton" onclick="borrarJugador()">Eliminar</button>
        <button class="add-boton" onclick="addJugador()">Añadir</button> 
        <h3 class="subtitulo-lista">Mi lista:</h3>
        <p id="jugadoresFav"></p>
    </div>
    <!-- Nuevo formulariod e lista entradas -->
<div>
    <h3>Entradas:</h3>
   <p>Fecha del partido. <input type="date" id="fecha" required></p>
   <p>Hora del partido. <input type="time" id="hora" required></p>
   <p>Titulo del partido.<input type="text" id="titulo" required></p>
   <p>Lugar del partido. <input type="text" id="lugar"required></p>
   <p>Precio entradas. <input type="number" id="precio" required></p>
   <p>Numero de entradas disponibles <input type="number" id="num" min = "1" max="10" required ></p>

<p><input type="submit" value="Pulse para mostrar" onclick="mostrarEntradas()"></p>
<p><input type="submit" value="Agregue el partido al array" onclick="agregarPartido()"></p>
<p><input type="number" id="borrar" placeholder="Numero id a borrar"><input type="submit" value="Pulse para borrar el partido seleccionado" onclick="borrarPartido()"></p>

<div id="partidos" class="partidos-disponibles">
                        <!-- aqui se crean las entradas -->
 </div>
   

</div>

 <!-- fin de container -->


<!-- End de la web -->

<script src="js/lista-jugadores.js"></script>
</body>
<?php include 'footer.php';?>