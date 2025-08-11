// Desarrolla un programa que use un ciclo for para contar cuántas vocales (a, e, i, o, u) hay en una frase dada. Debe mostrar el conteo de cada vocal por separado.

let frase = "Así se contarán las vocales de una frase";
let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// Vocales con acento a su vocal sin acento
const mapaAcentos = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
};

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i].toLowerCase();
  if (mapaAcentos.hasOwnProperty(letra)) {
    letra = mapaAcentos[letra];
  }
  if (conteo.hasOwnProperty(letra)) {
    conteo[letra]++;
  }
}

console.log("Frase:", frase);
console.log("Conteo de vocales:");
for (let vocal in conteo) {
  console.log(`${vocal}: ${conteo[vocal]}`);
}
