// Dado un array de nombres, usa un ciclo while para buscar un nombre específico. El programa debe mostrar en qué posición se encontró el nombre o indicar si no existe.
let nombres = ["Ana", "Luis", "Pedro", "Maria", "Sofia"];
let nombreBuscado = "Pedro";
let i = 0;
let encontrado = false;
while (i < nombres.length) {
  if (nombres[i] === nombreBuscado) {
    encontrado = true;
    break;
  }
  i++;
}
if (encontrado) {
  console.log(`El nombre '${nombreBuscado}' se encontró en la posición ${i}.`);
} else {
  console.log(`El nombre '${nombreBuscado}' no existe en el array.`);
}
