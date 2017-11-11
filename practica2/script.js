document.getElementById("btn").onclick = function(e){
  e.preventDefault();
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var respuesta = this.responseText;
      console.log(respuesta);
      // fpi_ues@protonmail.com       asunto practica_2

   }
 };
 request.open("GET", "login.php", true);
 request.send();
};
