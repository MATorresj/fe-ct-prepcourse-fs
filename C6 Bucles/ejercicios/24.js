function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let textoInvertido = '';
  let i = texto.length - 1;
  while (i >= 0) {
    textoInvertido += texto[i];
    i--;
  }
  return textoInvertido;
}

module.exports = invertirTexto;
