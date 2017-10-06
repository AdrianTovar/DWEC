
function generaSurtido(){
  var articulos=['periodicos','revistas','caramelos','chicles','chuches','refrescos','fasciculos','tazos'];
  return articulos;
}

function consultaPrecios(i){
  var precios=[1.50,1.20,0.10,0.05,0.005,1.20,3.99,1.5];
  return precios[i] + "€";
  }

function mostrarSurtidoPrecio(surtido,precios){

        document.write("<table cellspacing = 0px;> <tr> ");
        for(var i = 0; i< precios.length;i++){
          if(precios[i] > 0){
              // <img src="revistas.png" alt="revistas">
            document.write("<td ><img width='100px' height='100px' src='" + surtido[i] + ".jpg' alt='" + surtido[i] + "'>   </td>");
          }
        }
        document.write("</tr><tr> ");
        for(var i = 0; i< precios.length;i++){
          if(precios[i] > 0){

            document.write("<td> " + precios[i] + " €</td>");
          }
        }
        document.write("</tr></table>");



      }



      function mostrarTodo(){
        var j = generarSurtido();
        var precios = [1,0.75,0.20,3,0.50,1.20,0.90,2,20,1,5];
        mostrarSurtidoPrecio(j,precios);
      }

      function mostrar(){
        var j = generarSurtido();
        var precios = [1,0.75,0.20,3,0.50,1.20,0.90,2,20,1,5];
        document.write("<table cellspacing = 0px;> <tr> ");
        for(var i = 0; i< precios.length;i++){
          if(precios[i] > 0){
              // <img src="revistas.png" alt="revistas">
            console.log(document.write("<td><img width='100px' height='100px' src='" + j[i] + ".jpg' alt='" + j[i] + "' onclick='mostrarTodo()'>   </td>"));
          }
        }
          document.write("</tr></table>");
          document.write("<button onclick='mostrarTodo()'> Ver precios</button>");
      }
