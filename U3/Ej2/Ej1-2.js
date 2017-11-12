function borrarElemento(){
  var del = document.querySelector("p:hover");
  del.parentNode.removeChild(del);
}
function anadirElemento() {
  var texto = document.getElementsByName("text")[0];
  var tipo = document.getElementById("selectColor");
  var mip = document.createElement("p");
  var textoCaja = document.createTextNode(texto.value);
  if (texto.value && tipo.value != 0) {
    mip.appendChild(textoCaja);
    document.body.appendChild(mip);
    mip.style.color = selectColor.value;
    mip.setAttribute("onclick","borrarElemento()");
  }else{
    alert("No has introducido un producto o no has seleccionado una categoría");
  }
}
function borrarLista() {
  var del = document.body.getElementsByTagName("p");
  for (var i = del.length-1; i >= 0; i--) {
    del[i].parentNode.removeChild(del[i]);
  }

}
