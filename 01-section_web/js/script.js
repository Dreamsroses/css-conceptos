$(document).ready(function () {
    
    $(".dropdown-trigger").dropdown();

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});
  // Modal foto

    $('.materialboxed').materialbox();

    // parallax

    $('.parallax').parallax();

    // Sidenav
    $('.sidenav').sidenav();

// carrusel
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
        
});