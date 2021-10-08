<?php include 'header.php';?>

<!-- imagen de cabecera -->

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

</div> <!-- fin de container -->


<!-- End de la web -->

<script src="js/lista-jugadores.js"></script>

<?php include 'footer.php';?>