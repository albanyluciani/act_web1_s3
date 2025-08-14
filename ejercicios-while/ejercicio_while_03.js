/*Implementa un sistema que use un ciclo while para solicitar una contraseña al usuario hasta que ingrese "admin123". Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto*/

let contrasena = "343895";
let intentos = 0;

while (contrasena !== "admin123") {
  intentos++;
  console.log("Credenciales incorrectos. Intento fallido: " + intentos);
  break;

  if (contrasena === "admin123") {
    console.log("¡Acceso concedido!");
  }
}
