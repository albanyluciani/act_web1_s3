/* Crea un programa que use un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. Muestra cada número generado y al final indica cuántos números se generaron*/

let contador = 0;
let numero = 0;

while (numero <= 95) {
  numero = Math.floor(Math.random() * 100) + 1;
  console.log("Número generado:", numero);
  contador++;
}

console.log("Total de números generados:", contador);
