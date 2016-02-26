<?php

$mensaje = $_POST['mensaje'];
$mensaje.= "\n------------\n";
$mensaje.= "\nDe: ". $_POST['nombre'];
$mensaje.= "\nE-mail: ".$_POST['email'];

//Nuestro Correo

$destino = "elentrex@gmail.com";
$remitente = $_POST['email'];
$asunto = "Mensaje enviado por: ".$_POST['nombre'];
mail($destino, $asunto, $mensaje, "FROM: $remitente");

//Mensaje de Confirmacion

header ("location: index.php");
?>


