// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

function factorial(n) {
  let resultado = 1;
  let contador = n;
  while (contador > 1) {
    resultado *= contador;
    contador--;
  }
  return resultado;
}

let numero = 4;
console.log(`El factorial de ${numero} es:`, factorial(numero));
