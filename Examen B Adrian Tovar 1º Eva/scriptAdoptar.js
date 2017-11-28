var adopt1 = Math.floor(Math.random()*(lista.length));
var f = lista[adopt1].foto;
var nom = lista[adopt1].nombre;

var img = document.createElement("img");
img.src = f;
img.setAttribute("width","320");
document.body.appendChild(img);
 var p = document.createElement("p");
 var text = document.createTextNode(nom);
 p.appendChild(text);
 document.body.appendChild(p);
 p.style.fontWeight= "bold";

 function cansino(){
   var h = confirm("Esta pagina dice:\n sentimos que estes indeciso¿Sigues interesado?");
   if(h){
     window.close();
   }else {
     locatio.assign("home.html");
   }
 }

window.setInterval(cansino,15000);

function adoptar(){
  if(isEmpty(document.getElementsByTagName('input'))){
    location.assign("Gracias.html");
  }
}







 // var v = window.open("","","toolbar=yes");
 // v.document.write("<html><head><title>Sin titulo</title></head><body><h1>Esta pagina dice:</h1><br><p>Sentimos que estes indeciso¿Sigues interesado?</p><input type='button'value='Cancelar' onclick='location.assign('home.html')'><input type='button' value='Aceptar' onclick='window.close()'></body></html>");
