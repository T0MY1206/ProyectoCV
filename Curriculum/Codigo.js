function crearElemento()
{
    var contenedor = document.getElementById("contenedor");
    var elemento = document.createElement("input");
    var msj = document.createTextNode("Hola!¿Qué tal?");
    contenedor.appendChild(msj);
    contenedor.appendChild(elemento);
}