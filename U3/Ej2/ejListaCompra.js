function borrarElemento(){
  var del = document.querySelector("p:hover");
  del.parentNode.removeChild(del);
}
function anadirElemento() {
  var txt = document.getElementsByName("text")[0];
  var type = document.getElementById("selector");
  var miP = document.createElement("p");
  var textoCaja = document.createTextNode(txt.value);
  if (txt.value && type.value != 0) {
    miP.appendChild(textoCaja);
    document.body.appendChild(miP);
    miP.style.color = selector.value;
    miP.setAttribute("onclick","borrarElemento()");
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
