// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

// Elaboración del array de 20 números aleatorios entre 1 y 100
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];
  if (num > mayor) mayor = num;
  if (num < menor) menor = num;
  suma += num;
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

let promedio = suma / numeros.length;

console.log("Números:", numeros);
console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Cantidad de pares:", pares);
console.log("Cantidad de impares:", impares);
