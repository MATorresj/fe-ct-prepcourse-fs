function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let newArray = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    let firstLetter = arrayOfStrings[i][0].toLowerCase();
    if (firstLetter === 'a') {
      newArray.push(arrayOfStrings[i]);
    }
  }

  return newArray;
}

module.exports = filter;
