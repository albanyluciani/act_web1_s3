// Implementa un programa que use un ciclo while para contar cuántos dígitos tiene un número entero positivo. Por ejemplo, 12345 tiene 5 dígitos.
let numero = 12345;
let digitos = 0;
let n = numero;
if (n === 0) {
  digitos = 1;
} else {
  while (n > 0) {
    digitos++;
    n = Math.floor(n / 10);
  }
}
console.log(`El número ${numero} tiene ${digitos} dígitos.`);
