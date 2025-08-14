// Desarrolla un programa que use un ciclo while para procesar calificaciones de estudiantes. Debe continuar pidiendo calificaciones hasta que se ingrese -1, luego calcular y mostrar el promedio, la calificación más alta y más baja.

let calificaciones = [3.5, 4.2, 2.8, 5.0, 3.9, -1]; // Cambia los valores para probar
let suma = 0;
let cantidad = 0;
let mayor = null;
let menor = null;
let i = 0;
while (i < calificaciones.length && calificaciones[i] !== -1) {
  let nota = calificaciones[i];
  suma += nota;
  if (mayor === null || nota > mayor) mayor = nota;
  if (menor === null || nota < menor) menor = nota;
  cantidad++;
  i++;
}
if (cantidad > 0) {
  let promedio = suma / cantidad;
  console.log("Promedio:", promedio.toFixed(2));
  console.log("Calificación más alta:", mayor);
  console.log("Calificación más baja:", menor);
} else {
  console.log("No se ingresaron calificaciones válidas.");
}
