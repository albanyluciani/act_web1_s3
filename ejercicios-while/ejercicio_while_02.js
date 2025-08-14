/* Utiliza un ciclo while para calcular la suma de todos los números pares entre 1 y 50. Muestra el resultado final y cuántos números pares se sumaron.*/

let suma = 0;
let contador = 0;
let num = 2;

while (num <= 50) {
  suma += num;
  contador++;
  num += 2;
}

console.log("Suma de los números pares entre 1 y 50:", suma);
console.log("Cantidad de números pares sumados:", contador);
