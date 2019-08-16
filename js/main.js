(function(){
 //Variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");
 //Funciones
   //Agrega tarea desde el input.text
    var agregarTarea = function(){
      var tarea = tareaInput.value;
      var nuevaTarea = document.createElement("li");
      var enlace = document.createElement("a");
      var contenido = document.createTextNode(tarea);
         //Si el Input.text esta vacio, se crea el atributo "error" <= (Ver CSS)
         if (tarea === "") {
            tareaInput.setAttribute("placeholder", "No puedes 'escribir' una tarea vacia");
            tareaInput.className = "error"
            return false;
         }
         //Agrega el Input a la lista de tareas
         enlace.appendChild(contenido);
         //Le da el atributo de <a> para que sea alcanzado por el text-decoration (CSS)
         enlace.setAttribute("href", "#");
         //Agregamos el enlace en la <li>
         nuevaTarea.appendChild(enlace);
         //Agregamos el enlace en la lista de tareas
         lista.appendChild(nuevaTarea);
         //Limpra el input.text
         tareaInput.value = "";
         //
         for (i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function(){
               this.parentNode.removeChild(this);
            });
         }
    }

    var comprobarInput = function () {
     tareaInput.className;
     tareaInput.setAttribute("placeholder", "Escribe tu tarea");
      
   }

    var eliminarTarea = function(){
      this.parentNode.removeChild(this);
      
    }
 //Eventos
    //Agregar tarea a la lista
    btnNuevaTarea.addEventListener("click", agregarTarea);
    //Comprobar tarea (faltan validaciones)
    tareaInput.addEventListener("click", comprobarInput);
    //Borra elementos de la ista
  for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
}());


