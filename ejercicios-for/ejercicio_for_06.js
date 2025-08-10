// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). Debe mostrar el proceso paso a paso.

function potencia(base, exponente) {
  let resultado = 1;
  console.log(`Calculando ${base}^${exponente} paso a paso:`);
  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
    console.log(`Paso ${i}: ${base} ^ ${i} = ${resultado}`);
  }
  return resultado;
}

let base = 3;
let exponente = 4;
let resultado = potencia(base, exponente);
console.log(`Resultado final: ${base}^${exponente} = ${resultado}`);
