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
    <!-- Nuevo formulario e lista entradas -->
<div>
    <h3>Crear / Borrar entradas</h3>
    <p>Selecciona la entrada y bórrala</p>
                    
    <select id="selectorEntradas" class="selectEntradas">

    </select>

    <button class="boton-aficionado" onclick="borrarPartido()">Borrar entrada</button>

    <h3>A través del siguiente formulario podrá generar nuevas entradas.</h3>

   <label class="labelEntradas">Fecha del partido</label>
   <input type="date" id="fecha" required>

   <label class="labelEntradas">Hora del partido</label>
    <input type="time" id="hora" required>

   <label class="labelEntradas">Titulo del partido</label>
   <input type="text" id="titulo" required>

   <label class="labelEntradas">Lugar del partido</label>
   <input type="text" id="lugar"required>

   <label class="labelEntradas">Precio de la entrada</label>
   <input type="number" id="precio" required>

   <label class="labelEntradas">Total de entradas disponibles</label>
   <input type="number" id="num" min = "1" max="10" required>

   <label class="labelEntradas">Identificador</label>
   <input type="text" id="identificador"required>

    <div class="subirEntrada">
        <button  class="boton-aficionado" onclick="agregarPartido()">Agregar entrada</button>
    </div>

    <div id="entradas-disponibles" class="entradas-producto">
        <!-- aqui se crean las entradas -->
    </div>
   

</div>

 <!-- fin de container -->


<!-- End de la web -->

<script src="js/lista-jugadores.js"></script>
<?php include 'footer.php';?>