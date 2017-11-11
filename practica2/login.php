<?php

$usuario = $_GET['usuario'];
$password = $_GET["password"];

if($usuario == "admin" && $password == "admin"){
  echo "Sesión Iniciada con éxito";
}else{
  echo "Credenciales incorrectas";
}

?>
