function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let numerosVistos = {};

  for (let i = 0; i < numeros.length; i++) {
    if (numerosVistos[numeros[i]]) {
      return numeros[i];
    }
    numerosVistos[numeros[i]] = true;
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;