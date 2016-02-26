$(document).ready(init);

function init(){
  $velocidad = 500;
  $margen = 30;
  
  $("article").mouseenter(function(e){
    var ancho = $(this).width();
    var alto = $(this).height();
    
    $tapa = $(this).find(".tapa");
    
    $tapa.css("margin-top", "215px");
    $tapa.css("margin-left", "-"+ancho+"px");
    $tapa.animate({
      'margin-left':'0'},
      $velocidad,
      'swing');
    $tapa.css("visibility", "visible");
  });
  
  $("article").mouseleave(function(e){
    var ancho = $(this).width();
    var alto = $(this).height();
    
    $tapa = $(this).find(".tapa");
    
    $tapa.animate({
      'margin-left':"-"+1000+"px"},
      $velocidad);
  });
}