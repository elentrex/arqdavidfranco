$(document).ready(function(e){
  muestra2($(".animacion"));
});

//indice del listado
var indiceShow2 = 0;

//listado jquery de elementos
var $elementos2;

//funcion ejecutor del efecto
function muestra2(_elementos){
  $elementos2 = _elementos;
  $elementos2.css("opacity", 0);
  $elementos2.css("visibility", "hidden");
  indiceShow2 = 0;
  showNext2();
}

function showNext2(){
  $elementos2.eq(indiceShow2)
  .css("visibility", "visible")
  .animate({
    opacity: 1,
  }, 500);
  
  indiceShow2 ++;

  setTimeout(showNext2, 3000);
}