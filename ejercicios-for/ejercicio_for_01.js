//Usa un ciclo for anidado para crear las tablas de multiplicar del 1 al 10. Cada tabla debe mostrarse claramente separada y formateada.
for (let numero1 = 1; numero1 <= 10; numero1++) {
  for (let numero2 = 1; numero2 <= 10; numero2++) {
    console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
  }
  console.log("---");
}
