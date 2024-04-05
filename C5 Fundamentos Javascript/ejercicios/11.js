function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const hoy = new Date();
  const añoNacimiento = fechaNacimiento.getFullYear();
  const añoActual = hoy.getFullYear();
  const mesNacimiento = fechaNacimiento.getMonth();
  const mesActual = hoy.getMonth();
  const diaNacimiento = fechaNacimiento.getDate();
  const diaActual = hoy.getDate();

  let edad = añoActual - añoNacimiento;
  if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
    edad--;
  }

  return edad >= 18;
}

module.exports = esMayorDeEdad;