onload = function(){
  var email = localStorage.getItem('email');
  console.log('email = ' + email);
  var hora = localStorage.getItem('time');
  console.log('hora = ' + hora);
  var fecha = localStorage.getItem('fecha');
  console.log('fecha = ' + fecha);
  var imagen = localStorage.getItem('imagen');
  var img = imagen.split('/');
  var img2 = img[6].split('.');
  var imgFinal = img2[0];

  var message = document.getElementById('mensaje');
  message.innerHTML = "Gracias por reservar una sala en nuestra empresa"+
  "Los datos de la reserva son los siguientes<br>"+
  "Email -->"+email+"<br>"+"Fecha --> "+fecha+"<br>"+"Hora -->"+hora+"<br>"+"Tipo de sala -->"+imgFinal;
}
