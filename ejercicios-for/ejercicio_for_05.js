//Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. Muestra tanto la cadena original como la invertida.

let original = "Hello World";
let invertida = "";

for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];
}

console.log("Cadena original:", original);
console.log("Cadena invertida:", invertida);
