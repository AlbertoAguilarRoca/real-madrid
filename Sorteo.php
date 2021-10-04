<?php include 'header.php';?>

    <!-- Aquí va el cuerpo de la web, después del <header> -->
    <div class="cuerpo-sorteo">
        <h1>Sorteo camiseta</h1>

        <p >Entra en el sorteo de una camiseta de tu equipo favorito firmada por todos los jugadores.</p>

        <div class="camiseta">
            <img src="img/camiseta.jpg">
        </div>
        <!-- input de sorteo -->
        <div class="formulario-sorteo">
            <input id="sorteo-input" class="formulario-sorteo-input" type="text" placeholder="Escribe un número del 1 al 10">
        </div>
        <button class="boton-sorteo suerte" onclick="sorteo()">Participa en el sorteo</button>
        <p id="resultado-sorteo"></p>
    </div>
    <!-- End de la web -->

<?php include 'footer.php';?>