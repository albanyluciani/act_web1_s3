// Utiliza un ciclo while para generar los primeros 15 números de la secuencia de Fibonacci. Muestra cada número de la secuencia.
let a = 0,
  b = 1,
  contador = 0;
while (contador < 15) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  contador++;
}
