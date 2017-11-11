document.getElementById("btn").onclick = function(e){
  e.preventDefault();
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var respuesta = this.responseText;
      alert(respuesta);
   }
 };
 var formulario = document.getElementById("formulario");
 request.open("GET", `login.php?usuario=${formulario.usuario.value}&password=${formulario.password.value}`, true);
 request.send();
};
