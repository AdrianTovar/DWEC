var f = new Inventario();

f.dibujaAnimales(lista);
f.ordenarMayor(f);

function verPerros(f){
  f.soloPerros(f.dibujaAnimales(lista));
}

function recarga(){
  window.location.reload();
}

function condiciones(){
  var v = window.open("","","width=500 heigth=500");
  v.document.write("<h1>Condiciones de adopcion en Protectora Juan de Garay</h1>"+
  "<p>La adopcion de nuestra protectora e stotalmente desinteresada.Obtenemos ingresos a traves de donaciones anonimas con la colaboracion de voluntarios</p>"+
  "<input type='button' value='Cerrar condiciones' onclick='window.close()'>"+
  "<input type='button' value='Imprimir condiciones' onclick='window.print()'>");
}

function navegarAdoptar(){
  location.assign("adoptar.html");
}
