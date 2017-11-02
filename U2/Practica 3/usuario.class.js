var compra = [
  {
    nombre: 'Ruben' ,
    descripcion: 'Metalero de pega, rolero pesadumbresco, piel blancuzca con adamtium reforzado',
    foto:'https://i.pinimg.com/564x/8d/e7/e1/8de7e1f28c2db5f0171662c294accc60.jpg',
    precio: 1,
    vegano: false
  },
  {
    nombre: 'Juan' ,
    descripcion: 'El Pupas Flash, mister esto me toca de cerca yo hablo, novio de Mari',
    foto:'http://falsocroma.es/wp-content/uploads/2015/10/40869.jpg',
    precio: 2,
    vegano: true
  },
  {
    nombre: 'Pedro' ,
    descripcion: 'Señor de las Gangas, conocido en el submundo como el Terror de los Precios',
    foto:'https://statics.memondo.com/p/s1/ccs/2013/08/CC_2143937_28cd3d0995504e049fd9ab7963c887b4_rick_harrison_necesitas_cambio_de_1_euro.jpg?cb=711273',
    precio: 1,
    vegan: false
  }
];
function Usuario(compra){
  this.id = Math.floor(Math.random() * 1000)+1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = compra;
  this.importe = 0;

  this.eliminarCompra = function(){
    if(this.compra.length > 0){
      this.compra.pop();

    }else{
      alert("No tienes compra.")
    }
  }
  this.calcularImporte = function(){
    if(this.compra.length > 0){
      var total = this.compra.reduce(function(suma,valor){
          return suma + valor.precio;
      },0);
      this.importe = total;
    }else{
      alert("No has escogido ningun producto para la compra.");
    }

  }
  this.mostrarComprar = function(produ){
    var str = "";
    if(produ == undefined){
      for(var i = 0; i< this.compra.length;i++){
        str += "<div>";
        str += "<img src='" + this.compra[i].foto + "' alt='";
        str += this.compra[i].nombre + "'>";
        str += "<p>Producto: " + this.compra[i].nombre + " </p>";
        str += "<p>Descripción: " + this.compra[i].descripcion + " </p>";
        str += "<p><b>Precio: " + this.compra[i].precio + " €</b></p>";
        str += "</div>";
      }
    }else{
      for(var i = 0; i < produ.length; i++){
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt='";
        str += produ[i].nombre + "'>";
        str += "<p>Producto: " + produ[i].nombre + " </p>";
        str += "<p>Descripción: " + produ[i].descripcion + " </p>";
        str += "<p><b>Precio: " + produ[i].precio + " €</b></p>";
        str += "</div>";
      }
    }
    str += "<hr>";
    str += "<b>Precio final = " + this.importe +"</b>";
    cuerpo.innerHTML=str;
  }
}
