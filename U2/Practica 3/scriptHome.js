"use strict"
var p = new Surtido(productos);
//var micompra = [productos[0], productos[3]];
p.dibujarSurtido();

function recarga(){
  window.location.reload();
}

function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}

function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}

function verVegano() {
  p.dibujarSurtido(p.filtrarVegano());
}

function condCompraOnline (){
 var myWindow = window.open("","", "width=600,height=300");
 myWindow.document.write("<title>Condiciones</title>"+"Estas son las condiciones de la compra"+"<br/><br/><button onclick='window.close()'>Cerrar</button>");
}

function navegarCarrito(){
  location.assign("carrito.html");
  p.mostrarComprar();
}
