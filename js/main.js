function openNav() {
    document.getElementById("menu-colapse").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("menu-colapse").style.width = "0";
  }

  function openSearch() {
    $( "#search-icon" ).click(function() {
      $( "#buscador-form" ).toggle();
    });
  }