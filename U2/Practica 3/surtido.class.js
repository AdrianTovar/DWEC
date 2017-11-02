"use strict"
function Surtido(productos){
  this.productos = productos;
  this.ordenPrecioMas = function(){
    this.productos.sort(function (n1,n2){
      return n1.precio-n2.precio;
    });
  }
  this.ordenPrecioMenos = function(){
    this.productos.sort(function(n1,n2){
      return n2.precio-n1.precio;
    });
  }
  this.filtrarVegano = function(){
    //filter devuelve un array por eso lo metemos en una variable para que puedas mostrarlo por pantalla
    //al usar la f para guardar el resultado del filter con el return f
    var f = this.productos.filter(function(n){
      return (n.vegano == true);
    });
    return f;
  }
  this.dibujarSurtido = function(prod){
    cuerpo.innerHTML = "";
    var str = "";
    if (prod == undefined) {
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt= '";
        str += this.productos[i].nombre + "'>";
        str += "<p>Producto: " + this.productos[i].nombre + "</p>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "€</b></p>";
        str += "</div>";
      }
      cuerpo.innerHTML = str;
    }else {
      for (var i = 0; i < prod.length; i++) {
        str += "<div>";
        str += "<img src='" + prod[i].foto + "' alt= '";
        str += prod[i].nombre + "'>";
        str += "<p>Producto: " + prod[i].nombre + "</p>";
        str += "<p>" + prod[i].descripcion + "</p>";
        str += "<p><b>" + prod[i].precio + "€</b></p>";
        str += "</div>";
    }
  }
  cuerpo.innerHTML = str;
}
}
