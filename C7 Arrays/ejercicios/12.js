function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(function(elemento) {
    if (typeof elemento === "string") { // Verifica si el elemento es un string
      return elemento.toUpperCase(); // Convierte el string a mayúsculas
    } else {
      return elemento; // Devuelve el elemento sin modificar si no es un string
    }
  });
}

module.exports = convertirStringAMayusculas;
