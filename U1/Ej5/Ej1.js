"use strict"
function generaSurtido(){
  var articulos=['periodicos','revistas','caramelos','chicles','chuches','refrescos','fasciculos','tazos'];
  return articulos;
}

function consultaPrecios(i){
  var precios=[1.50,1.20,0.10,0.05,0.005,1.20,3.99,1.5];
  return precios + "€";
  }

function mostrarSurtidoPrecio(surtido){
  document.write("<table><tr>");
  for (var i = 0; i < surtido.length; i++) {
    document.write('<td><img onclick="mostrarPrecios()" width="80px" height="80px" src="' + surtido[i] + '.png" alt="' + surtido[i] + '"></td>');
    }
    document.write("</tr></table>");
  }
  function mostrarPrecios(){
   var precios=[1.50,1.20,0.10,0.05,0.05,1.20,3.99,1.5];
   document.write("<table style='width=80px height=80px align=center'><tr>");
   for (var i = 0; i < precios.length; i++) {
   document.write("<td width='80px' height='80px'><h2>" + precios[i]+"€ \t" + "</h2></td>");
   }
    document.write("</tr></table>");
  }
