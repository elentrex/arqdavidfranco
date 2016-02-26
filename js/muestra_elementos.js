$(document).ready(function(e){
  muestra($("article"));
});

//indice del listado
var indiceShow = 0;

//listado jquery de elementos
var $elementos;

//funcion ejecutor del efecto
function muestra(_elementos){
  $elementos = _elementos;
  $elementos.css("opacity", 0);
  $elementos.css("visibility", "hidden");
  indiceShow = 0;
  showNext();
}

function showNext(){
  $elementos.eq(indiceShow)
  .css("visibility", "visible")
  .animate({
    opacity: 1,
  }, 500);
  
  indiceShow ++;

  setTimeout(showNext, 1000);
}

