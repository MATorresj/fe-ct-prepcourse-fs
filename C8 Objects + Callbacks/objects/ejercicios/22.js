function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let arr1 = str1.toLowerCase().split('');
   let arr2 = str2.toLowerCase().split('');
   let anagrama1 = arr1.sort().join('');
   let anagrama2 = arr2.sort().join('');

  return anagrama1 === anagrama2;

}

module.exports = esAnagrama;
