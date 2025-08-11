// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios y mayúsculas
function esPalindromo(frase) {
  // Eliminar espacios y convertir a minúsculas
  let limpia = "";
  for (let i = 0; i < frase.length; i++) {
    let c = frase[i].toLowerCase();
    if (c !== " ") {
      limpia += c;
    }
  }

  // Verificar si es palíndromo
  let esPal = true;
  for (let i = 0; i < Math.floor(limpia.length / 2); i++) {
    if (limpia[i] !== limpia[limpia.length - 1 - i]) {
      esPal = false;
      break;
    }
  }
  return esPal;
}

// Ejemplo
let frase = "Anita lava la tina";
if (esPalindromo(frase)) {
  console.log(`\"${frase}\" es un palíndromo.`);
} else {
  console.log(`\"${frase}\" no es un palíndromo.`);
}
