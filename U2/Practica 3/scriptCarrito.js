if (navigator.coockieEnabled == false) {
  alert("Cookies inhabilitadas, por favor habilítelas en su configuración");
}else {
  alert("Cookies habilitadas");
}

var usuario1 = new Usuario(compra);
usuario1.calcularImporte();
usuario1.mostrarComprar();

function eliminar(){
  usuario1.eliminarCompra();
  usuario1.calcularImporte();
  usuario1.mostrarComprar();
}

function hacerPedido(){
  if (this.compra.length !== 0) {
    var c = confirm("Acepta las condiciones del pedido");
    if (c == true) {
      location.assign("pedidoOK.html");
    }else {
      location.assign("carrito.html");
    }
  }
}

function condCompraOnline (){
 var myWindow = window.open("","", "width=600,height=300");
 myWindow.document.write("<title>Condiciones</title>"+"Estas son las condiciones de la compra"+"<br/><br/><button onclick='window.close()'>Cerrar</button>");
}

function inicio(){
  location.assign("home.html");
}

function imprimir(){
  window.print();
}
