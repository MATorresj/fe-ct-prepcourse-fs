const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let totalProp = 0
  for (let prop in objeto) {
    if (objeto.hasOwnProperty(prop)) {
      totalProp++;
    }
 }
 return totalProp;
};

module.exports = contarPropiedades;
