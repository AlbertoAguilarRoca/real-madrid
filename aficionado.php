<!doctype html>
<html lang="ES">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Real Madrid CF</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


        <!-- CSS bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- ALGUNOS ESTILOS BASE -->
        <link rel="stylesheet" href="css/main.css">
        <!-- NUESTRO CSS -->
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/sorteo.css">
        <link rel="stylesheet" href="css/login.css">
        <link rel="stylesheet" href="css/aficionado.css">

    </head>
    <body id="main" onload="mostrarEntradas()">
    <!-- CONDICIONAL PARA IE9 E INFERIORES -->
        <!--[if lte IE 9]>
            <p class="browserupgrade">Estás usando un navegador <strong>obsoleto</strong>. Por favor <a href="http://browsehappy.com/">actualiza tu navegador</a>
             para mejorar la experiencia de navegación.</p>
        <![endif]-->

        <!-- Header -->
        <div class="container">
        <header>
            <div class="cabecera">
                <div class="row cabecera-logo">
                    <div class="col">
                        <div class="logo">
                            <a href="index.php"><img src="img/real-madrid-c-f.svg"></a>
                        </div>
                    </div>
                    <div class="col">
                        <p class="logotipo"><a href="index.php">Real<span>madrid</span></a></p>
                    </div>
                </div><!--end row-->
                
                <div id="menu-icon" class="menu-burguer" onclick="openNav()">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="menu">
                    <nav>
                        <ul class="menu-nav">
                            <li class="menu-nav-element"><a href="index.php">Inicio</a></li>
                            <li class="menu-nav-element"><a href="#">Futbol</a></li>
                            <li class="menu-nav-element"><a href="#">Baloncesto</a></li>
                            <li class="menu-nav-element"><a href="#">El club</a></li>
                            <li class="menu-nav-element"><a href="aficionado.php">Aficionados</a></li>
                            <li class="menu-nav-element"><a href="#">Estadio</a></li>
                        </ul>
                    </nav>
                    <ul class="menu-right">
                            <li class="menu-rigth-element"><a href="#">Entradas</a></li>
                            <li class="menu-rigth-element"><a href="#">Área Vip</a></li>
                            <li class="menu-rigth-element"><a href="#">Madridistas</a></li>
                            <li class="menu-rigth-element"><a href="#">Tour</a></li>
                            <li class="menu-rigth-element"><a href="#">Tienda</a></li>
                    </ul>
                    <div class="buscador-icono">
                        <div id="search-icon" class="buscador-search">
                        <img src="img/search-solid.svg" onclick="openSearch()">
                        </div>
                        <div class="buscador-input" id="buscador-form">
                            <input type="text" placeholder="Buscar..." autofocus>
                        </div>
                    </div>
                    <ul class="menu-top">
                            <li class="menu-top-element"><a href="#">Palmarés</a></li>
                            <li class="menu-top-element"><a href="#">Fundación</a></li>
                            <li class="menu-top-element"><a href="#">RM Next</a></li>
                            <li class="menu-top-element"><a href="#">Regístrate</a></li>
                            <li class="menu-top-element"><a href="login.php">Login</a></li>
                    </ul>
                </div>
                
            </div><!--final div cabecera-->
        </header>
        </div><!-- end div container -->

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

    <!-- Compra de entradas -->
    <div class="entradas-bloque">
        <div class="row">

            <div class="col-lg-8">
                <div class="entradas-lista">
                    <h2>Entradas de los próximos partidos</h2>

                    <p>Selecciona tu entrada y cómprala ;)</p>
                    
                    <select id="selectorEntradas" class="selectEntradas">

                    </select>
                    <input id="cantidadEntradas" class="cantidad" type="number" min="1" value="1">
                    <input class="boton-aficionado" type="submit" 
                    value="Añadir al carrito" onclick="validacionCantidad()">

                    <p id="error-compra" style="color:red"></p>
                    <div id="entradas-disponibles" class="entradas-producto">
                        <!-- aqui se crean las entradas -->
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="carrito-entradas">
                    <h2>Tu carrito</h2>
                    <div class="entrada-carro" id="carrito">
                        <!-- aqui van las entradas del carrito -->
                    </div>
                    <div class="precioTotal">
                        <p id="precioCarrito"></p>
                    </div>
                    <div class="botonCompra">
                        <button class="boton-aficionado">Finalizar compra</button>
                    </div>
                </div>
            </div>

        </div><!-- end row -->
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
<script src="js/carrito-entradas.js"></script>
<script src="js/aficionado.js"></script>
<?php include 'footer.php';?>