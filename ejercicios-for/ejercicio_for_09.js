// Utiliza un ciclo for para generar la siguiente secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar cada término y la suma total de la secuencia.

let termino = 2;
let suma = 0;

console.log("Secuencia:");
for (let i = 0; i < 10; i++) {
  console.log(termino);
  suma += termino;
  termino *= 2;
}

console.log("Suma total:", suma);
