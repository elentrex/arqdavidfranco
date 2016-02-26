function cargaSendMail(){
  $("#enviar").attr("disable", true);
  $(".c_error").remove();
 
    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#Inputemail').val();
    var s_name = $('#Inputnombre').val();    
    var s_msg = $('#Txtmensaje').val();
 
    if (filter.test(s_email)){
    sendMail = "true";
    } else{
    $('#Inputemail').after("<span class='alert alert-danger' id='c_error_mail'>Ingrese e-mail valido.</span>");
    //aplicamos color de borde si el se encontro algun error en el envio
    //$('#contactform').css("border-color","#e74c3c");   
    sendMail = "false";
    }
    if (s_name.length == 0 ){
    $('#Inputnombre').after( "<span class='alert alert-danger' id='c_error_name'>Ingrese su nombre.</span>" );
    var sendMail = "false";
    }
    if (s_msg.length == 0 ){
    $('#Txtmensaje').after( "<span class='alert alert-danger' id='c_error_msg'>Ingrese mensaje.</span>" );
    var sendMail = "false";
    }
 
    if(sendMail == "true"){
     
     var datos = {
 
             "nombre" : $('#Inputnombre').val(),
 
             "email" : $('#Inputemail').val(),
 
             "mensaje" : $('#Txtmensaje').val()
 
     };
 
     $.ajax({
 
             data:  datos,
             // hacemos referencia al archivo contacto.php
             url:   'accion.php',
 
             type:  'post',
 
             beforeSend: function () {
             //aplicamos color de borde si el envio es exitoso
                    //$('#contactform').css("border-color","#25A25A");
 
                    $("#enviar").val("Enviando...");
 
             },
 
             success:  function (response) {
 
                    $('form')[0].reset(); 
                    $("#enviar").val("Enviar");
                    $("#envio").removeClass("sr_only");         
 
             }
 
     });
 
} else{
    $("#enviar").removeClass("sr_only");
}
 
}
