function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  let resultado = num;
  let arr = []
  for (var i = 1; i <= 10; i++) {
    resultado += 2;
    arr.push(resultado);
    if (resultado === i) {
      break;
    }
  } 
   if (arr.length < 10){
    return "Se interrumpió la ejecución"
   } else {
    return arr;
   }
  }

module.exports = breakStatement;
