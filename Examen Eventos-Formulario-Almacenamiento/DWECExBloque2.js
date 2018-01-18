onload = function(){

  var mia = document.getElementsByTagName('a')[0];
  mia.addEventListener("click",function(e){
    var schedule = document.getElementsByClassName('explicaHorario')[0];
    schedule.style.display = "block";
    e.preventDefault();
  });

  selector.addEventListener('click', function(){
      var imagen = document.getElementsByTagName('img')[0];
    if (selector.value == 0) {
      imagen.src = "salareuniones.png";
    }else if (selector.value == 'proyector') {
      imagen.src = "salaproyector.png";
      localStorage.imagen = imagen.src;
    }else if (selector.value == "videoconferencia") {
      imagen.src = "salavideoconferencia.png";
      localStorage.imagen = imagen.src;
    }else if (selector.value == "ordenadores") {
      imagen.src = "salaordenadores.png";
      localStorage.imagen = imagen.src;
    }
  });

  var formulario = document.forms[0];

  function ponFoco(e){
    e.target.style.outline = "purple solid 1px";
  }

  function quitaFoco(e){
    e.target.style.outline = "none";
  }

  var inputs = document.querySelectorAll("input");
  for(var i = 0; i<inputs.lenght-1; i++){
    inputs[i].addEventListener('focus',ponFoco);
    inputs[i].addEventListener('blur',quitaFoco);
  }

  formulario.onsubmit = function(e){
    var mistakes = document.getElementById('errores');
    var mistakesList = "";
    var check = true;
    e.preventDefault();

    //Email
    var email = document.getElementsByName("email")[0].value;
    if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{1,4})+$/.test(email)) ){
      mistakesList += "El email es incorrecto <br>";
      check = false;
    }else {
      localStorage.email = email;
    }
    //Departamento
    var dept = document.getElementsByName('depart')[0].value;
    if (!dept || !(/^\S+[\s?\S+]*$/.test(dept))) {
      mistakesList += "El departamento no es válido<br>";
      check = false;
    }
    //Asistentes
    var numAssistants = document.getElementsByName('asistentes')[0].value;
    if (!numAssistants || !(/^\d{1,2}$/.test(numAssistants))) {
      mistakesList += "El numero de asistentes no es válido<br>";
      check = false;
    }
    //Fecha
    var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    var year = fecha[0];
    var month = fecha[1];
    var day = fecha[2];
    var nd = new Date(year,(month-1),day);
    var today = new Date();
    if (isNaN(nd)|| day<1 || day>31 || month<1||month>12||year<0 || year >= today.getFullYear) {
      mistakesList += "La fecha introducida no es válida<br>";
      check=false;
    }else {
      localStorage.fecha = fecha;
    }

    //Hora
    var time = document.getElementsByName('hora')[0].value;
    var hora = new Date();
    if (!time|| !(/^\d{2}$/).test(time) || time <=hora.getHours()) {
      mistakesList += "La hora introducida no es válida, por favor introduzca una fecha futura<br>";
      check = false;
    }else {
      localStorage.time = time;
    }
    //condiciones
    if(!cond.checked){
      mistakesList += "Es necesario comprometerse a liberar la sala en caso de cancelacion o posponer la reunion<br>";
      check = false;
    }
    if (check){
      document.getElementById("enviar").value = "Enviando...";
      document.getElementById("enviar").disabled = true;
      formulario.submit();
       }else{
         mistakes.style.color= "red";
       }
       mistakes.innerHTML = mistakesList;
  }
}
