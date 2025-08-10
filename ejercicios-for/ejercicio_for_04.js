//Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. Debe indicar cuántos números primos se encontraron.

let primos = [];

for (let num = 2; num <= 100; num++) {
  let esPrimo = true;
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    primos.push(num);
  }
}

console.log("Números primos entre 1 y 100:", primos.join(", "));
console.log("Cantidad de números primos encontrados:", primos.length);
