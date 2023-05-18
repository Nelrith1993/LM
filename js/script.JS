var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Aquí puedes acceder al contenido XML
    var xmlContent = this.responseText;
    // Continúa con el procesamiento del XML
    procesarXML(xmlContent);
  }
};
xhttp.open("GET", "../xml/proyecto.xml", true);
xhttp.send();

function procesarXML(xmlContent) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
  
    // Accede a los elementos XML y extrae la información necesaria
    var elementos = xmlDoc.getElementsByTagName("album");
    for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      // Accede a los atributos y contenido del elemento
      var atributo = elemento.getAttribute("titulo");
      var contenido = elemento.textContent;
      var atributo = elemento.getAttribute("numCanciones");
      var contenido = elemento.textContent;
      var atributo = elemento.getAttribute("duracion");
      var contenido = elemento.textContent;
      var atributo = elemento.getAttribute("descripcion");
      var contenido = elemento.textContent;
      // Haz algo con los atributos y contenido
      console.log("Atributo:", atributo);
      console.log("Contenido:", contenido);
    }
  }
  