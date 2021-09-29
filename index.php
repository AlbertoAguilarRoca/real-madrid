<?php include 'header.php';?>

<!-- Aquí va el cuerpo de la web, después del <header> -->

<div class="container">
    <div class="noticia-principal">
        <div class="noticia-block">
            <p class="noticia-texto">Noticia</p>
            <h1 class="titulo-home"><a href="#">Calendario de Octubre</a></h1>
        </div>
        <img src="img/real-madrid-equipo.jpg">                
    </div>

    <!--Partido-->
    <div class="partido">
        <div class="row">

            <h2 class="partido-titulo">Champions League en directo</h2>

            <div id="logo_partido1" class="col-6">
                <div>
                    <img src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png">
                </div>
            </div>

            <div id="logo_partido2" class="col-6">
                <div>
                    <img
                        src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/champions/sherifftiraspol_mediano.png">
                </div>
            </div>
        </div><!--end row -->
        <p>Partido dia 1 de Octubre a las 21:00 en TV Movistar.</p>
    </div>
    
    <!--Sorteo-->
        <div class="row py-3">
            <div class="col-3 order-2">
                <div>
                    <h3>Participa en nuestro sorteo</h3>
                    <p >¿Quieres ganar una camiseta oficial firmada por tus jugadores favoritos?
                        Haz click en el botón y prueba suerte ¡Es muy fácil!
                    </p>
                        <div class="camiseta"><img src="img/camiseta.jpg"></div>
                        <button class="boton-sorteo"><a href="Sorteo.php">Sorteo</a></button>
                </div>

                <div class="publi">
                    <a href="https://www.cocacola.es/" target="_blank">
                        <img src="https://s1.eestatic.com/2019/01/09/actualidad/actualidad_367224507_111923429_1706x960.jpg">
                    </a>
                </div>
            </div>
            <!--Noticias-->
            <div class="col" id="main">
                <div class="noticia-contenedor">
                    <img src="https://www.realmadrid.com/img/horizontal_940px/_avc3271__20210927053023.jpg">
                    <h2 class="titulo-noticia">Ancelotti: “Los pequeños detalles nos han costado el partido”</h2>
                    <p>“El equipo ha cumplido, ha jugado con mucha intensidad y compromiso”, añadió el entrenador.</p>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="noticia-contenedor">
                            <img src="https://www.realmadrid.com/img/horizontal_940px/_he16215__20210928115027.jpg">
                            <h2 class="titulo-noticia">Casemiro: “En este club la exigencia es ganar siempre"</h2>
                            <p>“Hicimos grandes jugadas, pero a veces el gol no entra”, dijo Valverde."</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="noticia-contenedor">
                            <img src="https://www.realmadrid.com/img/horizontal_940px/home-y-entreno-comscore-h_20210906010024.jpg ">
                            <h2 class="titulo-noticia">Realmadrid.com, la web de clubes de fútbol más visitada del mundo por quinto año consecutivo</h2> 
                            <p>Cerró la temporada pasada con un promedio mensual de 1.516.000 usuarios únicos según Comscore, medidor oficial de audiencias en Internet.
                            </p>
                        </div>
                    </div>
                </div> <!-- final row noticias -->

            </div>
            <br>

        </div>
    </div><!-- final row noticias global -->




</div>
<!--CONTAINER FINAL-->

<!-- End de la web -->

<?php include 'footer.php';?>