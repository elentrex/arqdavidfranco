<section class="col-md-4 col-md-offset-1"><br><br>
  <img class="img-responsive img-thumbnail" src="img/Contactame.jpg">
</section>

<section class="col-md-7">
  <p class="lead">Contact me</p><br><br>
  
   <form action="accion.php" method="post" id="validationform" role="form">
      <div class="form-group col-md-4"><!--NOMBRE-->
      <input type="text" class="form-control" id="Inputnombre" name="name" placeholder="Name" required/>
    </div>
      
      <div class="clearfix"></div>

      <div class="form-group col-md-5"><!--EMAIL-->
      <input type="text" class="form-control" id="Inputemail" name="email" placeholder="Email" required/>
    </div>

      <div class="clearfix"></div>

      <div class="form-group col-md-8"><!--MENSAJE-->
      <textarea class="form-control" id="Txtmensaje" name="message" rows="6" placeholder="Message"></textarea>
    </div>
      
      <div class="clearfix"></div>

      <div class="form-group col-md-4">
        <button type="submit" name="enviar" id="enviar" class="btn btn-default btn-block btn-danger" >SUBMIT</button>
        <div class="sr-only" id="envio">
          <div class="alert alert-success" role="alert">Successful!!!</div>
        </div>
    </div>
  </form>

</section>

<div class="clearfix"></div>
