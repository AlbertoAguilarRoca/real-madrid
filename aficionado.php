<?php include 'header.php';?>

<!-- Aquí va el cuerpo de la web, después del <header> -->

<!--Titulo provisional -->
<div class="container">
<h1 class="titulo-aficionados">Club De Fans</h1>

<!-- imagen principal -->
    <div class="madrid-principal">
        <img src="img/aficionados.jpg">

        <div class="mensaje-caja">
            <h2>Comprueba que tan buen aficionado eres</h2>
            <label class="mensaje-caja-label" type="text">Nombre</label>
            <input type="text" placeholder="Ej: Emilio García" id="nombreAficionado">
            <label class="mensaje-caja-label" type="text">Introduce la fecha de comienzo en el club</label>
            <p><input type="date" id="fecha" max="<?php echo date('Y-m-d'); ?>"></p>

            <button class="boton-aficionado" onclick="bienvenidoAficionado()">Comprueba tu nivel</button>
            <p class="mensaje-aficionado" id="mensaje"></p>
            <p class="mensaje-aficionado" id="nivel-aficionado"></p>
              
        </div>
    </div>

    <!-- imagen carnet de socio-->
    <img src="img/Carnet_Madrid.png" class="carnetfans">
        </br>
        </br></br>
        </br>
    <p class="titulo-ventajas"> ¡Consigue ya tu carnet de socio! </p>
    </br>
    <p class="ventajas-carnet"> Obten muchas ventajas gracias a tu carnet:</p>

    <ol class="ventajas-carnet-lista">
        <li>-Numerosos descuentos en entradas y consumiciones.</li>
        <li>-Cuenta premium en nuestra página web.</li>
        <li>-Acumula puntos para obtener camisetas gratis y entradas.</li> 
    </ol>



    <img src="img/campo.png" class="foto-campo" align="right">
    <p class="titulo-partidos"> Siguientes Partidos </p> </br> </br>
    <p class="fecha-partidos"> Champions League - 28/9 21:00 - Fase de grupos - Shakhtar D. VS Real Madrid </br> </br> Liga
    Santander - 3/10 21:00 - RDC ESPANYOL vs Real Madrid
    </br> </br> Champions League - 19/10 16:15 - SHERIFF vs Real Madrid </p>

    <img src="img/camiseta-madrid.png" class="imagen-camiseta" align="right">
    <img src="img/camiseta-madrid2.png" class="imagen-camiseta2">



    <div class="prueba">
    </br>
    </br>
    </br>
    <p class="titulo-equipación"> Tercera Equipación </p>

    <label for="tallas" class="titulo-comprobador">Comprobador de tallas:</label>
    <select name="tallas" id="cars" class="comprobador-tallas">
        <option value="xl">XL</option>
        <option value="l">L</option>
        <option value="m">M</option>
        <option value="s">S</option>
    </select>
        <br><br>
    <input type="submit" value="Submit">
    </div>

</div><!-- end container -->
<!-- End de la web -->
<!-- Script -->
<script src="js/aficionado.js"></script>
<?php include 'footer.php';?>