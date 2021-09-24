function openNav() {
    document.getElementById("menu-colapse").style.width = "250px";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("menu-colapse").style.width = "0";
    document.getElementById("menu-icon").style.display = "initial";
    document.getElementById("main").style.marginLeft = "0";
  }