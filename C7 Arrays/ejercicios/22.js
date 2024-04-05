function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let producto = 0;
  let tabla = []
  
  for (var i = 0; i < 11; i++) {
    producto = 6 * i;
    tabla.push(producto);
  }
  return tabla;
}

module.exports = tablaDelSeis;
