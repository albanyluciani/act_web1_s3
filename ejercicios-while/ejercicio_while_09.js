// Crea un juego que use un ciclo while donde el usuario debe adivinar un número entre 1 y 50. Proporciona pistas ("muy alto", "muy bajo", "cerca") y limita a 7 intentos máximo.

const numeroSecreto = 27; // Cambia este valor para probar
let intentos = 0;
let adivinado = false;
let guess = 0; // Cambia este valor manualmente para probar
while (intentos < 7 && !adivinado) {
  // Cambia el valor de guess manualmente para simular intentos
  if (guess === numeroSecreto) {
    adivinado = true;
    break;
  } else if (Math.abs(guess - numeroSecreto) <= 3 && guess !== numeroSecreto) {
    console.log("¡Cerca!");
  } else if (guess > numeroSecreto) {
    console.log("Muy alto");
  } else if (guess < numeroSecreto) {
    console.log("Muy bajo");
  }
  intentos++;
  break; // Elimina este break para simular varios intentos manualmente
}
if (adivinado) {
  console.log("¡Adivinaste el número!");
} else {
  console.log("No adivinaste el número en 7 intentos.");
}
